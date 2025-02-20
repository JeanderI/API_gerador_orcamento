import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Estimate } from "./estimate.entities";
import { AccountReceivable } from "./accountsreceivable.entities";

@Entity("clients")
export class Client {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	city: string;

	@Column()
	state: string;

	@Column()
	address: string;

	@Column()
	number: string;

	@Column()
	cep: string;

	@Column({ unique: true, nullable: true })
	cnpj: string;

	@Column({ unique: true })
	cpf: string;

	@Column({ unique: true })
	rg: string;

	@Column()
	name: string;

	@Column({ unique: true })
	company_name: string;

	@Column()
	state_registration: string;

	@Column()
	email: string;

	@Column()
	phone_number: string;

	// Relacionamento 1:N com Estimate
	@OneToMany(() => Estimate, (estimate) => estimate.client)
	estimates: Estimate[];

	// Relacionamento 1:N com AccountReceivable
	@OneToMany(
		() => AccountReceivable,
		(accountReceivable) => accountReceivable.client
	)
	accountReceivables: AccountReceivable[];
}
