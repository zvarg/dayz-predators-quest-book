import { Component, Input } from '@angular/core';
import { Requirement } from 'app/modules/shared/models/requirement';

@Component({
  selector: 'requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})
export class RequirementComponent {
  @Input() requirement: Requirement;
}