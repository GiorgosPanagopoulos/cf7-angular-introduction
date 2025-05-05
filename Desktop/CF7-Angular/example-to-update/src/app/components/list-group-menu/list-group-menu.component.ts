import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuEntry } from 'src/app/shared/interfaces/menu-entry';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css',
})
export class ListGroupMenuComponent {
  menu: MenuEntry[] = [
    { text: 'Component Input Example', routerLink: 'component-input-example' },
    { text: '@for Directive Example', routerLink: 'for-directive-example' },
    { text: 'Event Bind Example', routerLink: 'event-bind-example' },
    {
      text: 'Simple Data Table Example',
      routerLink: 'simple-data-table-example',
    },
    {
      text: 'Component Output Example',
      routerLink: 'component-output-example',
    },
    {
      text: 'Template Driven Form Example',
      routerLink: 'template-driven-form-example',
    },
    { text: 'Reactive Form Example', routerLink: 'reactive-form-example' },
  ];
}
