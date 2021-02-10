import { Injectable } from '@angular/core';

export enum SMoSDefinitions {
  /* SMoS minimum Hex string length (i.e. when byte count is 0) */
  SMOS_HEX_STRING_MIN_LENGTH = 11,
}

@Injectable({
  providedIn: 'root'
})
export class SmosJsService {

  constructor() { }

  /* Returns the value of SMOS_HEX_STRING_MIN_LENGTH, this can be useful
     when receiving data across the serial link one char at a time. */
  public GetSMoSMinimumHexStringLength(): number {
    return SMoSDefinitions.SMOS_HEX_STRING_MIN_LENGTH;
  }
}
