
import { Component, OnInit } from '@angular/core';
import {Iuser} from './userform.model';
import {NgForm} from '@angular/forms';
import {UserFormService} from '../user-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor(public formService:UserFormService) { }
  // we need to create object for our model class
  myUser=new Iuser('anbu','raghu','','','');// we can set default value like placeholder
  languages=['Node','react','angular','Go','Java'];
hasCodeLangError=false;


  firstToUpper(value):void{
    if(value.length>0){
      this.myUser.firstname =value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
    }else{
      this.myUser.firstname=value;// if user doesnt type any thing we set it as it is

    }
  }
  firstToUpperLname(value){
    if(value.length>0){
      this.myUser.lastname =value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
    }else{
      this.myUser.lastname=value;// if user doesnt type any thing we set it as it is

    }
  }
  validateCodeLang(event):void{
    if(this.myUser.codeLang==='default'){
      this.hasCodeLangError=true;
    }else{
      this.hasCodeLangError=false;

    }
  }
  submitForm(form:NgForm):void{
    console.log(form.value);
    this.formService.employForm(form.value)
    .subscribe((res)=>console.log('data submitted'))

  }


 

  ngOnInit(): void {
  }

}
