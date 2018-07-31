import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../../model/student';
import { StudentDataService } from '../../service/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
users: Student[];
  constructor(private studentDataService: StudentDataService, 
              private router: Router, 
              private actRoute: ActivatedRoute,
            ) {
                this.loadform();
                this.studentDataService.getData().subscribe(res=>{
                  this.users = res;
                })
               }
  myGroup: FormGroup;
  ngOnInit() {}
  
  login() {
      if(this.users.some(u=>u.username===this.myGroup.value.username)){
        console.log("exists");
        this.router.navigate([""]);
      }
      else{
        this.router.navigate(["/signup-form"]);
      }
  }

  loadform()
  {
    this.myGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
}

