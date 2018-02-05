import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

@Injectable()
export class RowService {
    
    private _clearSubject = new Subject<void>();

    flush(): void {
        this._clearSubject.next();
    }

    get clearEvents(): Observable<void> {
        return this._clearSubject.pipe(share());
    }
}
