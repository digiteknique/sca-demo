import * as fromApplication from './application.actions';

describe('Application Actions', () => {
    describe('Application Actions: Get Facility Data', () => {
        it('should create an action', () => {
            const action = new fromApplication.GetFacilityData();
            expect(action.type).toEqual(fromApplication.ApplicationActionTypes.GET_FACILITY_DATA);
        });
    });

    describe('Application Actions: Get Facility Data Complete', () => {
        it('should create an action', () => {
            const action = new fromApplication.GetFacilityDataComplete([]);
            expect(action.type).toEqual(fromApplication.ApplicationActionTypes.GET_FACILITY_DATA_COMPLETE);
        });
    });

    describe('Application Actions: Get Facility Data Error', () => {
        it('should create an action', () => {
            const action = new fromApplication.GetFacilityDataError('');
            expect(action.type).toEqual(fromApplication.ApplicationActionTypes.GET_FACILITY_DATA_ERROR);
        });
    });

    describe('Application Actions: Get Schedule Data', () => {
        it('should create an action', () => {
            const action = new fromApplication.GetScheduleData( { facility: null, mondayDate: '' } );
            expect(action.type).toEqual(fromApplication.ApplicationActionTypes.GET_SCHEDULE_DATA);
        });
    });

    describe('Application Actions: Get Facility Data Complete', () => {
        it('should create an action', () => {
            const action = new fromApplication.GetScheduleDataComplete([]);
            expect(action.type).toEqual(fromApplication.ApplicationActionTypes.GET_SCHEDULE_DATA_COMPLETE);
        });
    });

    describe('Application Actions: Get Facility Data Error', () => {
        it('should create an action', () => {
            const action = new fromApplication.GetScheduleDataError('');
            expect(action.type).toEqual(fromApplication.ApplicationActionTypes.GET_SCHEDULE_DATA_ERROR);
        });
    });
});
