// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tapResponse } from '@ngrx/component-store';
import { Subject, tap } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { AppComponent, myFunction1 } from './app.component';
import { MockSocketClient, SocketClient } from './socket-client';

describe('AppComponent', () => {
  let testScheduler: TestScheduler;
  let componentUnderTest: AppComponent;
  let mockSocketClient: MockSocketClient;
  let packetSubject: Subject<string>;

  beforeEach(async () => {
    packetSubject = new Subject();
    mockSocketClient = new MockSocketClient(packetSubject);
    componentUnderTest = new AppComponent(mockSocketClient);

    testScheduler = new TestScheduler((actual, expected) => {
      return expect(actual).toEqual(expected);
    });
    
  });

  it('should create', () => {
    const vm = componentUnderTest.vm$;


  });
});
