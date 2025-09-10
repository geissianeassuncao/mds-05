import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  message: string = 'Clique no botão para mudar essa mensagem'

  changeMessage(){
    this.message = 'Você clicou no botão!'
  }

  returnToDefaltMessage(){
    this.message = 'Clique no botão para mudar esta mensagem'
  }

}
