import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from "typeorm";
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

    @ManyToMany(() => Estimate, (estimate) => estimate.flavors)
    estimates: Estimate[];  // Relaciona vários Estimates com o Flavor
}
