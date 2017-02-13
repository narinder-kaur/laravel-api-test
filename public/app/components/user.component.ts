import { Component } from '@angular/core';
import {PostService } from '../services/post.service';

@Component({
selector : `user`,
template : `<h1>hello {{name}}</h1>
	    <p>email:{{email}}</p>
            <p>address:{{address.street}} {{address.city}}, {{address.state}}</p>
            <button (click)="togglehobbies()">{{showhobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
	    <div *ngIf="showhobbies">
            <p>hobbies</p>
             <hr>
            <ul>
              <li *ngFor="let hobby of hobbies;let i=index">
		{{hobby}} <button (click)="deletehobby(i)">X</button>
	      </li> 
           </ul>
           <form (submit)="addhobby(hobby.value)">
           <label>Add Hobby</label>:<br />
           <input type=text #hobby>
	   </form>
           </div>  
	   <form>
           <label>Name</label>:<br />
           <input type=text name=name [(ngModel)]="name">
	   <label>Email</label>:<br />
           <input type=text name=email [(ngModel)]="email">
           </form> 
           <hr>
           <h2>Posts</h2>    
           <div *ngFor="let post of posts">
           <h3>{{post.title}}</h3>
           <p>{{post.body}}</p>
           </div>
            `,
 providers : [PostService]
})

export class UserComponent{
 
 name : string;
 email:string;
 address:address;
 hobbies:string[];
 showhobbies:boolean;
 posts: Post[];

 constructor(private postservice : PostService){
    this.name='maninder';
    this.email='maninder@gmail.com';
    this.address={
      street:'jamalpur',
      city:'ludhiana',
      state:'punjab'
    }
    this.hobbies=['dance','coding','ielts'];
    this.showhobbies=false;
    this.postservice.getposts().subscribe(posts => {
    this.posts = posts});
  }

 togglehobbies(){
 this.showhobbies = !this.showhobbies;
 }
 
 addhobby(hobby:string){
 this.hobbies.push(hobby);
 }

 deletehobby(index:number){
 this.hobbies.splice(index,1);
 }
}

interface address {
   street:string,
   city:string,
   state:string
}

interface Post {
 id:number,
 title:string,
 description:string
 
}