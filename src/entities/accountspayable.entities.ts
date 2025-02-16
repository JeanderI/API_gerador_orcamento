import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Issuer } from "./issuer.entities";

@Entity("accountPayables")
export class AccountPayable {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	expense_category: string;

	@Column()
	issue_date: string;

	@Column()
	cost: string;

	@Column()
	payment_proof: string;

	@ManyToOne(() => Issuer, (issuer) => issuer.accountPayables)
	issuer: Issuer;
}
