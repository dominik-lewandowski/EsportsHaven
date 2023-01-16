import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsTemplateComponent } from './tournaments-template.component';

describe('HomeTemplateComponent', () => {
  let component: TournamentsTemplateComponent;
  let fixture: ComponentFixture<TournamentsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TournamentsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
