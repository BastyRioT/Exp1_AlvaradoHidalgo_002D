import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {

    file: '',
    user: '',
    name: '',
    email: '',
    password: ''

  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    console.log(this.usuario);
  }

}

