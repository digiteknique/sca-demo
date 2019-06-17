import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleLookupComponent } from './schedule-lookup.component';
import * as fromApplication from '../reducers/';
import { Store, StoreModule } from '@ngrx/store';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

describe('ScheduleLookupComponent', () => {
  let component: ScheduleLookupComponent;
  let fixture: ComponentFixture<ScheduleLookupComponent>;
  let store: Store<fromApplication.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromApplication.reducers
        }),
        DateInputsModule,
      ],
      declarations: [ ScheduleLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleLookupComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
