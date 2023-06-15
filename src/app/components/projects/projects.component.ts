import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects!: Entry<any>[];
  constructor(private contentful: ContentfulService) { }

  ngOnInit(): void {
    this.contentful.getProjects().then(projects => {
      this.projects = projects;
    });
  }

}
