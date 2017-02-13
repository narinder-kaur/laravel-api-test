"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var post_service_1 = require('../services/post.service');
var UserComponent = (function () {
    function UserComponent(postservice) {
        var _this = this;
        this.postservice = postservice;
        this.name = 'maninder';
        this.email = 'maninder@gmail.com';
        this.address = {
            street: 'jamalpur',
            city: 'ludhiana',
            state: 'punjab'
        };
        this.hobbies = ['dance', 'coding', 'ielts'];
        this.showhobbies = false;
        this.postservice.getposts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    UserComponent.prototype.togglehobbies = function () {
        this.showhobbies = !this.showhobbies;
    };
    UserComponent.prototype.addhobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    UserComponent.prototype.deletehobby = function (index) {
        this.hobbies.splice(index, 1);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: "user",
            template: "<h1>hello {{name}}</h1>\n\t    <p>email:{{email}}</p>\n            <p>address:{{address.street}} {{address.city}}, {{address.state}}</p>\n            <button (click)=\"togglehobbies()\">{{showhobbies ? \"Hide Hobbies\" : \"Show Hobbies\"}}</button>\n\t    <div *ngIf=\"showhobbies\">\n            <p>hobbies</p>\n             <hr>\n            <ul>\n              <li *ngFor=\"let hobby of hobbies;let i=index\">\n\t\t{{hobby}} <button (click)=\"deletehobby(i)\">X</button>\n\t      </li> \n           </ul>\n           <form (submit)=\"addhobby(hobby.value)\">\n           <label>Add Hobby</label>:<br />\n           <input type=text #hobby>\n\t   </form>\n           </div>  \n\t   <form>\n           <label>Name</label>:<br />\n           <input type=text name=name [(ngModel)]=\"name\">\n\t   <label>Email</label>:<br />\n           <input type=text name=email [(ngModel)]=\"email\">\n           </form> \n           <hr>\n           <h2>Posts</h2>    \n           <div *ngFor=\"let post of posts\">\n           <h3>{{post.title}}</h3>\n           <p>{{post.body}}</p>\n           </div>\n            ",
            providers: [post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map