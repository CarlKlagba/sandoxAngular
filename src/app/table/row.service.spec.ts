import { RowService } from './row.service';
describe('Row Service', () => {

    it('must transmit flush order properly', (done) => {
        const service: RowService = new RowService();
        service.clearEvents.subscribe(() => done());
        service.flush();
    });
});
