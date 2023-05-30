import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
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
    //return from(promise).pipe(map(entry => entry.fields));
    return promise.then(res => res.fields);
  }
  getProjects() {
    const promise = this.client.getEntries({select: 'fields.name,fields.screenshot,fields.shortDescription,fields.projectUrl,fields.codeUrl', content_type: 'project'});
    return promise.then(res => res.items);
  }
}
