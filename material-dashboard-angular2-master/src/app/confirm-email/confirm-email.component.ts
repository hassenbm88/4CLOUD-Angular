import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/_services/auth.service';


@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss'],
})
export class ConfirmEmailComponent implements OnInit {
  emailConfirmed: boolean = false;
  urlParams: any = {};

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    
  
  ) {}

  ngOnInit() {
    this.urlParams.token = this.route.snapshot.queryParamMap.get('token');
    this.urlParams.userid = this.route.snapshot.queryParamMap.get('userid');
    this.confirm();
  }

  confirm() {
    
    this.authService.confirm(this.urlParams).subscribe(
      () => {
       
        console.log('success');
        
        this.emailConfirmed = true;
      },
      (error) => {
     
        console.log(error);
       
        this.emailConfirmed = false;
      }
    );
  }
}