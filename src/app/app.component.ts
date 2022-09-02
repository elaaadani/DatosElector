import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consulta-Servel';
  data = [{
    'name': 'Danela Quila',
    'email': 'dquila6@gmail.com',
    'hobby': 'coding'
  }]
  dataToString = JSON.stringify(this.data);
}
