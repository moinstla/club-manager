import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  memberId: string;
  memberToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private memberService: MemberService) {}


  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
      this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

}
