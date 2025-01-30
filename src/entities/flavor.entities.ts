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

    @Column()
    total: string;

    @ManyToMany(() => Estimate, (estimate) => estimate.flavors)
    estimates: Estimate[];  
}
