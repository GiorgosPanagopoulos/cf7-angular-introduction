import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Markos';

  // Step 1: One way binding of data
  person = {
    givenName: 'Markos',
    surName: 'Karampatsis',
    age:52,
    email:'marka@aueb.gr'
  }

  // Step 3: Component Input
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragkoudakis",
    age:55,
    email: "chfrag@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@example.com",
    address: "New York, USA"
  }

  users: Person[] = [
    {
      "givenName": "Sawyer",
      "surName": "Whitney",
      "email": "swhitney0@narod.ru",
      "age": 1,
      "address": "1st Floor"
    }, {
      "givenName": "Gladi",
      "surName": "Pavlovsky",
      "email": "gpavlovsky1@bluehost.com",
      "age": 2,
      "address": "Room 554"
    }, {
      "givenName": "Christy",
      "surName": "Wheelton",
      "email": "cwheelton2@ezinearticles.com",
      "age": 3,
      "address": "Room 1145"
    }, {
      "givenName": "Marcella",
      "surName": "McNutt",
      "email": "mmcnutt3@multiply.com",
      "age": 4,
      "address": "Apt 386"
    }, {
      "givenName": "Klaus",
      "surName": "Rawll",
      "email": "krawll4@reference.com",
      "age": 5,
      "address": "PO Box 79933"
    }, {
      "givenName": "Chance",
      "surName": "Mosby",
      "email": "cmosby5@cisco.com",
      "age": 6,
      "address": "12th Floor"
    }, {
      "givenName": "Nadine",
      "surName": "Cullinan",
      "email": "ncullinan6@mail.ru",
      "age": 7,
      "address": "Room 1163"
    }, {
      "givenName": "Janka",
      "surName": "Saintsbury",
      "email": "jsaintsbury7@so-net.ne.jp",
      "age": 8,
      "address": "PO Box 87795"
    }, {
      "givenName": "Heindrick",
      "surName": "Jumel",
      "email": "hjumel8@devhub.com",
      "age": 9,
      "address": "PO Box 69852"
    }, {
      "givenName": "Giffard",
      "surName": "Dallinder",
      "email": "gdallinder9@redcross.org",
      "age": 10,
      "address": "PO Box 96242"
    }, {
      "givenName": "Morse",
      "surName": "Strewthers",
      "email": "mstrewthersa@earthlink.net",
      "age": 11,
      "address": "PO Box 30444"
    }, {
      "givenName": "Roseanne",
      "surName": "Kitching",
      "email": "rkitchingb@stumbleupon.com",
      "age": 12,
      "address": "Room 402"
    }, {
      "givenName": "Griffy",
      "surName": "Scrigmour",
      "email": "gscrigmourc@mit.edu",
      "age": 13,
      "address": "15th Floor"
    }, {
      "givenName": "Annelise",
      "surName": "Habert",
      "email": "ahabertd@va.gov",
      "age": 14,
      "address": "PO Box 74057"
    }, {
      "givenName": "Maureene",
      "surName": "Pettecrew",
      "email": "mpettecrewe@booking.com",
      "age": 15,
      "address": "PO Box 11501"
    }, {
      "givenName": "Felic",
      "surName": "Eglington",
      "email": "feglingtonf@cnn.com",
      "age": 16,
      "address": "Suite 46"
    }, {
      "givenName": "Pansie",
      "surName": "Lissett",
      "email": "plissettg@gravatar.com",
      "age": 17,
      "address": "PO Box 56044"
    }, {
      "givenName": "Ramon",
      "surName": "Greenard",
      "email": "rgreenardh@usda.gov",
      "age": 18,
      "address": "Suite 11"
    }, {
      "givenName": "Aretha",
      "surName": "MacDonald",
      "email": "amacdonaldi@globo.com",
      "age": 19,
      "address": "Apt 733"
    }, {
      "givenName": "Franklin",
      "surName": "Domenici",
      "email": "fdomenicij@about.com",
      "age": 20,
      "address": "PO Box 11287"
    }
  ]

}