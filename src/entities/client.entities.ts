import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Estimate } from "./estimate.entities";
import { AccountReceivable } from "./accountsreceivable.entities";

@Entity("clients")
export class Client {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ unique: true })
	cnpj: string;

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
