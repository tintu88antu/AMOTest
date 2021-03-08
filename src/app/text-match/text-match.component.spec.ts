import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpectedConditions } from 'protractor';
import { TextmatchService } from '../textmatch.service';
import { TextMatchComponent } from './text-match.component';

class MockTestMatchService extends TextmatchService {
  
}
describe('TextMatchComponent', () => {
  let component: TextMatchComponent;
  let fixture: ComponentFixture<TextMatchComponent>;
  let componentService: TextmatchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMatchComponent ],
      providers: [TextmatchService],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TextMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    componentService = fixture.debugElement.injector.get(TextmatchService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submit button on clicking the submit button',()=>{
    spyOn(component, 'onSubmit').and.callThrough();
      component.textcheckForm.controls['text'].setValue('some search query for serach parameter.');
      component.textcheckForm.controls['subtext'].setValue('search');
      const ele = fixture.debugElement.nativeElement.querySelector('#btnSubmit');
      fixture.detectChanges();
      ele.click();
      expect(component.onSubmit).toHaveBeenCalled();
      });

      it('should have title', () => {
        expect("Text Match").toEqual("Text Match");
      });

      it('it should disable check button if test string are required',()=>{
        debugger;
        spyOn(component, 'onSubmit').and.callThrough();
          component.textcheckForm.reset();
          const ele = fixture.debugElement.nativeElement.querySelector('#btnSubmit');
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            debugger;
            fixture.detectChanges();
            expect(ele.disabled).toBe(true)
           })     
      });

      it('it should show the  valid output text of substring',()=>{
        debugger;
       // const testBedService = TestBed.get(TextmatchService);
        spyOn(component, 'onSubmit').and.callThrough();
          component.textcheckForm.controls['text'].setValue('some search query for search parameter.');
          component.textcheckForm.controls['subtext'].setValue('search');           
          fixture.detectChanges();
          const ele = fixture.debugElement.nativeElement.querySelector('#btnSubmit');
          ele.click();
          expect(component.output
            ).toEqual('The position of subtext is : 6,23'); 
          })
      
      it('it should show the No matching output text of substring',()=>{
        debugger;
       // const testBedService = TestBed.get(TextmatchService);
        spyOn(component, 'onSubmit').and.callThrough();
          component.textcheckForm.controls['text'].setValue('some search query for search parameter.');
          component.textcheckForm.controls['subtext'].setValue('sdsds');           
          fixture.detectChanges();
          const ele = fixture.debugElement.nativeElement.querySelector('#btnSubmit');
          ele.click();
          expect(component.output
            ).toEqual('No Match sub text'); 
          })
      }); 

