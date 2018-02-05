import { Component, Input, OnChanges, OnInit, SimpleChanges, ContentChild } from '@angular/core';
import { Rows } from './row.model';
import { FooterComponent } from './footer.component';
import { RowService } from './row.service';

@Component({
    selector: 'app-table-component',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnChanges, OnInit {

    @Input()
    rows: Rows;

    @ContentChild(FooterComponent)
    footerComponent: FooterComponent;

    private _totalAge: number;

    constructor(private rowService: RowService) {}

    get totalAge(): number {
        return this._totalAge;
    }

    ngOnInit(): void {
        this.rowService.clearEvents.subscribe(() => this.rows = []);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.rows && changes.rows.currentValue) {
            this._totalAge = this.rows
                .map(row => row.age)
                .filter(age => !isNaN(age))
                .reduce((accumulator, value) => accumulator + value, 0);
        }
    }
}
