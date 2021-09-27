import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {
  selectedItem = 0;
  carrosselIsPaused = false;
  @Input() carrosselItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.playCarrossel();
  }

  selectItem(item: any) {
    this.selectedItem = item;
    this.carrosselIsPaused = true;
  }

  async playCarrossel() {
    if (!this.carrosselIsPaused) {
      setTimeout(() => {
        if (this.selectedItem == 3) {
          this.selectedItem = 0
        }
        else if (!this.carrosselIsPaused) {
          this.selectedItem = this.selectedItem + 1;
        }
        this.playCarrossel();
      }, 3000);
    }
  }
}