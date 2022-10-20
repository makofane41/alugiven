import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//export class RegisterComponent implements OnInit {

  //constructor() { }

  //ngOnInit(): void {
  //}

//}
export class RegisterComponent {
   title=" Register Account";

   constructor(private http:HttpClient){
     
   }

  onUsers(users:{alumni_name:string,alumni_surname:string,alumni_email:string,alumni_password:string,alumni_faculty:string}){
     
    console.log(users);
    this.http.post('http://3.88.53.196:3100/api/v1/register',users)
    .subscribe((res)=>{
      console.log(res);

      
    });

  }

  }
