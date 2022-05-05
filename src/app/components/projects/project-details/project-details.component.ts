import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentful: ContentfulService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.projectId = params['id']);
    console.log(this.contentful.getProject(this.projectId));
  }

}
