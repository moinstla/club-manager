import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

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

    beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
    }

    beginDeletingMember(memberToDelete){
      if(confirm("Are you sure you want to delete this member?")){
        this.memberService.deleteMember(memberToDelete);
      }
    }

  }
