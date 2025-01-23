import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("accountPayables")
export class AccountPayable {
    @PrimaryGeneratedColumn("uuid")
    id: string;
}