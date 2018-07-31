import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Student } from '../../model/student';
import { StudentDataService } from '../../service/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-user-signup-form',
	templateUrl: './user-signup-form.component.html',
	styleUrls: [ './user-signup-form.component.scss' ]
})
export class UserSignupFormComponent implements OnInit {
	constructor(
		private studentDataService: StudentDataService,
		private router: Router,
		private actRoute: ActivatedRoute
	) {
		this.loadform();
  }
  myGroup: FormGroup;
  user :Student;

	ngOnInit() {}
	addData() {
		this.studentDataService.addData(this.myGroup.value).subscribe((response) => {
			this.router.navigate([ '/form' ]);
		});
  }
  
  loadform()
  {
    this.myGroup = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
}
