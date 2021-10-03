import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestsHomeComponent } from './quests-home.component';

describe('QuestsHomeComponent', () => {
  let component: QuestsHomeComponent;
  let fixture: ComponentFixture<QuestsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
