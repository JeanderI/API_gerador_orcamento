import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("issuer")
export class Issuer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    cnpj: string;

    @Column()
    name: string;

    @Column()
    company_name: string; 

    @Column()
    state_registration: string; 

    @Column()
    email: string; 

    @Column()
    phone_number: string; 

    @Column()
    password: string; 
}