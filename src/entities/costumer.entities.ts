import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Estimate } from "./estimate.entities";


@Entity("costumers")
export class Costumer {
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

    // Relacionamento 1:N com Estimate
    @OneToMany(() => Estimate, estimate => estimate.costumer)
    estimates: Estimate[];  // Um Costumer pode ter múltiplos Estimates
}
