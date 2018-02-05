
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { RowService } from './row.service';

@NgModule({
    imports: [CommonModule],
    declarations: [TableComponent, FooterComponent],
    exports: [TableComponent, FooterComponent],
    providers: [RowService]
})
export class TableComponentModule {}
