import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson2task7';
  foo = 'Hello';
  bar = 'World';

  changeFn(e) {
    this.foo = e.target.value;
    console.log('change');
  }
  modelChangeFn(e) {
    this.bar = e;
    console.log('modelChange');
  }
}
