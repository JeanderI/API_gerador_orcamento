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
    start_date: string;  

    @Column()
    start_time: string;  

    @Column()
    end_date: string;  

    @Column()
    end_time: string;  

    @Column()
    number_attendants: string;  

    @Column()
    number_clients: string;
}