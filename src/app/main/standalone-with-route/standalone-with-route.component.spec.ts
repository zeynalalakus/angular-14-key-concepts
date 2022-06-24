import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneWithRouteComponent } from './standalone-with-route.component';

describe('StandaloneWithRouteComponent', () => {
  let component: StandaloneWithRouteComponent;
  let fixture: ComponentFixture<StandaloneWithRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneWithRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneWithRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
