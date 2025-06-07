import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UserModel } from '../../models/user.model';
import { MatTableModule } from '@angular/material/table';
import { UtilsService } from '../../services/utils.service';
import { OrderModel } from '../../models/order.model';

@Component({
  selector: 'app-user',
  imports: [ NgIf, MatButtonModule, MatCardModule, MatTableModule, JsonPipe, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public displayedColumns: string[] = ['title', 'status', 'startDate', 'pricePerTicket', 'rating', 'actions'];
  public user : UserModel | null = null

  constructor(private router: Router, public utils: UtilsService){
    if(!UserService.getActiveUser()){
      router.navigate(['/home'])
      return
    }
    
    this.user = UserService.getActiveUser()
  }

  public doChangePassword(){
    const newPassword = prompt('Enter your new password')
    if(newPassword == '' || newPassword == null){
      alert('Password cant be empty')
      return
    }
    alert(UserService.changePassword(newPassword)?'Password has been changed':'Failed to change password')

  }

  public doChangeFirstName(){
    const newFirstName = prompt('Enter your new Name')
    if(newFirstName == '' || newFirstName == null){
      alert('Name cant be empty')
      return
    }
    alert(UserService.changeFirstName(newFirstName)?'Name has been changed':'Failed to change name')

  }

  public doChangeLastName(){
    const newLastName = prompt('Enter your new Surename')
    if(newLastName == '' || newLastName == null){
      alert('Name cant be empty')
      return
    }
    alert(UserService.changeLastName(newLastName)?'Surename has been changed':'Failed to change Surename')

  }

  public doPay(order : OrderModel){
    if(UserService.changeOrderStatus('paid', order.id)){
      this.user = UserService.getActiveUser()
    }

  }

  public doCancel(order: OrderModel){
    if(UserService.changeOrderStatus('canceled', order.id)){
      this.user = UserService.getActiveUser()
    }
  }

  public doRating(order: OrderModel, r: boolean) {
    if (UserService.changeRating(r, order.id)) {
      this.user = UserService.getActiveUser()
    }
  }
}
