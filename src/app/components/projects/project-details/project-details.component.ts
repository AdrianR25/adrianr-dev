import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId!: string;
  project: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentful: ContentfulService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.projectId = params['id']);
    this.contentful.getProject(this.projectId).then((value) => {
      console.log(value);
      this.project = value;
    });
  }

  htmlFromRichText(richText: any): string {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

}
