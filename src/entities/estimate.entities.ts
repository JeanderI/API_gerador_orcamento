import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
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

    @ManyToOne(() => Client)
    client: Client;

    @OneToMany(() => Flavor, flavor => flavor.estimate)
    flavors: Flavor[]

    @ManyToOne(() => Location)
    locations: Location;

    // Relacionamento com Issuer (um Estimate pertence a um Issuer)
    @ManyToOne(() => Issuer, issuer => issuer.estimates)
    issuer: Issuer;

    @ManyToOne(() => Event)
    events: Event

}
