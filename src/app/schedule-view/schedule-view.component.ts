import { Component, OnInit, Input } from '@angular/core';
import { TeammateScheduleModel } from '../models/teammate-schedule.model';
import { getDate, addDays } from '@progress/kendo-date-math';

@Component({
  selector: 'sca-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {

  @Input()
  public teamSchedules: TeammateScheduleModel[] = [];

  @Input()
  public weekStartDate: Date;

  constructor() { }

  ngOnInit() {
  }

  public headerText(offset: number) {
    return addDays(this.weekStartDate, offset);
  }

  public insufficientAnesthesia(dayOfWeek: number) {
    if ( !this.teamSchedules) {
      return '';
    }

    const staffNumbers = [0, 0, 0, 0, 0, 0, 0];
    for ( const schedule of this.teamSchedules ) {
      if ( schedule.teammateType === 'Anesthesia' ) {
        staffNumbers[0] += this.countSchedule(schedule.monday);
        staffNumbers[1] += this.countSchedule(schedule.tuesday);
        staffNumbers[2] += this.countSchedule(schedule.wednesday);
        staffNumbers[3] += this.countSchedule(schedule.thursday);
        staffNumbers[4] += this.countSchedule(schedule.friday);
        staffNumbers[5] += this.countSchedule(schedule.saturday);
        staffNumbers[6] += this.countSchedule(schedule.sunday);
      }
    }
    return staffNumbers[dayOfWeek] < 2 ? 'danger' : '';
  }

  private countSchedule(value: string) {
    return (value === 'OFF' ) ? 0 : 1;
  }

}
