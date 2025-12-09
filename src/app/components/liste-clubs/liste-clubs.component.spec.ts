import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClubsComponent } from './liste-clubs.component';

describe('ListeClubsComponent', () => {
  let component: ListeClubsComponent;
  let fixture: ComponentFixture<ListeClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeClubsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
