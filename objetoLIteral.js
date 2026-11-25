nome: "Lucas Henrique",
    email: "lucas@lucas.com",
    nascimento: "2009/06/03",
    role: "admin",
    role: "estudantes",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}
user.exibirInfos()

const admin = {
    nome: "Junior",
    email: "jr@m.com",
    role: "admin",
    criarCurso(){
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()
/*
const exibir = function(){
    console.log(this)
    console.log(this.nome)
}
exibir()

const exibirNome = exibir.bind(user)
exibirNome()
exibir();
*/