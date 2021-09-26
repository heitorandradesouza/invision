import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
  selectedItem = 0;
  @Input() carrosselItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }

}
