import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contact.model';
import { LoginDet } from '../logindetails';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showMe1 : boolean = false;
  showMe : boolean = false;
  showMe2 : boolean = true;
  msg:string="";
  msg1:string="";
  
  contacts : Array<Contact>;
  uname : string = "";
  pwd : string = "";

  constructor() {
    this.contacts = [];
   }

  ngOnInit(): void {
  }
      addContact(name: string,phone: string){
        let contact = new Contact (name,phone);
        this.contacts.push(contact);
      }
      
      removeContact(contact: Contact){
        let index = this.contacts.indexOf(contact);
        this.contacts.splice(index,1);
      }
      checkUser(loginRef:NgForm){
        let login = loginRef.value;
        //console.log(login);
        if(login.user== this.uname && login.pass== this.pwd){
            this.msg1 = "Successfully Login!"
            this.showMe =! this.showMe;
            this.showMe1 =! this.showMe1;
        }else {
            this.msg1 = "Failure try once again!";
        }
       
      }
      toogletag(){
        this.showMe =! this.showMe;

      }
      checksignup(signupRef:NgForm){
        let signup = signupRef.value;
        //console.log(login);
        if(signup.pass == signup.pass1){
            this.uname = signup.user
            this.pwd = signup.pass;
            console.log(this.uname);
            console.log(this.pwd);


            this.msg = "SignUp Successfull!"
            this.showMe1 =!this.showMe1;
            this.showMe2 =! this.showMe2
        }else {
            this.msg = "Failure try once again!";
        }
      
      }
      toogletag2(){
        this.showMe1 =! this.showMe1;

      }
      
}
