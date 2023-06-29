import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtsuPComponent } from './utsu-p.component';

describe('UtsuPComponent', () => {
  let component: UtsuPComponent;
  let fixture: ComponentFixture<UtsuPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtsuPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtsuPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
