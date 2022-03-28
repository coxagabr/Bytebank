import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() onTransferir = new EventEmitter<any>();

  valor?: number;
  destino?: number;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log(
      `Solicitada nova transferencia no valor de ${this.valor} para a conta ${this.destino}`
    );
    this.onTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
