import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: 'expertise',
  pure: false
})
export class ExpertisePipe implements PipeTransform {

  transform(input: Member[], desiredExpertise) {
    var output: Member[] = [];
    if(desiredExpertise === "President") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "President") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredExpertise === "Secretary") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "Secretary") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredExpertise === "Treasurer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "Treasurer") {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }

}
