import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { NewPatientComponent } from '../new-patient/new-patient.component';
import { AllPatientComponent } from '../all-patient/all-patient.component';
import { PatientPrescriptionComponent } from '../patient-prescription/patient-prescription.component';
import { SharedModule } from '../../shared.module';
import { PatientService } from './patient.service';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';
import { PatientPrescriptionViewComponent } from '../patient-prescription-view/patient-prescription-view.component';
import { PatientHistoryComponent } from '../patient-history/patient-history.component';
import { CheckupService } from './checkup.service';


@NgModule({
  declarations: [NewPatientComponent, AllPatientComponent, PatientPrescriptionComponent, PatientDetailComponent, PatientPrescriptionViewComponent, PatientHistoryComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule
  ],
  providers: [PatientService, CheckupService]
})
export class PatientModule { }
