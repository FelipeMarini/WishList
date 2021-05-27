using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.webAPI.Domains;

namespace WishList.webAPI.Interfaces
{
    interface IDesejoRepository
    {
        List<Desejo> ListarDesejos();

        Desejo BuscarDesejoPorId(int id);

        void CadastrarDesejo(Desejo novoDesejo);

        void AtualizarDesejo(int id, Desejo desejoAtualizado);

        void DeletarDesejo(int id);

    }
}
