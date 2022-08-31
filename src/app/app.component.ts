import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consulta-Servel';
  data = [{
    'name': 'John Doe',
    'profile': 'Software Developer',
    'email': 'john@doe.com',
    'hobby': 'coding'
  }]
  dataToString = JSON.stringify(this.data);
}
