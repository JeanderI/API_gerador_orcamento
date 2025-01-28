import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Estimate } from "./estimate.entities";


@Entity("flavors")
export class Flavor {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    price: string;

    @Column()
    name: string;

    @Column()
    quantity: string;

    // Relacionamento N:1 com Estimate
    @ManyToOne(() => Estimate, estimate => estimate.flavors)
    estimate: Estimate;  // Relaciona cada Flavor a um Estimate
}
