const user = {
    nome: "Lucas Henrique",
    email: "lucas@lucas.com",
    nascimento: "2009/06/03",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()

const exibir = function(){
    console.log(this)
}
exibir()