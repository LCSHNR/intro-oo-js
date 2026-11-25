/*function User (nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

//const novoUser = new User('Lucas Henrique', "lucas@lucas.com")
//console.log(novoUser.exibirInfos())

function Admin(role){
    User.call(this, 'Lucas Henrique', 'lucas@lucas.com')
    this.role = role || 'estudante'
}
Admin.protype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)
*/
const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Lucas', 'lucas@lucas.com')
console.log(novoUser.exibirInfos())