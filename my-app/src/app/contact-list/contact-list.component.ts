import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  displayedColumns: string[] = ['loginName', 'userFullName', 'id'];
  dataSource:any;



  ngOnInit() {
    debugger;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('auth-token')
    })
    this.http.get('http://10.154.195.196:8080/api/UserManagementService/V1.0/userrole/users', { headers: header }).subscribe(a=>{
debugger;
this.dataSource=a;
    });
  }

}
