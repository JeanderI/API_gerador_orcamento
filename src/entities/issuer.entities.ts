import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Estimate } from "./estimate.entities";
import { AccountReceivable } from "./accountsreceivable.entities";
import { AccountPayable } from "./accountspayable.entities";

@Entity("issuer")
export class Issuer {
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

	@Column({ unique: true })
	cnpj: string;

	@Column()
	name: string;

	@Column()
	company_name: string;

	@Column()
	state_registration: string;

	@Column()
	email: string;

	@Column()
	phone_number: string;

	@Column()
	password: string;

	@OneToMany(() => Estimate, (estimate) => estimate.issuer)
	estimates: Estimate[];

	@OneToMany(
		() => AccountReceivable,
		(accountReceivable) => accountReceivable.issuer
	)
	accountReceivables: AccountReceivable[];

	@OneToMany(() => AccountPayable, (accountPayable) => accountPayable.issuer)
	accountPayables: AccountPayable[];
}
