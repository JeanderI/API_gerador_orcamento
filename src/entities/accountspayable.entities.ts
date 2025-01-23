import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}