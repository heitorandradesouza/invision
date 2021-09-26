import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  carrosselItems: any[] = [];
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
        description: 'Sed sed felis lorem. Fusce eu mattis mauris. Maecenas lectus lectus, sodales ac sapien vel, ultricies condimentum ipsum.'
      },
      {
        image: 'corporative3.gif',
        title: 'Quisque nibh tortor',
        description: 'Ut a lacus maximus, pulvinar diam quis, feugiat felis. Sed nec quam elementum, vestibulum eros id, dapibus enim.'
      },
      {
        image: 'corporative4.gif',
        title: 'Eros justo tincidunt leo',
        description: 'Integer congue est non velit aliquet varius. Praesent ex dolor, bibendum quis lorem at, vehicula pretium leo.'
      }
    ]
  }

}
