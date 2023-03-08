// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { SocketClient } from './socket-client';

export function myFunction1(x: string): Observable<string> {
  return of(x).pipe(
    map((x) => x.split(' ')),
    map((x) => x.reverse()),
    map((x) => x.join(' ')),
    delay(10)
  );
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class AppComponent {
  constructor(
    private readonly _socketClient: SocketClient
  ) { }
  
  public vm$ = this._socketClient.packet$;

}