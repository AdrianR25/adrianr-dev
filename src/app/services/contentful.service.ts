import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { from, map } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })
  constructor() { }
  // console logs a response for debugging
  logContent(contentId: string) {
     this.client.getEntry(contentId)
      .then(entry => console.log(entry));
  }
  // retrieves content mapped to its data fields
  getProject(contentId: string) {
    const promise = this.client.getEntry(contentId);
    return from(promise).pipe(map(entry => entry.fields));
  }
  getProjects() {
    const promise = this.client.getEntries({select: 'fields.name,fields.screenshot', content_type: 'project'});
    return promise.then(res => res.items);
  }
  /*
  // convert markdown string to 
  markdownToHtml(md: string) {
    return marked(md)
  }*/
}
