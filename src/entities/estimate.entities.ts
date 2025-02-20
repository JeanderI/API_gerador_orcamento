import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	ManyToMany,
	JoinTable,
	BeforeInsert,
} from "typeorm";
import { Issuer } from "./issuer.entities";
import { Flavor } from "./flavor.entities";
import { Client } from "./client.entities";
import { Event } from "./events.entities";
import { Location } from "./locations.entities";

@Entity("estimates")
export class Estimate {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	total_amount: string;

	@Column()
	sales_type: string;

	@Column()
	start_date: string;

	@Column()
	start_time: string;

	@Column()
	end_date: string;

	@Column()
	end_time: string;

	@Column()
	royalties: string;

	@Column()
	bonus: string;

	@Column()
	bonus_value: number;

	@ManyToOne(() => Client)
	client: Client;

	@ManyToMany(() => Flavor, (flavor) => flavor.estimates, {
		onDelete: "CASCADE",
	})
	@JoinTable()
	flavors: Flavor[];

	@ManyToOne(() => Location)
	locations: Location;

	@ManyToOne(() => Issuer, (issuer) => issuer.estimates)
	issuer: Issuer;

	@ManyToOne(() => Event)
	events: Event;

	@BeforeInsert()
	setDefaultDates() {
		const now = new Date();

		// Define start_date e start_time como a data e hora atuais
		this.start_date = now.toISOString().split("T")[0]; // Exemplo: '2025-01-30'
		this.start_time = now.toISOString().split("T")[1].split(".")[0]; // Exemplo: '16:37:36'

		// Define end_date como 30 dias após o start_date
		const endDate = new Date(now);
		endDate.setDate(now.getDate() + 30); // Adiciona 30 dias à data atual
		this.end_date = endDate.toISOString().split("T")[0]; // Exemplo: '2025-03-01'

		// Define end_time como 1 hora após o start_time
		const endTime = new Date(now);
		endTime.setHours(now.getHours() + 1); // Define 1 hora após o start_time

		// Garantir que os minutos e segundos sejam definidos corretamente
		endTime.setMinutes(now.getMinutes(), 0, 0); // Ajuste para manter os minutos de start_time, mas zerando segundos e milissegundos.
		this.end_time = endTime.toISOString().split("T")[1].split(".")[0]; // Exemplo: '17:37:36'
	}
}
