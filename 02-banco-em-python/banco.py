podeparar = False
saldo=0
username_account=""
password_account=""
username_login=""
password_login=""

def menuprincipal():
    print("=== Bem-vindo ao Simulador de Banco ===")
    print("1. Criar conta")
    print("2. Fazer Login")
    print("3. Sair")
    print(" ")
    print("Escolha uma opção:")
    return int(input())

def menulogado():
    print("=== Menu ===")
    print("1. Depositar")
    print("2. Sacar")
    print("3. Verificar saldo")
    print("4. Fazer logout")
    print(" ")
    print("Escolha uma opção:")
    return int(input())

def depositar():
    print("Digite o valor de deposito:")
    valor = int(input())
    global saldo
    saldo = saldo + valor
    print("Deposito realizado com sucesso!")

def sacar():
    print("Digite o valor de saque:")
    valor = int(input())
    global saldo
    if (saldo - valor) >= 0:
        saldo = saldo - valor
        print("Saque realizado com sucesso!")

def verificarsaldo():
    print(f"Saldo atual: {saldo}")

def criarconta():
    print("Digite o nome de usuario: ")
    username_account = input()
    print("Digite o senha: ")
    password_account = input()
    print("Conta criada com sucesso!")

def verificarlogin():
    username = username_login == username_account
    password = password_login == password_account

    return username and password

def fazerlogin():
    print("Digite o nome de usuario: ")
    username_login = input()
    print("Digite o senha: ")
    password_login = input()
    print("Login bem sucedido!")

    estoulogado = verificarlogin()
    while estoulogado:
        match menulogado():
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

def opcaoinvalida():
    print("opcao invalida")

while not podeparar:
    match menuprincipal():
        case 1:
            criarconta()
        case 2:
            fazerlogin()
        case 3:
            podeparar = True
        case _:
            opcaoinvalida()
