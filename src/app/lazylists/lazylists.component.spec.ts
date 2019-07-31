import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazylistsComponent } from './lazylists.component';

describe('LazylistsComponent', () => {
  let component: LazylistsComponent;
  let fixture: ComponentFixture<LazylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
