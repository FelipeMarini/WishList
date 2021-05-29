using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WishList.webAPI.Domains;

namespace WishList.webAPI.Interfaces
{
    interface IUsuarioRepository
    {
        List<Usuario> ListarUsuarios();

        Usuario BuscarUsuarioPorId(int id);

        void CadastrarUsuario(Usuario novoUsuario);

        void AtualizarUsuario(int id, Usuario usuarioAtualizado);

        void DeletarUsuario(int id);

    }
}