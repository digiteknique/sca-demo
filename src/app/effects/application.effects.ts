import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  ApplicationActionTypes,
  GetFacilityDataComplete,
  GetFacilityDataError,
  GetScheduleData,
  GetScheduleDataComplete,
  GetScheduleDataError } from '../actions/application.actions';
import { SchedulingService } from '../services/scheduling.service';


@Injectable()
export class ApplicationEffects {
    @Effect()
    loadFacilityData$: Observable<Action> = this.actions$.pipe(
        ofType(ApplicationActionTypes.GET_FACILITY_DATA),
        switchMap(() => this.service.getFacilities().pipe(
            map(returnData => new GetFacilityDataComplete( returnData.data )),
            catchError((err) => of(new GetFacilityDataError(err.message)) )
        ))
    );

    @Effect()
    loadScheduleData$: Observable<Action> = this.actions$.pipe(
      ofType(ApplicationActionTypes.GET_SCHEDULE_DATA),
      switchMap((action: GetScheduleData) => this.service.getSchedules(action.payload.facility, action.payload.mondayDate).pipe(
        map(returnData => new GetScheduleDataComplete(returnData.data)),
        catchError((err) => of(new GetScheduleDataError(err.message)))
      ))
    );


    constructor(
        private actions$: Actions,
        private service: SchedulingService
    ) { }
}
