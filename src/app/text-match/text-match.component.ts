import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TextmatchService } from '../textmatch.service';
@Component({
  selector: 'app-text-match',
  templateUrl: './text-match.component.html',
  styleUrls: ['./text-match.component.css']
})
export class TextMatchComponent{
output:string='';
title:string='Text Match';
index:Array<number>=[];

textcheckForm = this.fb.group({
  text: ['', Validators.required],
  subtext: ['',Validators.required],
});

clear() {
   this.textcheckForm.setValue({text: '', subtext: ''}); 
   this.output='';
  }
 
constructor(private fb: FormBuilder,private textmatchService: TextmatchService) { }

  onSubmit() {
    debugger;
    let text=new String(this.textcheckForm.get("text")?.value).toLowerCase();
    let subtext=new String(this.textcheckForm.get("subtext")?.value.toString());
    this.index=this.textmatchService.gettextIndex(text, subtext.trim());
    if(this.index.length>0)
    {
      this.output='The position of subtext is : '+this.index.toString();
    }
    else
    {
      this.output='No Match sub text'
    }

  }
  
  }
