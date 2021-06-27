import { Component } from '@angular/core';
@Component({
    selector:'test',
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})


export class testComponent {
    firstName:string="Shrouk";
    laststName:string="Saadon";
    age:number=23;

    getFullName():string{
        return this.firstName+" "+this.laststName;
    }

    onFirstNameChange(newfirstName:string){
        this.firstName = newfirstName;
    }

    changeAge(){
        this.age =7 + this.age;
    }
}