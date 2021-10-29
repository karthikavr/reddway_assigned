import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpObj:HttpClient, private route:Router) { }

  ngOnInit(): void {
    this.getpost();
  }
  loggedin:number=1;

  logout(){
    if(this.loggedin == 1){
      this.route.navigate(['/login']);
    } else {
      this.route.navigate(['/home']);
    }
  }

  posts:any[]=[];
  getpost(){
    this.httpObj.get("https://jsonplaceholder.typicode.com/posts")
    .subscribe(response=>{
      this.posts = response as string[];
    })
  }
  p:number=1;
  searchkey:string="";
}
