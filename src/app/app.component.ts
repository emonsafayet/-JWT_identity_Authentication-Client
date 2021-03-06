import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './Helper/constants';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BlockTemplateComponent } from './sharedModule/block-template/block-template.component';
import { User } from './Models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @BlockUI() blockUI: NgBlockUI;
  blockTemplate = BlockTemplateComponent;
  blockMessage;

  title = 'webAuth';
  constructor (private router:Router){
    this.onLogout();
  }


  onLogout(){
    localStorage.removeItem(Constants.USER_KEY); 
  }
  get isUserLogin()
  {
    const user=localStorage.getItem(Constants.USER_KEY);
    return user && user.length>0;
  }
  get user():User{
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }
  get isAdmin():boolean
  {
    return this.user.roles.indexOf('Admin')>-1;
  }
  get isUser():boolean
  {
    return this.user.roles.indexOf('User')>-1;
  }
}
