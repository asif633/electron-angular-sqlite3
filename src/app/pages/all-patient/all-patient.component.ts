import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient/patient.service';
import { NzMessageService } from 'ng-zorro-antd';
import { RouteInterceptorService } from '../../route.interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-patient',
  templateUrl: './all-patient.component.html',
  styleUrls: ['./all-patient.component.scss']
})
export class AllPatientComponent implements OnInit {
  patients: any[];
  loading: boolean;
  
  constructor(private patientServ: PatientService, private message: NzMessageService, private routerServ: RouteInterceptorService, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.patientServ.getPatients().then((res:any) => {
      console.log('patients', res);
      this.patients = res;
      this.loading = false;
    });
  }

  cancel(): void {
    
  }

  confirm(id): void {
    // this.patientServ.deletePatient(id).subscribe((res:any) => {
    //   console.log('del', res);
    //   this.patients.splice(this.patients.findIndex(pat => pat.id === id),1);
    // });
  }

  getBack() {
    this.routerServ.previousUrl ? this.router.navigate([this.routerServ.previousUrl]): false;
  }

}
