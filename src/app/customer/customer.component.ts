import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  list: any = [];

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public addUser(): void {
    const modalRef = this.ngbModal.open(AddCustomerComponent,
      {
        centered: false, size: 'sm', windowClass: 'my-class', scrollable: true,
        backdrop: 'static', keyboard: false,
      });
    const addCustomerComponent: AddCustomerComponent = modalRef.componentInstance;
    modalRef.result.then(result => {
      if (result) {
        this.list.push(result);
      }
    });
  }

}
