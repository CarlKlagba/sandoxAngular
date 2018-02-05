import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableComponent } from './table.component';
import { FooterComponent } from './footer.component';
import { Component, ViewChild } from '@angular/core';
import { RowService } from './row.service';
import { Observable } from 'rxjs/Observable';

@Component({
    template: '<app-table-component [rows]="rows">' +
    '<app-footer-component></app-footer-component>' +
    '</app-table-component>'
})
class TestComponent {

    @ViewChild(TableComponent)
    tableComponent: TableComponent;

    rows = [
        { firstName: 'firstname1', lastName: 'lastname1', age: 12 },
        { firstName: 'firstname2', lastName: 'lastname2' }
    ];
}

describe('Table Compoment', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: RowService,
                    useValue: {
                        flush: () => {},
                        clearEvents: Observable.create(() => {})
                    }
                }
            ],
            declarations: [TestComponent, TableComponent, FooterComponent]
        }).compileComponents();
    }));

    it('must be instantiated', () => {
        const fixture = TestBed.createComponent(TableComponent);
        expect(fixture.componentInstance).toBeTruthy();
    });

    it('must have a content', () => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('table tbody tr')).length).toBe(2);
    });

    it('must display the sum of all age', () => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.rows = [
            ...fixture.componentInstance.rows,
            { firstName: 'firstname1', lastName: 'lastname1', age: 16 }
        ];
        fixture.detectChanges();
        expect(fixture.componentInstance.tableComponent.totalAge).toBe(28);
        expect(fixture.debugElement.query(By.css('div')).nativeElement.innerText).toMatch(/28/);
    });
    it('must have a content child', () => {
        const fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.tableComponent.footerComponent).toBeTruthy();
    });
});
