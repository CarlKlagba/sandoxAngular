
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [UserService]
})
export class UserServiceModule {}
