import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteInterceptorService } from '../../route.interceptor.service';
import { CheckupService } from '../patient/checkup.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {
  prescriptions = [];
  patientId: string;
  loading = false;
  prescription: any;
  constructor(private actRoute: ActivatedRoute, private checkupServ: CheckupService, private router: Router, private routerServ: RouteInterceptorService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.patientId = params['id'];
      this.patientId ?
      this.getPrescriptions() : this.getAllPrescriptions();
    });
  }

  getPrescriptions() {
    this.loading = true;
    this.checkupServ.getCheckups(this.patientId).then((res:any) => {
      console.log('pres', res);
      this.loading = false;
      this.prescriptions = res;
    });
  }

  getAllPrescriptions() {
    this.loading = true;
    this.checkupServ.getAllCheckups().then((res:any) => {
      console.log('pres', res);
      this.loading = false;
      this.prescriptions = res;
    });
  }

  setPrescription(data) {
    this.prescription = data;
  }

  getBack() {
    this.routerServ.previousUrl ? this.router.navigate([this.routerServ.previousUrl]): false;
  }

}
