import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient/patient.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { RouteInterceptorService } from '../../route.interceptor.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  validateForm: FormGroup;
  submitLoading = false;
  toPage: string;

  constructor(private fb: FormBuilder, private patientServ: PatientService, private message: NzMessageService, private router: Router, private routerServ: RouteInterceptorService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      ageEnum: ['Years', [Validators.required]],
      gender: ['Male'],
      address: [null],
      email: [null, [Validators.email]],
      phonenumber: [null],
    });
  }

  whichButton(action) {
    this.toPage = action;
  }

  whichButtonSubmit(action) {
    this.toPage = action;
    this.submitForm();
  }

  submitForm(): void {
    console.log('topage', this.toPage);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.submitLoading = true;
      const message = this.createBasicMessage('loading', 'Creating patient entry ....');
      this.patientServ.addPatient({
        name: this.validateForm.value.name,
        email: this.validateForm.value.email,
        phonenumber: this.validateForm.value.phonenumber,
        age: this.validateForm.value.age,
        ageEnum: this.validateForm.value.ageEnum,
        address: this.validateForm.value.address,
        gender: this.validateForm.value.gender,
        entryDate: new Date()
      }).then((res:any) => {
        message.state = 'leave';
        message.onClose!
          .subscribe(() => {
            this.message.success('Patient Created', { nzDuration: 1500 }).onClose!
              .subscribe(() => {
                this.submitLoading = false;
                switch (this.toPage) {
                  case 'prescription':
                    this.router.navigate(['/patient/new-prescription', res.id]);
                    break;
                  case 'another':
                    this.validateForm.reset();
                    this.validateForm.markAsPristine();
                    this.validateForm.markAsUntouched();
                    break;
                  default:
                    this.router.navigate(['/patient']);
                    break;
                }
              }
              );
          });
        console.log('res', res);
      }, err => {
        this.submitLoading = false;
        message.state = 'leave';
        message.onClose!
          .subscribe(() => {
            this.message.error('Patient Could not be Created', { nzDuration: 2500 });
          });
      });
    }
  }

  createBasicMessage(type, message) {
    return this.message.create(type, message);
  }

  getBack() {
    this.routerServ.previousUrl ? this.router.navigate([this.routerServ.previousUrl]) : false;
  }

}
