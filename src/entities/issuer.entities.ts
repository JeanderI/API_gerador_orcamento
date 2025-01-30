import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Estimate } from "./estimate.entities";  // Importe a entidade Estimate
import { AccountReceivable } from "./accountsreceivable.entities";
import { AccountPayable } from "./accountspayable.entities";

@Entity("issuer")
export class Issuer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    cnpj: string;

    @Column()
    name: string;

    @Column({unique: true})
    company_name: string;

    @Column()
    state_registration: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @Column()
    password: string;

    // Relacionamento 1:N com Estimate
    @OneToMany(() => Estimate, estimate => estimate.issuer)
    estimates: Estimate[];

    // Relacionamento 1:N com AccountReceivable
    @OneToMany(() => AccountReceivable, accountReceivable => accountReceivable.issuer)
    accountReceivables: AccountReceivable[];

    // Relacionamento 1:N com AccountPayable
    @OneToMany(() => AccountPayable, accountPayable => accountPayable.issuer)
    accountPayables: AccountPayable[];
}
