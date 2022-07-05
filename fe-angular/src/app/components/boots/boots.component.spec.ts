import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsComponent } from './boots.component';

describe('BootsComponent', () => {
  let component: BootsComponent;
  let fixture: ComponentFixture<BootsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BootsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
