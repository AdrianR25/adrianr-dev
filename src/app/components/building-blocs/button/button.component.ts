import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'link' | 'button' = 'link';
  @Input() href: string = '';
  @Input() icon!: string;
  @Input() styleClass: 'filled' | 'outlined' = 'filled';

  constructor() { }

  ngOnInit(): void {
  }

}
