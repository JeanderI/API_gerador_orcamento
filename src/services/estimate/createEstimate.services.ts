import { AppDataSource } from "../../data-source";
import { AccountPayable, AccountReceivable, Estimate } from "../../entities";
import { In, Repository } from "typeorm";
import { Client } from "../../entities/client.entities";
import { Issuer } from "../../entities/issuer.entities";
import { Location } from "../../entities/locations.entities";
import { Flavor } from "../../entities/flavor.entities";
import { Event } from "../../entities/events.entities";

const createEstimateService = async (data: any, issuerId: string) => {
	const estimateRepository: Repository<Estimate> =
		AppDataSource.getRepository(Estimate);
	const clientRepository: Repository<Client> =
		AppDataSource.getRepository(Client);
	const issuerRepository: Repository<Issuer> =
		AppDataSource.getRepository(Issuer);
	const locationRepository: Repository<Location> =
		AppDataSource.getRepository(Location);
	const flavorRepository: Repository<Flavor> =
		AppDataSource.getRepository(Flavor);
	const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);
	const accountReceivableRepository: Repository<AccountReceivable> =
		AppDataSource.getRepository(AccountReceivable);
	const accountPayableRepository: Repository<AccountPayable> =
		AppDataSource.getRepository(AccountPayable);

	const client = await clientRepository.findOneBy({ id: data.client });
	const issuer = await issuerRepository.findOne({ where: { id: issuerId } });
	const location = await locationRepository.findOne({
		where: { id: data.locations },
	});
	const event = await eventRepository.findOne({ where: { id: data.events } });

	if (!client || !issuer || !location || !event) {
		throw new Error("Client, Issuer, Location or Event not found");
	}

	// Criar o orçamento (Estimate)
	const newEstimate = estimateRepository.create({
		total_amount: data.total_amount,
		sales_type: data.sales_type,
		start_date: data.start_date,
		start_time: data.start_time,
		end_date: data.end_date,
		end_time: data.end_time,
		client,
		issuer,
		locations: location,
		events: event,
	});

	if (data.flavors && Array.isArray(data.flavors)) {
		const flavors = await flavorRepository.findBy({
			id: In(data.flavors),
		});
		newEstimate.flavors = flavors;
	}

	const createdEstimate = await estimateRepository.save(newEstimate);

	// Criar e salvar AccountReceivable (Contas a Receber)
	const accountReceivable = accountReceivableRepository.create({
		created_on: new Date().toISOString(),
		installments: "1",
		discount: "0",
		payment_status: "pending",
		issuer,
	});

	console.log("AccountReceivable antes do save:", accountReceivable);
	await accountReceivableRepository.save(accountReceivable);

	// Criar e salvar AccountPayable (Contas a Pagar)
	const accountPayable = accountPayableRepository.create({
		expense_category: "Produto",
		issue_date: new Date().toISOString(),
		cost: data.total_amount,
		payment_proof: "",
		issuer,
	});

	console.log("AccountPayable antes do save:", accountPayable);
	await accountPayableRepository.save(accountPayable);

	// Retornar o orçamento criado junto com as contas a pagar e receber
	return {
		...createdEstimate,
		accountReceivable,
		accountPayable,
	};
};

export { createEstimateService };
