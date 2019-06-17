import { Action } from '@ngrx/store';
import { FacilityModel } from '../models/facility.model';
import { TeammateScheduleModel } from '../models/teammate-schedule.model';

export enum ApplicationActionTypes {
    GET_FACILITY_DATA = '[Application] Get Facility Data',
    GET_FACILITY_DATA_COMPLETE = '[Application] Get Facility Data Complete',
    GET_FACILITY_DATA_ERROR = '[Application] Get Facility Data Error',

    GET_SCHEDULE_DATA = '[Application] Get Schedule Data',
    GET_SCHEDULE_DATA_COMPLETE = '[Application] Get Schedule Data Complete',
    GET_SCHEDULE_DATA_ERROR = '[Application] Get Schedule Data Error',
}

export class GetFacilityData implements Action {
    readonly type = ApplicationActionTypes.GET_FACILITY_DATA;

    constructor() { }
}

export class GetFacilityDataComplete implements Action {
    readonly type = ApplicationActionTypes.GET_FACILITY_DATA_COMPLETE;

    constructor(public payload: FacilityModel[]) { }
}

export class GetFacilityDataError implements Action {
    readonly type = ApplicationActionTypes.GET_FACILITY_DATA_ERROR;

    constructor(public payload: string) { }
}


export class GetScheduleData implements Action {
    readonly type = ApplicationActionTypes.GET_SCHEDULE_DATA;

    constructor(public payload: { facility: FacilityModel, mondayDate: string } ) { }
}

export class GetScheduleDataComplete implements Action {
    readonly type = ApplicationActionTypes.GET_SCHEDULE_DATA_COMPLETE;

    constructor(public payload: TeammateScheduleModel[]) { }
}

export class GetScheduleDataError implements Action {
    readonly type = ApplicationActionTypes.GET_SCHEDULE_DATA_ERROR;

    constructor(public payload: string) { }
}

export type ApplicationActions =
    GetFacilityData |
    GetFacilityDataComplete |
    GetFacilityDataError |
    GetScheduleData |
    GetScheduleDataComplete |
    GetScheduleDataError;
