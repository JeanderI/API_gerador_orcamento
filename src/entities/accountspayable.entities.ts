import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Issuer } from "./issuer.entities";  // Importe a entidade Issuer

@Entity("accountPayables")
export class AccountPayable {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    expense_category: string;

    @Column()
    issue_date: string;

    @Column()
    cost: string;

    @Column()
    payment_proof: string;

    // Relacionamento N:1 com Issuer
    @ManyToOne(() => Issuer, issuer => issuer.accountPayables)
    issuer: Issuer;  // Relaciona cada AccountPayable a um Issuer
}
