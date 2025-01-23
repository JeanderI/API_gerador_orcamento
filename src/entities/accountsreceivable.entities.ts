import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accountReceivable")
export class AccountReceivable {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    created_on: string;

    @Column()
    installments: string;

    @Column()
    discount: string;

    @Column()
    payment_status: string;
}