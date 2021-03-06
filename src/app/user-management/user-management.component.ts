import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../service/user.service';
import { User } from '../Models/user';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BlockTemplateComponent } from '../sharedModule/block-template/block-template.component';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  @BlockUI('user-loader') blockUI: NgBlockUI;
  public blockUiTemplateComponent=BlockTemplateComponent;
  blockMessage;
  public userList:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.blockUI.start();
    this.userService.getUserList().subscribe((data:any)=>{
        this.userList=data;
        this.blockUI.stop();
    },()=>{
      this.blockUI.stop();
    })
  }

}
 

 

