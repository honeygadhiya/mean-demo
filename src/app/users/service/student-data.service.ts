import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Student} from '../model/student';
@Injectable()
export class StudentDataService {
  data=[];
  url = 'http://localhost:8088/user';
  
  constructor(private http:Http) { }
  getData(){
     return this.http.get(this.url)
      .map((response:Response)=>
         response.json()
          );
  }

  addData(data:Student){
    return this.http.post(this.url, data);
  }

  getDataById(id:number){
    return this.http.get(`${this.url}/${id}`)
      .map((response:Response)=>
      response.json()
    );
   
  }

  deleteData(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
