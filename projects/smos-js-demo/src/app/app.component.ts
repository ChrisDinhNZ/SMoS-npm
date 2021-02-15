import { Component } from '@angular/core';
import { SmosJsService } from 'smos-js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private smosService: SmosJsService) {
  }

  OnClickMe() {
    let result = this.smosService.GetSMoSMinimumHexStringLength();

    alert(result);
  }
}
