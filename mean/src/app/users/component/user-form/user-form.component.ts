import { Component, OnInit,TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../../model/student';
import { StudentDataService } from '../../service/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private studentDataService: StudentDataService, 
              private router: Router, 
              private actRoute: ActivatedRoute,
            ) {
                this.loadform();
               }
  branch = ["CE", "EC", "IT"];
  id = this.actRoute.snapshot.params['id'];

  myGroup: FormGroup;
  user :Student;
  isButton=false;
  ngOnInit() {
    if(this.id){
          this.editform(this.id);
     }
  }
  addData() {
      this.studentDataService.addData(this.myGroup.value).subscribe(response => {
      this.router.navigate([""]);
    });
  }

  updateData(user:Student){
    this.studentDataService.updateData(user).subscribe(()=>{
      this.router.navigate([""]);
    })
  }


  loadform()
  {
    this.myGroup = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      branch: new FormControl(''),
      gender: new FormControl('')
      // location: new FormGroup('')
    });
  }

  editform(id:number){
    this.studentDataService.getDataById(id).subscribe((response)=>{
      this.user = response;
      this.isButton=true;
      this.myGroup.patchValue({
        "id":this.user.id,
        "name":this.user.name,
        "branch":this.user.branch,
        "gender":this.user.gender
      });
  })
  }
 
}

