import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSearchBarComponent } from './offers-search-bar.component';

describe('OffersSearchBarComponent', () => {
  let component: OffersSearchBarComponent;
  let fixture: ComponentFixture<OffersSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
