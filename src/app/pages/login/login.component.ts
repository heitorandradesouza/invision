import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  carrosselItems: any[] = [];
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  pageMode = 'login';

  constructor() { }

  ngOnInit() {
    this.carrosselItems = [
      {
        image: 'corporative1.png',
        title: 'Marcenas mattis egestas',
        description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.'
      },
      {
        image: 'corporative2.gif',
        title: 'Sed sed felis lorem',
        description: 'Sed sed felis lorem. Fusce eu mattis mauris. Maecenas lectus lectus sodales.'
      },
      {
        image: 'corporative3.gif',
        title: 'Quisque nibh tortor',
        description: 'Ut a lacus maximus, pulvinar diam quis, feugiat felis. Sed nec quam elementum.'
      },
      {
        image: 'corporative4.gif',
        title: 'Eros justo tincidunt leo',
        description: 'Integer congue est non velit aliquet varius. Praesent ex dolor bibendum quis.'
      }
    ]
  }

  changeView(view: string) {
    this.pageMode = view;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo não pode estar vazio';
    } else if (this.password.hasError('required')) {
      return 'Este campo não pode estar vazio';
    } else if (this.email.hasError('email')) {
      return 'O e-mail está incorreto'
    } else if (this.name.hasError('required')) {
      return 'Este campo não pode estar vazio'
    } else {
      return
    }
  }

}
