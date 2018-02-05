
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableComponentModule } from './table/table.module';
import {BrowserModule} from '@angular/platform-browser';
import { UserServiceModule } from './http/user.module';

@NgModule({
    imports: [TableComponentModule, BrowserModule, UserServiceModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
