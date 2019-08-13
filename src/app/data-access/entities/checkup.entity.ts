import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, ManyToOne } from "typeorm";
import { Patient } from "./patient.entity";

export enum TimeEnum {
    DAYS = "days",
    MONTHS = "months",
    YEARS = "years"
}

@Entity({name: 'checkup'})
export class Checkup extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @CreateDateColumn()
    checkUpDate: Date;

    @Column({nullable: true})
    instruction: string;

    @Column()
    nextVisit: number;

    @ManyToOne(type => Patient, {eager: true})
    patient: Patient;

    @Column()
    nextVisitEnum: string;

    @Column("simple-json")
    sympdiag: { symptoms: any, diagnosis: any }

    @Column("simple-json")
    tests: [{ name: string, instruction: string, result: string }];

    @Column("simple-json")
    medicines: [{name: string, instruction: string, frequency: number, duration: number, freqEnum: string}];

}