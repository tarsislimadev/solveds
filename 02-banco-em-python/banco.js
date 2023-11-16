const readline = require('readline')
const { stdin: input, stdout: output } = require('node:process')
const readline = require('node:readline')

const podeparar = false
const saldo = 0
const username_account = ""
const password_account = ""
const username_login = ""
const password_login = ""

function input() {
  const rl = readline.createInterface({ input, output })

  rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`)
  
    rl.close()
  })
}

function int(a) { return Number(a) }

function menuprincipal() {
  console.log("=== Bem-vindo ao Simulador de Banco ===")
  console.log("1. Criar conta")
  console.log("2. Fazer Login")
  console.log("3. Sair")
  console.log(" ")
  console.log("Escolha uma opção:")
  return int(input())
}

function menulogado() {
  console.log("=== Menu ===")
  console.log("1. Depositar")
  console.log("2. Sacar")
  console.log("3. Verificar saldo")
  console.log("4. Fazer logout")
  console.log(" ")
  console.log("Escolha uma opção:")
  return int(input())

}

function depositar() {
  console.log("Digite o valor de deposito:")
  valor = int(input())
  saldo = saldo + valor
  console.log("Deposito realizado com sucesso!")
}

function sacar() {
  console.log("Digite o valor de saque:")
  valor = int(input())
  if ((saldo - valor) >= 0) {
    saldo = saldo - valor
    console.log("Saque realizado com sucesso!")
  }
}

function verificarsaldo() {
  console.log(`Saldo atual: ${saldo}`)
}

function criarconta() {
  console.log("Digite o nome de usuario: ")
  username_account = input()
  console.log("Digite o senha: ")
  password_account = input()
  console.log("Conta criada com sucesso!")
}

function verificarlogin() {
  username = username_login == username_account
  password = password_login == password_account
  return username && password
}

function fazerlogin() {
  console.log("Digite o nome de usuario: ")
  username_login = input()
  console.log("Digite o senha: ")
  password_login = input()
  console.log("Login bem sucedido!")

  estoulogado = verificarlogin()
  while (estoulogado) {
    switch (menulogado()) {
      case 1:
        depositar()
      case 2:
        sacar()
      case 3:
        verificarsaldo()
      case 4:
        estoulogado = False
      case _:
        opcaoinvalida()
    }
  }
}

function opcaoinvalida() {
  console.log("opcao invalida")
}

while (!podeparar) {
  switch (menuprincipal()) {
    case 1:
      criarconta()
    case 2:
      fazerlogin()
    case 3:
      podeparar = True
    case _:
      opcaoinvalida()
  }
}
