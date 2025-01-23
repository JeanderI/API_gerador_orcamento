import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    email: string; 

    @Column()
    phone_number: string; 

    @Column()
    neighborhood: string; 
}