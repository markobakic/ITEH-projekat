import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inches'
})
export class InchesPipe implements PipeTransform {

  transform(value: string): string {
    return `${value}''`;
  }

}
