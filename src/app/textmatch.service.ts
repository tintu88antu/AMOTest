import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextmatchService {

  constructor() { }

  gettextIndex(value:string,subtext:any): Array<number>{
    
    let output:Array<number>=[]; 
    let i=0;
     while(i<value.length && subtext.length>0)
     {
     let split=value.slice(i,(i+subtext.length));
     if(split.trim()==subtext.toLowerCase())
     {     
       output.push(i+1);
     }
     i=i+1;
     }
     return output;
     }
    
 
}
