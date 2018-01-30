import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'AgoDateCustomPipe'})
export class AgoDateCustomPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return 0;
    let rightnow = new Date();
    let givendate = new Date(+value * 1000);
    let gd: Date;
    let year = givendate.getFullYear();
    let month = givendate.getMonth();
    let day = givendate.getDate();
    let hours = givendate.getHours();
    let minutes = givendate.getMinutes();
    let seconds = givendate.getSeconds();
    let miliseconds = givendate.getMilliseconds();
    gd = new Date(year, month, day, hours, minutes, seconds, miliseconds);
    let difference = (rightnow.getTime() - gd.getTime()) / 1000;
    difference /= 60;
    return Math.abs(Math.round(difference / (60) + 7.5));
  }
}
