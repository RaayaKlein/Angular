// Type of the Injectable metadata. Injectable decorator and metadata.
import { Injectable } from '@angular/core';

// Decorator that marks a class as available to be provided 
// and injected as a dependency.
@Injectable({
  // we have only 1 instance for the class
  providedIn: 'root'
})

export class CalculatorService {

  constructor() { }

  // add(1, 2)  add(1, 2, 3, 4, 5)
  add(...params:number[]):number{
    let res = 0;
    for (const value of params) res += value;
    return res;
  }

  sub(...params:number[]):number{
    let res = params[0];
    for (let i = 1; i < params.length; i++) res -= params[i];
    return res;
  }

  mul(...params:number[]):number{
    let res = 1;
    for (const value of params) res *= value;
    return res;
  }

  div(...params:number[]):number{
    let res = params[0];
    for (let i = 1; i < params.length; i++) res /= params[i];
    return res;
  }

}
