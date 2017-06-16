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
      role: string,
      image: string,
      bio: string,
      memberSince: number) {
      const NEWMEMBER: Member = new Member(name, role, image, bio, memberSince);
      this.memberService.addMember(NEWMEMBER);

    }
  }
