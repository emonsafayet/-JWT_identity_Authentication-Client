import { Component, OnInit } from '@angular/core';
import { BlockUI } from 'ng-block-ui';
import { NgBlockUI } from 'ng-block-ui/models/block-ui.model';
import { User } from '../Models/user';
import { UserService } from '../service/user.service';
import { BlockTemplateComponent } from '../sharedModule/block-template/block-template.component';

@Component({
  selector: 'app-all-user-management',
  templateUrl: './all-user-management.component.html',
  styleUrls: ['./all-user-management.component.scss']
})
export class AllUserManagementComponent implements OnInit { 

  @BlockUI('user-loader') blockUI: NgBlockUI;
  public blockUiTemplateComponent=BlockTemplateComponent;
  public userList:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.blockUI.start();
    this.userService.getAllUser().subscribe((data:any)=>{
        this.userList=data;
        this.blockUI.stop();
    },()=>{
      this.blockUI.stop();
    })
  }  
}
