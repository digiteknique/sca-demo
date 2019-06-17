import * as fromApplication from './application.reducer';
import * as applicationActions from '../actions/application.actions';
import { FacilityModel } from '../models/facility.model';

describe('Application Reducer', () => {
    describe('Get facility data action', () => {
        it('should return empty data on get site data default state', () => {
            const action = new applicationActions.GetFacilityData();
            const state = fromApplication.reducer(undefined, action);
            expect(state.facilities).toEqual([]);
            expect(state.error).toEqual(null);
            expect(state.loading).toEqual(true);
            expect(state.teamSchedules).toEqual(null);
            expect(state.selectedFacility).toEqual(null);
        });
    });
    describe('Get facility data complete action', () => {
        it('should return payload from action', () => {
            const facility: FacilityModel = { facilityId: '0000001', facilityName: 'Test Facility' };
            const action = new applicationActions.GetFacilityDataComplete(
                [ facility ]
            );
            const state = fromApplication.reducer(undefined, action);
            expect(state.loading).toEqual(false);
            expect(state.facilities).toEqual( [ facility ] );
            expect(state.error).toEqual('');
        });
    });
});
