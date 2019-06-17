import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import * as appActions from '../actions/application.actions';
import * as fromApplication from '../reducers/index';
import { FacilityModel } from '../models/facility.model';
import { Observable } from 'rxjs';
import { TeammateScheduleModel } from '../models/teammate-schedule.model';
import { getDate, addDays } from '@progress/kendo-date-math';

@Component({
  selector: 'sca-schedule-lookup',
  templateUrl: './schedule-lookup.component.html',
  styleUrls: ['./schedule-lookup.component.scss']
})
export class ScheduleLookupComponent implements OnInit {

  public facilities$: Observable<FacilityModel[]> = this.store.pipe(
    select(fromApplication.getFacilities)
  );

  public schedules$: Observable<TeammateScheduleModel[]> = this.store.pipe(
    select(fromApplication.getTeamSchedules)
  );

  public test$ = this.store.pipe(
    select(fromApplication.getAnesthesiaWorking)
  );

  public selectedFacility: FacilityModel;
  public selectedWeekStart: Date;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new appActions.GetFacilityData());
  }

  public loadSchedules() {
    if ( !!this.selectedFacility && !!this.selectedWeekStart ) {
      this.store.dispatch(new appActions.GetScheduleData(
        { facility: this.selectedFacility, mondayDate: this.selectedWeekStart.toISOString()}));
    }
  }

  public isMonday(date: Date) {
    return date.getDay() === 1 ? 'mondayDate' : 'disabled';
  }

  public weekSelected(date: Date) {
    switch ( date.getDay() ) {
      case 0:
        this.selectedWeekStart = addDays(date, -6);
        break;
      case 1:
        this.selectedWeekStart = date;
        break;
      default:
        const adjustment = -1 * (date.getDay() - 1);
        this.selectedWeekStart = addDays(date, adjustment);
        break;
    }
  }

}
