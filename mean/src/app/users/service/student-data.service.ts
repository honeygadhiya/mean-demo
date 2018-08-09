import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Student} from '../model/student';
@Injectable()
export class StudentDataService {
  data=[];
  url="http://65.49.37.156:8088/user";
  constructor(private http:Http) { }
  getData(){
     return this.http.get(url)
      .map((response:Response)=>
         response.json()
          );
  }

  addData(data:Student){
    return this.http.post(url, data);
  }

  getDataById(id:number){
    // return this.http.get("http://localhost:5555/student"+"/"+id)
    return this.http.get(`${url}/${id}`)
      .map((response:Response)=>
      response.json()
    );
   
  }

  deleteData(id:number){
    return this.http.delete(`${url}/${id}`);
  }
 
  updateData(data:Student){
    return this.http.put(`${url}/${data.id}`,data);
      
  }

}
