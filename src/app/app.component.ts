import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notify = false;
  count = 0;

  onSendClick(){
    this.count++;
    this.notify = true;

    // finaliza a animação
    // aguarda 300 ms para retirar a classe css responsável pela animação
    setTimeout(() => {
      this.notify = false;
    }, 300);
  }
}
