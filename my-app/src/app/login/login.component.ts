import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['contact']);
  }
  submit() {
    debugger;
    if (this.form.valid) {
      let username=this.form.value.username;
      let password=this.form.value.password;
      let body={"loginName":this.form.value.username,"password":this.form.value.password}
        const url = `http://10.154.195.196:8190/LoginManagementService/V1.0/userlogin/validateloginauth`;
        // return this.http.post<any>(`${config.apiUrl}`, { username, password })
        return this.http.post<any>(`${url}`,body).subscribe(a=>{
          debugger;
          localStorage.setItem('auth-token',a.tokenJWT);
          this.router.navigate(['contact']);
        })
          
  
     // this.router.navigate(['contact']);
    }
  }


}
