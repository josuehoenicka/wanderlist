import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], arg: string): string[]{
    if(!arg) return value;
    let result: string[] = []
    for(let v of value){
      if(v.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result = [...result, v]
      }
    }
    return result;
  }

}
