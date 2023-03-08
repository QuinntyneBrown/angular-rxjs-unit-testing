import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class SocketClient {
    public packet$: Observable<string> = null!;
}

export class MockSocketClient {

    constructor(
        private readonly _packetSubject: Subject<string>
    ) {
        
    }

    public packet$ = this._packetSubject.asObservable();
}