import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("estimates")
export class Estimate {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    total_amount: string;

    @Column()
    sales_type: string;

    @Column()
    costumer: string; //relacionar 

    @Column()
    flavors: string; //relacionar 

    @Column()
    locations: string; //relacionar 

    @Column()
    issuer: string; //relacionar 

    @Column()
    events: string; //relacionar 
}