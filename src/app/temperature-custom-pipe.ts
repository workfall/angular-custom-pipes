import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverer',
})
export class TemperaturePipeConvertor implements PipeTransform {
  transform(val: number, unit: string) {
    if (val && !isNaN(val)) {
      if (unit == 'C') {
        let temperature = (val - 32) / 1.8;
        return temperature.toFixed(1);
      } else {
        let temperature = val * 1.8 + 32;
        return temperature.toFixed(1);
      }
    }
    return;
  }
}
