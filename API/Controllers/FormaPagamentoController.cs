using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/forma")]
    public class FormaPagamentoController : ControllerBase
    {
        private readonly DataContext _context;
        public FormaPagamentoController(DataContext context)
        {
            _context = context;
        }

        //POST: api/categoria/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] FormaPagamento formaPagamento)
        {
            _context.FormasPagamento.Add(formaPagamento);
            _context.SaveChanges();
            return Created("", formaPagamento);
        }

        //GET: api/categoria/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.FormasPagamento.ToList());

    }
}