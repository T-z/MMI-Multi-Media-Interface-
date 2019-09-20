import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerInsideComponent } from './speaker-inside.component';

describe('SpeakerInsideComponent', () => {
  let component: SpeakerInsideComponent;
  let fixture: ComponentFixture<SpeakerInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
