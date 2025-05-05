import { Component, EventEmitter, Output, ViewChild, AfterViewInit  } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
    selector: 'app-eperson-template-driven-form',
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
    ],
    templateUrl: './eperson-template-driven-form.component.html',
    styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent implements AfterViewInit {
  @Output() person = new EventEmitter<EPerson>();
  @ViewChild('form', { static: false }) form: NgForm;
  
  ngAfterViewInit(){
    setTimeout(() => {
        if (this.form) {
          this.form.setValue({
            givenName: 'John',
            surName: 'Doe',
            age: 30,
            email: 'john.doe@example.com',
            education: 'Bachelor’s degree'
          });
        }
      }, 0); // Delay setting values to next tick
  }

  onSubmit(value: any) {
    console.log(this.form);
    console.log(this.form.form.get('givenName').value);
    this.person.emit(value as EPerson);
  }
  
  onSetValue(){
    this.form.setValue({
        givenName: 'lakis',
        surName: 'Doe',
        age: 30,
        email: 'john.doe@example.com',
        education: 'Bachelor’s degree'
    });
  }
}
