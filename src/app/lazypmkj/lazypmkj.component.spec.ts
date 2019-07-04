import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazypmkjComponent } from './lazypmkj.component';

describe('LazypmkjComponent', () => {
  let component: LazypmkjComponent;
  let fixture: ComponentFixture<LazypmkjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazypmkjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazypmkjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
