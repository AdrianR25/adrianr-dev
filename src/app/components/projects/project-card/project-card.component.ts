import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleUp, faArrowUp, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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

  linkIcon = faExternalLinkAlt;
  codeIcon = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
