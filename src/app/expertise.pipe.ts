import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: 'expertise',
  pure: false
})
export class ExpertisePipe implements PipeTransform {

  transform(input: Member[], desiredExpertise) {
    var output: Member[] = [];
    if(desiredExpertise === "Director") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "Director") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredExpertise === "Writer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "Writer") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredExpertise === "Actor") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "Actor") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredExpertise === "Crew") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].expertise === "Crew") {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }

}
