import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromApplication from './application.reducer';

export interface State {
  application: fromApplication.ApplicationState;
}

export const reducers: ActionReducerMap<State> = {
  application: fromApplication.reducer
};

export function debug(actionReducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return actionReducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [ debug ] : [];


export const getLoading = (state: State) => state.application.loading;
export const getFacilities = (state: State) => state.application.facilities;
export const getSelectedFacility = (state: State) => state.application.selectedFacility;
export const getTeamSchedules = (state: State) => state.application.teamSchedules;

export const getAnesthesiaWorking = createSelector(
  getTeamSchedules,
  schedules => {
    if ( !schedules ) {
      return [];
    }
    schedules
      .filter( schedule => schedule.teammateType === 'Anesthesia' )
      .map( schedule => {
        return [
          schedule.sunday === 'OFF' ? 0 : 1,
          schedule.monday === 'OFF' ? 0 : 1,
          schedule.tuesday === 'OFF' ? 0 : 1,
          schedule.wednesday === 'OFF' ? 0 : 1,
          schedule.thursday === 'OFF' ? 0 : 1,
          schedule.friday === 'OFF' ? 0 : 1,
          schedule.saturday === 'OFF' ? 0 : 1,
        ];
      });
  }
);
