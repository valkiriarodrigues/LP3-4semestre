import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD} from './config/db';
import { routerUsuario } from './routes/usuario';
import { routerLancamento} from './routes/lancamento';

//cria a aplicação
export const app = express();

//libera o acesso aos serviçoes
app.use(cors());

//permite receber e enviar JSON
app.use(bodyParser.json());

//configura os logs
app.use(logger('dev'));

//conecta no BD
conectarServidorNoBD();


//configuração de rotas
app.use('/usuario', routerUsuario);
app.use('/lancamento', routerLancamento);
app.use('/',(req, res) => res.send('API do app Julius'));

