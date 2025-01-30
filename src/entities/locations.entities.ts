import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Estimate } from "./estimate.entities";

@Entity("locations")
export class Location {
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
    additional_adress: string;

    @Column()
    transportation_costs: string;

    @Column()
    distance: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @Column()
    neighborhood: string;

    // Relacionamento 1:1 com Estimate
    @ManyToOne(() => Estimate, estimate => estimate.locations)
    estimate: Estimate;  // Relaciona cada Location a um Estimate
}
