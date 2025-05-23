import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/person';
import { sortBy } from 'lodash-es';

@Component({
    selector: 'app-simple-datatable',
    imports: [],
    templateUrl: './simple-datatable.component.html',
    styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[];
  @Output() personCLicked = new EventEmitter<EPerson>();

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age: 'none',
    email: 'none',
    education: 'none',
  };

  sortData(sortKey: string): void {
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey] = 'desc';
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }

    for (let key in this.sortOrder) {
      if (key !== sortKey) {
        this.sortOrder[key] = 'none';
      }
    }
  }

  sortSign(sortKey: string): string {
    if (this.sortOrder[sortKey] === 'asc') return '↑';
    else if (this.sortOrder[sortKey] === 'desc') return '↓';
    else return '';
  }

  onPersonClicked(person: EPerson): void {
    this.personCLicked.emit(person);
  }
}
