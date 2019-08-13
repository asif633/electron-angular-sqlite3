import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPatientComponent } from '../all-patient/all-patient.component';
import { NewPatientComponent } from '../new-patient/new-patient.component';
import { PatientPrescriptionComponent } from '../patient-prescription/patient-prescription.component';
import { PatientPrescriptionViewComponent } from '../patient-prescription-view/patient-prescription-view.component';
import { PatientHistoryComponent } from '../patient-history/patient-history.component';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';


const routes: Routes = [
  { path: '', component: AllPatientComponent},
  { path: 'new', component: NewPatientComponent},
  { path: 'detail/:id', component: PatientDetailComponent},
  { path: 'new-prescription/:id', component: PatientPrescriptionComponent},
  { path: 'all-prescriptions/:id', component: PatientHistoryComponent},
  { path: 'all-prescriptions', component: PatientHistoryComponent},
  { path: 'view-prescription/:id', component: PatientPrescriptionViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
