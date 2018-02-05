import { Component } from '@angular/core';
import { RowService } from './table/row.service';
import { Observable } from 'rxjs/Observable';
import { Rows } from './table/row.model';
import { UserService } from './http/user.service';

@Component({
    selector: 'app-component',
    template: '<app-table-component [rows]="rows | async">' +
    '<app-footer-component></app-footer-component>' +
    '</app-table-component>' +
    '<button (click)="rowService.flush()">Flush</button>'
})
export class AppComponent {
    rows: Observable<Rows>;

    constructor(public rowService: RowService, private userService: UserService) {
        this.rows = this.userService.fetchRows();
    }
}
