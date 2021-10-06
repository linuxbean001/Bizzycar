import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private ngbModal: NgbModal,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      numberOfPassenger: ['', Validators.compose([Validators.required])],
      contactAddress1: ['', Validators.compose([Validators.required])],
      contactAddress2: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      region: ['', Validators.compose([Validators.required])],
      pinCode: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      vehicle: ['', Validators.compose([Validators.required])],
      pickUpDate: ['', Validators.compose([Validators.required])],
      pickUpTime: ['', Validators.compose([Validators.required])],
      rentalEndDate: ['', Validators.compose([Validators.required])],
      rentalEndTime: ['', Validators.compose([Validators.required])],
      pickUpPointAddress1: ['', Validators.compose([Validators.required])],
      pickUpPointAddress2: ['', Validators.compose([Validators.required])],
      pickUpPointCity: ['', Validators.compose([Validators.required])],
      pickUpPointRegion: ['', Validators.compose([Validators.required])],
      pickUpPointPostalCode: ['', Validators.compose([Validators.required])],
      pickUpPointState: ['', Validators.compose([Validators.required])],
      designationAddress1: ['', Validators.compose([Validators.required])],
      designationAddress2: ['', Validators.compose([Validators.required])],
      designationCity: ['', Validators.compose([Validators.required])],
      designationRegion: ['', Validators.compose([Validators.required])],
      designationPostalCode: ['', Validators.compose([Validators.required])],
      designationState: ['', Validators.compose([Validators.required])],
      note: ['', Validators.compose([Validators.required])],
    });
  }
  public closeModal(): void {
    this.ngbModal.dismissAll();
  }

  public save(): void {
    console.log('this.form.value', this.form.value);
    this.activeModal.close(this.form.value);
  }
}
