import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacilityReturnModel } from '../models/facility-return.model';
import { FacilityModel } from '../models/facility.model';
import { ScheduleResponseModel } from '../models/schedule-response.model';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {

  private url = 'http://scadevjobs.com/api';

  constructor(private httpClient: HttpClient) { }

  getFacilities(): Observable<FacilityReturnModel> {
    return this.httpClient.get<FacilityReturnModel>(`${this.url}/locations`);
  }

  getSchedules(facility: FacilityModel, mondayDate: string): Observable<ScheduleResponseModel> {
      return this.httpClient.get<ScheduleResponseModel>(`${this.url}/schedules/${facility.facilityId}/${mondayDate}`);
  }
}
