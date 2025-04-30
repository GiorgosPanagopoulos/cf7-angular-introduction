import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Christodoulos',
    surName: 'Fragkoudakis',
    age: 55,
    email: 'chfrag@aueb',
    address: 'New York, Usa'
  }

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 45,
    email: 'john@aueb.gr',
    address: 'Athens Greece'
  }
}