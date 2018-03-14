import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform(value: any, filterText?: string): any {

     filterText= filterText?filterText.toLocaleLowerCase():null;

     return filterText? value.filter(u=>u.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
     }
  }