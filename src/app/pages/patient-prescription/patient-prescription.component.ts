import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient/patient.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { RouteInterceptorService } from '../../route.interceptor.service';
import { CheckupService } from '../patient/checkup.service';

@Component({
  selector: 'app-patient-prescription',
  templateUrl: './patient-prescription.component.html',
  styleUrls: ['./patient-prescription.component.scss']
})
export class PatientPrescriptionComponent implements OnInit {
  patientId: string;
  patient: any;
  loading = false;
  symptoms = [];
  diags = [];
  medicines = [];
  tests = [];
  sympdiag: any;
  constructor(private actRoute: ActivatedRoute, private patientServ: PatientService, private fb: FormBuilder, private message: NzMessageService, private router: Router, private routerServ: RouteInterceptorService, private checkupServ: CheckupService) { }

  ngOnInit() {
    this.sympForm = this.fb.group({
      symptom: [null],
      diagnosis: [null],
    });
    this.medForm = this.fb.group({
      name: [null, [Validators.required]],
      frequency: [null, [Validators.required]],
      freqEnum: ['24 hours'],
      duration: [null, [Validators.required]],
      instruction: [null, [Validators.required]],
    });
    this.testForm = this.fb.group({
      name: [null, [Validators.required]],
      instruction: [null, [Validators.required]],
      result: [null, [Validators.required]],
    });
    this.checkupForm = this.fb.group({
      instruction: [null, [Validators.required]],
      nextVisit: [null, [Validators.required]],
      nextVisitEnum: ['days', [Validators.required]],
    });
    this.actRoute.params.subscribe(params => {
      this.patientId = params['id'];
      this.getPatientDetail();
    });
  }

  getPatientDetail() {
    this.loading = true;
    this.patientServ.getPatient(this.patientId).then(res => {
      console.log('patient', res);
      this.patient = res[0];
      this.loading = false;
    });
  }

  addSymptom(event) {
    if (this.sympForm.value.symptom) {
      if (this.sympForm.value.symptom.trim() !== '') {
        this.symptoms.push(this.sympForm.value.symptom);
      }
    }
    this.sympForm.patchValue({symptom: null});
  }

  addDiag(event) {
    if (this.sympForm.value.diagnosis) {
      if (this.sympForm.value.diagnosis.trim() !== '') {
        this.diags.push(this.sympForm.value.diagnosis);
      }
    }
    this.sympForm.patchValue({diagnosis: null});
  }

  sympForm: FormGroup;
  medForm: FormGroup;
  testForm: FormGroup;
  checkupForm: FormGroup;

  submitMed() {
    for (const i in this.medForm.controls) {
      this.medForm.controls[i].markAsDirty();
      this.medForm.controls[i].updateValueAndValidity();
    }
    if (this.medForm.valid) {
        this.medicines = [...this.medicines, this.medForm.value];
        this.medForm.reset();
        this.medForm.markAsPristine();
    }
  }

  submitTest() {
    for (const i in this.testForm.controls) {
      this.testForm.controls[i].markAsDirty();
      this.testForm.controls[i].updateValueAndValidity();
    }
    if (this.testForm.valid) {
      this.tests = [...this.tests, this.testForm.value];
    }
  }

  submitCheckup() {
    for (const i in this.checkupForm.controls) {
      this.checkupForm.controls[i].markAsDirty();
      this.checkupForm.controls[i].updateValueAndValidity();
    }
    if (this.checkupForm.valid) {
      this.loading = true;
      const message = this.createBasicMessage('loading', 'Creating checkup entry ....');
      this.checkupServ.addCheckup({
        instruction: this.checkupForm.value.instruction,
        nextVisit: this.checkupForm.value.nextVisit,
        nextVisitEnum: this.checkupForm.value.nextVisitEnum,
        medicines: this.medicines,
        tests: this.tests,
        patient: this.patient,
        sympdiag: { symptoms: this.symptoms, diagnosis: this.diags},
      }).then((res:any) => {
        this.loading = false;
        message.state = 'leave';
        message.onClose!
          .subscribe(() => {
            this.message.success('Checkup added', { nzDuration: 2000 }).onClose!.subscribe(() => this.router.navigate(['/patient/view-prescription', res.Id]));
        });
        console.log('res', res);
      }, err => {
        this.loading = false;
        message.state = 'leave';
        message.onClose!
          .subscribe(() => {
            this.message.error('Checkup could not be added', { nzDuration: 2000 });
        });
      });
    }
  }

  confirmMedDel(id) {
    this.medicines.splice(id,1);
  }

  confirmTestDel(id) {
    this.tests.splice(id,1);
  }

  createBasicMessage(type, message) {
    return this.message.create(type,message);
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.sympForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  handleCloseSymp(i) {
    this.symptoms.splice(i, 1);
  }

  handleCloseDiag(i) {
    this.diags.splice(i, 1);
  }

  getBack() {
    this.routerServ.previousUrl ? this.router.navigate([this.routerServ.previousUrl]): false;
  }

}
