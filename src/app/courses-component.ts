import { Component } from '@angular/core';
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `<div>
    <h2>{{getCourses()}}</h2>
    <ul>
       <li *ngFor="let course of courses">
       {{course}}
       </li>
    </ul>
    <div class="col-2">
    <p>{{text | summary : 13}}</p>
    <input [value]=email (keyup.enter)="email=$event.target.value; onKeyUp()" [style.background]="isActive ? 'blue' : 'white'"/>
    <input #name (keyup.enter)="onKeyUp1(name.value)"/>
    <input ng-model="name" (keyup.enter)="onKeyUp2()"/>
    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">save</button>
    </div>
</div>
    `
})
export class CoursesComponent {
    email = "anabiz@gmail.com";
    name = "Anabiz";
    title = "List of Courses";
    courses: string[];
    isActive = true;

    text = "i love Jesus, He is my friend, He is my friend. I will never leave Him, He is my friend."

    constructor(service: CoursesService) {
        //let service = new CoursesService()
        this.courses = service.getCourses();
    }

    getCourses() {
        return this.title;
    }
    onSave($event: any) {
        this.isActive = !this.isActive;
        console.log($event);
    }
    // onKeyUp($event) {
    //     if ($event.keyCode === 13) console.log($event.target.value);
    // }
    // onKeyUp($event) {
    //     console.log($event.target.value);
    // }
    // onKeyUp(email) {
    //     console.log(email);
    // }

    onKeyUp() {
        console.log(this.email);
    }

    onKeyUp1(name: string) {
        console.log(name);
    }
    onKeyUp2() {
        console.log(this.name);
    }

}