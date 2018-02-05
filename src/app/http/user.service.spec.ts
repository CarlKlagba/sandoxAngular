import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('User Service', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService]
        });
    }));

    it(
        'must request the good http endpoint',
        inject([UserService, HttpTestingController], (service: UserService, controller: HttpTestingController) => {
            service.fetchRows().subscribe(rows => {
                expect(rows.length).toBe(2);
                expect(rows[0].firstName).toEqual('firstname1');
                expect(rows[0].lastName).toEqual('lastname1');
                expect(rows[0].age).toBeGreaterThan(0);
                expect(rows[1].firstName).toEqual('firstname2');
                expect(rows[1].lastName).toEqual('lastname2');
                expect(rows[1].age).toBeGreaterThan(0);
            });
            const req = controller.expectOne('https://reqres.in/api/users?page=2');

            expect(req.request.method).toEqual('GET');
            req.flush({
                data: [
                    {
                        first_name: 'firstname1',
                        last_name: 'lastname1'
                    },
                    {
                        first_name: 'firstname2',
                        last_name: 'lastname2'
                    }
                ]
            });

            controller.verify();
        })
    );
});
