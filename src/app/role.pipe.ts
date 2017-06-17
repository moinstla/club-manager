import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';


@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  transform(input: Member[], desiredRole) {
    var output: Member[] = [];
    if(desiredRole === "President") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "President") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredRole === "Secretary") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "Secretary") {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredRole === "Treasurer") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].role === "Treasurer") {
          output.push(input[i]);
        }
      }
      return output;

    } else {
      return input;
    }
  }

}
