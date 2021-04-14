import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api';
  apiUrl= 'http://jsonplaceholder.typicode.com/users';
  apiData: any;
  constructor(private http: HttpClient){
}
ngOnInit(){
  this.http.get(this.apiUrl).subscribe((data)=>{
  console.warn(data)
  this.apiData=data;
  })
  }
  }



