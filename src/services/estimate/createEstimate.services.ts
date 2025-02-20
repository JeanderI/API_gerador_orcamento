import { AppDataSource } from "../../data-source";
import { In, Repository } from "typeorm";
import { Client } from "../../entities/client.entities";
import { Issuer } from "../../entities/issuer.entities";
import { Location } from "../../entities/locations.entities";
import { Flavor } from "../../entities/flavor.entities";
import { Event } from "../../entities/events.entities";
import { Estimate } from "../../entities/estimate.entities";
import { AccountReceivable } from "../../entities/accountsreceivable.entities";
import { AccountPayable } from "../../entities/accountspayable.entities";

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

	try {
		const client = await clientRepository.findOneBy({ id: data.client });
		const issuer = await issuerRepository.findOne({ where: { id: issuerId } });
		const location = await locationRepository.findOne({
			where: { id: data.locations },
		});
		const event = await eventRepository.findOne({ where: { id: data.events } });

		if (!client || !issuer || !location || !event) {
			throw new Error("Client, Issuer, Location or Event not found");
		}

		const locationTotal = parseFloat(location.total) || 0;
		const eventTotal = parseFloat(event.total) || 0;

		let flavorsTotal = 0;
		if (data.flavors && Array.isArray(data.flavors)) {
			const flavors = await flavorRepository.findBy({ id: In(data.flavors) });
			flavorsTotal = flavors.reduce(
				(sum, flavor) => sum + (parseFloat(flavor.total) || 0),
				0
			);
		}

		const totalAmount = locationTotal + eventTotal + flavorsTotal;

		const royalties = totalAmount * 0.06;

		const bonusValue =
			data?.bonus > 0 && totalAmount > 0
				? totalAmount * (parseFloat(data.bonus) / 100)
				: 0;

		const newEstimate = new Estimate();
		newEstimate.total_amount = totalAmount.toFixed(2);
		newEstimate.sales_type = data.sales_type;
		newEstimate.start_date = data.start_date;
		newEstimate.start_time = data.start_time;
		newEstimate.end_date = data.end_date;
		newEstimate.end_time = data.end_time;
		newEstimate.bonus = data.bonus;
		newEstimate.client = client;
		newEstimate.issuer = issuer;
		newEstimate.locations = location;
		newEstimate.events = event;

		if (data.flavors && Array.isArray(data.flavors)) {
			newEstimate.flavors = await flavorRepository.findBy({
				id: In(data.flavors),
			});
		}

		newEstimate.bonus_value = bonusValue;
		newEstimate.royalties = royalties.toFixed(2);

		const createdEstimate = await estimateRepository.save(newEstimate);

		const accountReceivable = accountReceivableRepository.create({
			created_on: new Date().toISOString(),
			installments: "1",
			discount: "0",
			payment_status: "pending",
			issuer,
			client,
		});
		await accountReceivableRepository.save(accountReceivable);

		const accountPayable = accountPayableRepository.create({
			expense_category: "Produto",
			issue_date: new Date().toISOString(),
			cost: totalAmount.toFixed(2),
			payment_proof: "",
			issuer,
		});
		await accountPayableRepository.save(accountPayable);

		return {
			id: createdEstimate.id,
			total_amount: createdEstimate.total_amount,
			sales_type: createdEstimate.sales_type,
			start_date: createdEstimate.start_date,
			end_date: createdEstimate.end_date,
			royalties,
			bonusValue,
			accountReceivable,
			accountPayable,
		};
	} catch (error) {
		console.error("❌ Erro ao criar orçamento:", error);
		throw new Error("Erro ao criar o orçamento");
	}
};

export { createEstimateService };
