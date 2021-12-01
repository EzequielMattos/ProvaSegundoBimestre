using System;

namespace API.Models
{
    public class FormaPagamento
    {
        public FormaPagamento() => CriadoEm = DateTime.Now;
        public int FormaPagamentoId { get; set; }
        public string Forma { get; set; }
        public string Destalhes { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}