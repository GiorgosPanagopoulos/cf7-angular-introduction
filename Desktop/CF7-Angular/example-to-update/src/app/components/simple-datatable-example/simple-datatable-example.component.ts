import { Component } from '@angular/core';
import { ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css',
})
export class SimpleDatatableExampleComponent {
  manyPerson = ManyPerson;
}
