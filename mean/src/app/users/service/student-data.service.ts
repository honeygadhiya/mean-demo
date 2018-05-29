import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Student} from '../model/student';
@Injectable()
export class StudentDataService {
  data=[];
  //url="http://localhost:5555/student";
  constructor(private http:Http) { }
  getData(){
     return this.http.get("http://localhost:5555/user")
      .map((response:Response)=>
         response.json()
          );
  }

  addData(data:Student){
    return this.http.post("http://localhost:5555/user", data);
  }

  getDataById(id:number){
    // return this.http.get("http://localhost:5555/student"+"/"+id)
    return this.http.get(`http://localhost:5555/user/${id}`)
      .map((response:Response)=>
      response.json()
    );
   
  }

  deleteData(id:number){
    return this.http.delete(`http://localhost:5555/user/${id}`);
  }
 
  updateData(data:Student){
    return this.http.put(`http://localhost:5555/user/${data.id}`,data);
      
  }

}
