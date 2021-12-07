import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '@app/pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuth: boolean=false;

  constructor(private authSvc: AuthService) { 
  }

  ngOnInit(): void {
    this.authSvc.isLogged.subscribe(res=>this.isAuth=res);
  }

  onLogOut(): void{
    this.authSvc.logout();
  }
}
