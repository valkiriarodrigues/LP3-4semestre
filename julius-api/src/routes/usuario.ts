import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { Usuario } from '../entity/Usuario';


 export const routerUsuario = Router();
 const usuarioCtrl = new UsuarioController();

// Serviço para salvar um novo usuario

routerUsuario.post('/', async (req, res) => {
    const {nome, email } = req.body;
    const usuario = new Usuario(nome, email);
    const usuarioSalvo = await usuarioCtrl.salvar(usuario);
    res.json(usuarioSalvo);
    
});

//serviço para recuperar todos os usuarios
routerUsuario.get('/', async (req , res) =>{
    const usuarios = await usuarioCtrl.recuperarTodos();
    res.json(usuarios);
});

//serviço para recuperar os lançamentos de um determinado usuario
routerUsuario.get('/lancamentos/:idUsuario', async (req, res) => {
    const idUsuario = parseInt(req.params.idUsuario);
    const lancamentos = await usuarioCtrl.recuperarLancamentosDoUsuario(idUsuario);
    res.json(lancamentos);
 

});