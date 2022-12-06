import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundOageComponent } from './notfound-oage.component';

describe('NotfoundOageComponent', () => {
  let component: NotfoundOageComponent;
  let fixture: ComponentFixture<NotfoundOageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfoundOageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundOageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
