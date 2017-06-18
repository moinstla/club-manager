import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
    providers: [MemberService]
})
export class AdminComponent implements OnInit {
  constructor(private memberService: MemberService) { }


  ngOnInit() {
  }

  submitForm(name: string,
      image: string,
      expertise: string,
      bio: string,
      contact: string) {
      const NEWMEMBER: Member = new Member(name, image, expertise, bio, contact);
      this.memberService.addMember(NEWMEMBER);

    }
  }
