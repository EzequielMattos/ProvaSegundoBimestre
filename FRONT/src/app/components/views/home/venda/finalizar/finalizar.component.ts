import { Venda } from './../../../../../models/venda';
//import { FormaPagamentoService } from './../../../../../services/formaPagamento.service';
import { VendaService } from './../../../../../services/venda.service';
import { Router } from '@angular/router';
//import { FormaPagamento } from './../../../../../models/FormaPagamento';
import { ItemVenda } from 'src/app/models/item-venda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css']
})
export class FinalizarComponent implements OnInit {

    // cliente!: string;
    // //itemVenda!: ItemVenda[];
    // //formasPagamento!: FormaPagamento[];
    // formasPagamentoId!: number;


  constructor(
    //   private router: Router,
    //   private vendaService: VendaService,
    //   private FormaPagamentoService : FormaPagamentoService
  ) { }

  ngOnInit(): void {
    //   this.FormaPagamentoService.list().subscribe((formasPagamento) => {
    //       this.formasPagamento = formasPagamento;
    //   });
  }

//   cadastrar(): void {
//         let venda: Venda = {
//             cliente: this.cliente,
//             formaPagamentoId: this.formasPagamentoId
//         };
//         this.vendaService.create(venda).subscribe((venda) => {
//             console.log(venda);
//             this.router.navigate(["produto/listar"]);
//         });
//     }

}
