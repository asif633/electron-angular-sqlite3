import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Checkup } from "./checkup.entity";

@Entity({name: 'patient'})
export class Patient extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    ageEnum: string;

    @Column()
    phonenumber: number;

    @Column()
    email: string;

    @Column()
    entryDate: Date;
    
    @Column()
    gender: string;

    @Column()
    address: string;

}