import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  modifiedDataTable = signal<boolean>(false)
}