import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() name = '';
  @Input() imgSrc = '';
  @Input() shortDesc = '';
  @Input() projectUrl = '';
  @Input() codeUrl = '';
  @Input() projectId = '';

  constructor() { }

  ngOnInit(): void {
  }

}
