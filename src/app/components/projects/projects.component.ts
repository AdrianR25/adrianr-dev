import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects!: Entry<any>[];
  error: boolean = false;
  constructor(private contentful: ContentfulService) { }

  ngOnInit(): void {
    this.contentful.getProjects().then(projects => {
      this.projects = projects;
    }).catch(() => this.error = true);
  }

}
