import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Period {
	MORNING = "manhã",
	AFTERNOON = "tarde",
	EVENING = "noite",
	DAWN = "madrugada",
}

export enum Type {
	PIAGGIO = "piaggio",
	SHOWCASE = "showcase",
}

@Entity("events")
export class Event {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	duration: string;

	@Column({ type: "enum", enum: Period })
	period: Period;

	@Column()
	number_clients: string;

	@Column({ type: "enum", enum: Type })
	type: string;

	@Column()
	cleaning_cost: string;

	@Column()
	showcase_cost: string;

	@Column()
	piaggio_cost: string;

	@Column()
	number_attendants: string;

	@Column()
	hourly_rate: string;

	@Column()
	food_allowance: string;

	@Column()
	transport_allowance: string;

	@Column()
	total: string;

	@Column()
	start_date: string;

	@Column()
	start_time: string;

	@Column()
	end_date: string;

	@Column()
	end_time: string;
}
