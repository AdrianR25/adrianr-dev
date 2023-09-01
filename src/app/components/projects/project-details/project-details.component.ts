import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private contentful: ContentfulService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.projectId = params['id']);
    this.contentful.getProject(this.projectId).then((value) => {
      this.project = value;
    }).catch(() => this.error = true);
  }

  htmlFromRichText(richText: any): string {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '';
    }
    return documentToHtmlString(richText);
  }

}
