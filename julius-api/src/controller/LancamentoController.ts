import { getManager } from "typeorm"
import {Lancamento} from "../entity/Lancamento";

export class LancamentoController {

    async salvar (lancamento : Lancamento) {
        const lancamentoSalvo = await getManager(). save(lancamento);
        return lancamentoSalvo;

    }



  /** async alterar (id : number){
       const alterarLancamento = await getManager().update(Lancamento, id, payload);
       return alterarLancamento; */
       async alterarLancamento(id:number, lancamento: Lancamento) {
        let lancamentoNovo = await getManager().findOne(Lancamento,id);
        if(lancamentoNovo) {
            await getManager().save(lancamento);
            return true;
        };
        return false;
    }


    //deletar lancamento
   async deletar( id: number){
       const lancamento = await getManager().findOne(Lancamento, id);
       if(lancamento){
           await getManager().delete(Lancamento, id);
           return lancamento
       }
   }
 

}