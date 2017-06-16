import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
  providers: [MemberService]
})
export class AddMemberComponent implements OnInit {
  addForm: boolean = false;
    showAddForm() {
    if(this.addForm === true) {
      this.addForm = false;
    } else {
      this.addForm = true;
    }
  }

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string,
      role: string,
      image: string,
      bio: string,
      memberSince: number) {
      const NEWMEMBER: Member = new Member(name, role, image, bio, memberSince);
      this.memberService.addMember(NEWMEMBER);

    }
  }
