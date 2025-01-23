import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}