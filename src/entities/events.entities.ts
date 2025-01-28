import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("events")
export class Event {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    duration: string;

    @Column()
    period: string;

    @Column()
    number_attendants: string;  

    @Column()
    number_clients: string;

    @Column()
    type: string
}