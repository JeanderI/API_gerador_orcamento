import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Issuer } from "./issuer.entities";
import { Client } from "./client.entities";

@Entity("accountReceivable")
export class AccountReceivable {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	created_on: string;

	@Column()
	installments: string;

	@Column()
	discount: string;

	@Column()
	payment_status: string;

	// Relacionamento N:1 com Issuer
	@ManyToOne(() => Issuer, (issuer) => issuer.accountReceivables)
	issuer: Issuer;

	// Relacionamento N:1 com Client
	@ManyToOne(() => Client, (client) => client.accountReceivables, {
		onDelete: "CASCADE",
	})
	client: Client;
}
