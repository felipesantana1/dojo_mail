import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  info: Array<any> = [{email:"felipe@email.com", important:false, subject:"what?", content:"What th efff is going on here!"}, {email:"zain@email.com", important:true, subject:"huh?", content:"Dude what are you doing?"}, {email:"luke@email.com", important:false, subject:"umm?", content:"oh whaaat! nah bro!"},{email:"shane@email.com", important:true, subject:"yeah?", content:"I Think that could work!"}];
}
