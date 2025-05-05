import { Component, Input } from '@angular/core';
import { Person, EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css',
})
export class PersonTableComponent {
  @Input() person: Person | EPerson | undefined;

  isPerson(): boolean {
    return this.person && 'address' in this.person;
  }

  isEPerson(): boolean {
    return this.person && 'education' in this.person;
  }
}
