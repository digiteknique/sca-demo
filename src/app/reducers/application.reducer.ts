import { ApplicationActions, ApplicationActionTypes } from '../actions/application.actions';
import { TeammateScheduleModel } from '../models/teammate-schedule.model';
import { FacilityModel } from '../models/facility.model';

export interface ApplicationState {
  facilities: FacilityModel[];
  selectedFacility: FacilityModel;

  teamSchedules: TeammateScheduleModel[];

  loading: boolean;

  error: string;

}

export const initialState: ApplicationState = {
  facilities: [],
  selectedFacility: null,

  teamSchedules: null,

  loading: false,

  error: null
};


export function reducer(state: ApplicationState = initialState, action: ApplicationActions) {
  switch (action.type) {
    case ApplicationActionTypes.GET_FACILITY_DATA: {
      return {
        ...state,
        facilities: [],
        selectedFacility: null,
        loading: true
      };
    }
    case ApplicationActionTypes.GET_FACILITY_DATA_COMPLETE: {
      return {
        ...state,
        facilities: action.payload,
        selectedFacility: null,
        loading: false,
        error: ''
      };
    }

    case ApplicationActionTypes.GET_SCHEDULE_DATA: {
      return {
        ...state,
        teamSchedules: null,
        loading: true
      };
    }

    case ApplicationActionTypes.GET_SCHEDULE_DATA_COMPLETE: {
      return {
        ...state,
        teamSchedules: action.payload,
        loading: false
      };
    }

    case ApplicationActionTypes.GET_SCHEDULE_DATA_ERROR:
    case ApplicationActionTypes.GET_FACILITY_DATA_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }


  }

  return state;
}
