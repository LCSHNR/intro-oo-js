class User {
    constructor(nome, email, nascimento, role, ativo = true){
     this.nome = nome
     this.email = email
     this.nascimento = nascimento
     this.role = role || 'estudante'
     this.role = ativo   
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Lucas Henrique', 'lucas@lucas.com', '2009-06-03')
console.log(novoUser)
console.log(novoUser.exibirInfos())