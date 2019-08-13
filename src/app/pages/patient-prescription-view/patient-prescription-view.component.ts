import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient/patient.service';
import { RouteInterceptorService } from '../../route.interceptor.service';
import { CheckupService } from '../patient/checkup.service';
import {ipcRenderer} from 'electron';

@Component({
  selector: 'app-patient-prescription-view',
  templateUrl: './patient-prescription-view.component.html',
  styleUrls: ['./patient-prescription-view.component.scss']
})
export class PatientPrescriptionViewComponent implements OnInit {
  prescriptionId: string;
  prescription: any;
  profile: any;
  constructor(private actRoute: ActivatedRoute, private patientServ: PatientService, private router: Router, private routerServ: RouteInterceptorService, private checkupServ: CheckupService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.prescriptionId = params['id'];
      this.getPrescription();
    });
    this.getProfile();
  }

  getProfile() {
    // this.profileServ.getProfile(14).subscribe((res:any) => {
    //   this.profile = res;
    //   console.log('profile', res);
    // });
  }

  print() {
    ipcRenderer.send('print-to-pdf');
  }

  getPrescription() {
    this.checkupServ.getCheckup(this.prescriptionId).then((res: any) => {
      console.log('pres', res);
      this.prescription = res[0];
    });
  }

  getBack() {
    this.routerServ.previousUrl ? this.router.navigate([this.routerServ.previousUrl]): false;
  }

}
