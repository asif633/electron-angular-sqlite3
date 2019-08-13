import { Injectable } from "@angular/core";
import {DatabaseService} from "../../data-access/database.service";
import { Patient } from "../../data-access/entities/patient.entity";

@Injectable()
export class PatientService {
    constructor(private databaseService: DatabaseService) {

    }

    async getPatients(){
        await this.databaseService.connection;
        return Patient.find();
    }

    async addPatient({name, age, ageEnum, phonenumber, email, entryDate, gender, address}){
        await this.databaseService.connection;
        const patient = new Patient();
        patient.name = name;
        patient.address = address;
        patient.age = age;
        patient.ageEnum = ageEnum;
        patient.phonenumber = phonenumber;
        patient.email = email;
        patient.entryDate = entryDate,
        patient.gender = gender;
        return patient.save();
    }

    getPatient(Id) {
        return this.databaseService
            .connection
            .then(() => Patient.find({where: {Id: Id}}));
    }

    

}
