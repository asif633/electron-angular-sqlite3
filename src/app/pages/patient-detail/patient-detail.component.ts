import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient/patient.service';
import { RouteInterceptorService } from '../../route.interceptor.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
  patient: any;
  prescriptions: any[];
  patientId: string;
  loading = false;
  data: any[] = [];
  constructor(private actRoute: ActivatedRoute, private patientServ: PatientService, private router: Router, private routerServ: RouteInterceptorService) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.patientId = params['id'];
      this.getPatientDetail();
    });
    this.loadData(1);
  }

  getPatientDetail() {
    this.loading = true;
    this.patientServ.getPatient(this.patientId).then(res => {
      console.log('pat', res, this.patientId);
      this.patient = res[0];
      this.loading = false;
    });
  }

  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => {
      return {
        href: 'http://ant.design',
        title: `ant design part ${index} (page: ${pi})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      };
    });
  }

  getBack() {
    this.routerServ.previousUrl ? this.router.navigate([this.routerServ.previousUrl]): false;
  }

}
