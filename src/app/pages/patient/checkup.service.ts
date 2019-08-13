import { Injectable } from "@angular/core";
import {DatabaseService} from "../../data-access/database.service";
import { Checkup } from "../../data-access/entities/checkup.entity";

@Injectable()
export class CheckupService {
    constructor(private databaseService: DatabaseService) {

    }

    async getCheckups(patientId){
        await this.databaseService.connection;
        return Checkup.find({where: {patient: patientId}});
    }

    async getAllCheckups(){
        await this.databaseService.connection;
        return Checkup.find();
    }

    async addCheckup({instruction, nextVisit, nextVisitEnum, medicines, tests, patient, sympdiag}){
        await this.databaseService.connection;
        const checkup = new Checkup();
        checkup.instruction = instruction;
        checkup.nextVisit = nextVisit;
        checkup.nextVisitEnum = nextVisitEnum;
        checkup.medicines = medicines;
        checkup.tests = tests;
        checkup.patient = patient;
        checkup.sympdiag = sympdiag;
        return checkup.save();
    }

    getCheckup(Id) {
        return this.databaseService
            .connection
            .then(() => Checkup.find({where: {Id: Id}}));
    }

    

}
