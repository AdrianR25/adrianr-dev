import { Component, Input, OnInit } from '@angular/core';
import * as fontAwesome from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'link' | 'button' = 'link';
  @Input() href: String = '';
  @Input() icon!: fontAwesome.IconDefinition;

  constructor() { }

  ngOnInit(): void {
  }

}
