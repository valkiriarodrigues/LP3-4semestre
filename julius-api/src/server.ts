import {app} from './app';

const PORTA = 3000;

const server = 
app.listen(PORTA, () => console.log(`App ouvindo na porta ${PORTA}`));

//ao encerrar o processo, o app é finalizado tambem
process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado');
});
