import { Component, OnInit } from '@angular/core';
import { ControlsService } from 'src/app/shared/services/controls.service';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  constructor(private controlService: ControlsService) { }

  ngOnInit() {
    
    //alert('hola');
  }

  testAlert(){
    this.controlService.msgSucces('Bienvenido al Login....');
  }

}
