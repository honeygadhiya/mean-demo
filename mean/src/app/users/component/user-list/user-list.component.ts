import { Component, OnInit, TemplateRef } from '@angular/core';
import { StudentDataService } from '../../service/student-data.service';
import { Student } from '../../model/student';
import { Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  data: Student[];
  id: number;
  modalRef: BsModalRef;
  // totalItems = 1;
  currentPage = 1;
  returnedArray: Student[];
  constructor(private studentDataService: StudentDataService,
    private router: Router,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getData();
    
  }
  getData(){
    this.studentDataService.getData().
    subscribe((response: Student[]) => {
      this.data = response;
      this.returnedArray = this.data.slice(0, 10);
    });
  }

  deleteData(id: number) {
    this.studentDataService.deleteData(id).subscribe(() => {
      this.studentDataService.getData().subscribe((response: Student[]) => {
        this.data = response;
        const startItem = (this.currentPage - 1) * 2;
        const endItem = this.currentPage * 2;
        this.returnedArray = this.data.slice(startItem, endItem);
      });
    });
    this.modalRef.hide();
  }
  editData(data: Student) {
    this.id = data.id;
    this.router.navigate(["form/" + this.id])
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  decline(): void {

    this.modalRef.hide();
  }

  pageChanged(event: PageChangedEvent): void {
    this.currentPage=event.page;
    const startItem = (this.currentPage - 1) * 2;
    const endItem = this.currentPage * 2;
    this.returnedArray = this.data.slice(startItem, endItem);
  }
  
}
