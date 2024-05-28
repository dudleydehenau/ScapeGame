import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreFinComponent } from './score-fin.component';
import { ScoresService } from '../../../../services/scores.service';
import { AuthService } from '../../../../services/auth.service';
import { ClassementService } from '../../../../services/classement.service';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ScoreFinComponent', () => {
  let component: ScoreFinComponent;
  let fixture: ComponentFixture<ScoreFinComponent>;
  let mockScoresService: jasmine.SpyObj<ScoresService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockClassementService: jasmine.SpyObj<ClassementService>;

  beforeEach(async () => {
    mockScoresService = jasmine.createSpyObj('ScoresService', ['submitScore', 'getBestScore']);
    mockAuthService = jasmine.createSpyObj('AuthService', [], { userId: '27' });
    mockClassementService = jasmine.createSpyObj('ClassementService', ['getClassement']);

    await TestBed.configureTestingModule({
      imports: [ ScoreFinComponent ],
      providers: [
        { provide: ScoresService, useValue: mockScoresService },
        { provide: AuthService, useValue: mockAuthService },
        { provide: ClassementService, useValue: mockClassementService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreFinComponent);
    component = fixture.componentInstance;
    component.totalScore = 100; 

    mockScoresService.submitScore.and.returnValue(of({ message: 'Score soumis' }));
    mockScoresService.getBestScore.and.returnValue(of(200));
    mockClassementService.getClassement.and.returnValue(of([{ userId: '27', scoreBTime: 150 }]));

    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait soumettre le score lors de l"initialisation', () => {
    spyOn(component, 'getBestScore');
    spyOn(component, 'getClassement');

    component.ngOnInit();

    expect(mockScoresService.submitScore).toHaveBeenCalledWith(component.levelId, component.userId, component.totalScore);
    expect(component.getBestScore).toHaveBeenCalled();
    expect(component.getClassement).toHaveBeenCalled();
  });

  it('devrait gérer l\'erreur lors de la soumission du score', () => {
    mockScoresService.submitScore.and.returnValue(throwError('Erreur de soumission'));
    spyOn(console, 'error');

    component.submitScore();

    expect(console.error).toHaveBeenCalledWith('Erreur lors de la soumission du score :', 'Erreur de soumission');
  });

  it('devrait récupérer le meilleur score', () => {
    const bestScore = 200;
    mockScoresService.getBestScore.and.returnValue(of(bestScore));

    component.getBestScore();

    expect(mockScoresService.getBestScore).toHaveBeenCalledWith(component.levelId, component.userId);
    expect(component.bestScore).toBe(bestScore);
  });

  it('devrait gérer l"erreur lors de la récupération du meilleur score', () => {
    mockScoresService.getBestScore.and.returnValue(throwError('Erreur de récupération du score'));
    spyOn(console, 'error');

    component.getBestScore();

    expect(console.error).toHaveBeenCalledWith('Erreur lors de la récupération du meilleur score :', 'Erreur de récupération du score');
  });

  it('devrait récupérer le classement', () => {
    const classement = [{ userId: '27', scoreBTime: 150 }];
    mockClassementService.getClassement.and.returnValue(of(classement));

    component.getClassement();

    expect(mockClassementService.getClassement).toHaveBeenCalledWith(component.levelId);
    expect(component.classement).toContain('*** Votre meilleur score est de 150 secondes ***');
  });

  it('devrait gérer l"erreur lors de la récupération du classement', () => {
    mockClassementService.getClassement.and.returnValue(throwError('Erreur de récupération du classement'));
    spyOn(console, 'error');

    component.getClassement();

    expect(console.error).toHaveBeenCalledWith('Erreur lors de la récupération du classement :', 'Erreur de récupération du classement');
  });
});
