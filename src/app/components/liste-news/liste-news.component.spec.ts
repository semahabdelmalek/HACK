import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeNewsComponent } from './liste-news.component';

describe('ListeNewsComponent', () => {
  let component: ListeNewsComponent;
  let fixture: ComponentFixture<ListeNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
