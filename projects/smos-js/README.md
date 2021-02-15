# SMoS-js

A Typescript implementation of SMoS helper library for encoding and decoding SMoS messages

## Install

```shell
npm install smos-js
```

## Importing and using the library in a component

```javascript
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
```
