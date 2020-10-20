import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario"; 

export class UsuarioController {

    // aqui deu um ctrl e espaco pra dar auto complit e importar Usuario la em cima
   async salvar(usuario: Usuario){
        const usuarioSalvo = await getManager().save(usuario);
        return usuarioSalvo;
   }


   async recuperarTodos(){
       const usuario = await getManager().find(Usuario);
       return Usuario;
   }

   async recuperarPorId(id: number) {
       const usuario = await getManager().findOne(Usuario, id);
       return usuario;
   }

   async recuperarLancamentosDoUsuario(id: number){
       const usuario = await getManager().findOne(Usuario, id, {
           relations: ['lancamentos']
       });
       return usuario.lancamentos;
   }


}