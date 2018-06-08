import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarinelistComponent } from './marinelist.component';

describe('MarinelistComponent', () => {
  let component: MarinelistComponent;
  let fixture: ComponentFixture<MarinelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarinelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
