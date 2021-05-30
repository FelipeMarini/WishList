using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.webAPI.Contexts;
using WishList.webAPI.Domains;
using WishList.webAPI.Interfaces;

namespace WishList.webAPI.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {

        WishListContext ctx = new WishListContext();

        public void AtualizarDesejo(int id, Desejo desejoAtualizado)
        {
            Desejo desejoBuscado = ctx.Desejos.Find(id);

            if (desejoAtualizado.Descricao != null)
            {
                desejoBuscado.Descricao = desejoAtualizado.Descricao;
            }

           
            desejoBuscado.DataDesejo = desejoAtualizado.DataDesejo;
            

            ctx.Desejos.Update(desejoBuscado);

            ctx.SaveChanges();
        }

        public Desejo BuscarDesejoPorId(int id)
        {
            return ctx.Desejos.FirstOrDefault(d => d.IdDesejo == id);
        }

        public void CadastrarDesejo(Desejo novoDesejo)
        {
            ctx.Desejos.Add(novoDesejo);

            ctx.SaveChanges();
        }

        public void DeletarDesejo(int id)
        {
            Desejo desejoBuscado = ctx.Desejos.Find(id);

            ctx.Desejos.Remove(desejoBuscado);

            ctx.SaveChanges();
        }

        public List<Desejo> ListarDesejos()
        {
            return ctx.Desejos.ToList();
        }

    }
}
