import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePorteComponent } from './code-porte.component';

describe('CodePorteComponent', () => {
  let component: CodePorteComponent;
  let fixture: ComponentFixture<CodePorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodePorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodePorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
