import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // Aqui posso passar variaveis, e usalas no componente criado com {{ variavel }}
  nome = 'Lucas';
}
