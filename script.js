class Tarefa{

    constructor(titulo){
        this.tarefa = document.querySelector(titulo);
        this.titulo = titulo;
        this.btnTarefa = this.tarefa.querySelector(".btnTarefa");
        this.statusTarefa = ['default', 'feito', 'incompleto', 'nao-feito'];

        this.btnTarefa.addEventListener("click", ()=>{
            this.alterarStatus();
        });
    }

    alterarStatus(){
        let valorInput = this.tarefa.querySelector('input');
        let statusAtual = this.statusTarefa.indexOf(valorInput.value);

        let proximoStatus = (statusAtual + 1) % this.statusTarefa.length;
        valorInput.value = this.statusTarefa[proximoStatus];

        this.statusTarefa.forEach(statusAtual => {
            this.tarefa.classList.remove(statusAtual)
        });

        this.tarefa.classList.add(this.statusTarefa[proximoStatus]);
    }
}

const tarefa = new Tarefa('.tarefa');

