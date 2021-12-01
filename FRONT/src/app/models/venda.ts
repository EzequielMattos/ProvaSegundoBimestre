import { ItemVenda } from 'src/app/models/item-venda';
//import { FormaPagamento } from './FormaPagamento';

export interface Venda {
    vendaId?: number;
    itemVenda?: ItemVenda;
    cliente: string;
    criadoem?: string;
    //formaPagamento?: FormaPagamento;
    formaPagamentoId: number;
}