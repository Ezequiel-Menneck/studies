const carro = function(nome) {
    const carroNome = function () {
        return nome;
    }

    return carroNome;
}

const selta = carro("selta")

console.log(selta())

// -----------------------------------------------------

const pinoquio = function(cm) {
    const narigudo = function() {
        return cm > 10 ? 'Sim' : 'Não'
    }
    return narigudo;
}

const narigudao = pinoquio(13)

console.log(narigudao())

// -----------------------------------------------------

const vip = function() {
    const bonequinha = function(arma) {
        if (typeof arma ==='string') {
            return 'russolocomike'
        }
    }

    return bonequinha;
}

const mike5k = vip()

console.log(mike5k('bonequinha'))

// -----------------------------------------------------

const voType = function(nome, idade, deletaSave = true) {
    this.nome = nome
    this.idade = idade
    this.deletaSave = deletaSave
}

const deletaSave = function() {
    const foiMinhaVo = function(vo) {
        if (vo instanceof voType && vo.deletaSave) {
            return 'Velha braba'
        }
    }

    return foiMinhaVo
}

voTop = new voType('Cida', 99)

let veiaTop = deletaSave();

console.log(veiaTop(voTop))


// ------------------------------------------

// Nesse caso imaginário teremos um erro ao tentar retornar machine
// Closure nos permite utilizar as variaveis mais "acima" para as funções "mais abaixo"
// Porém Não conseguimos utilizar as variveis mais "abaixo" em funções "mais acima"
const pcGamer = function() {
    const vale15k = function(machine) {
        machine = "Ricasso"
    }
    return machine;
}

const valeMesmo = pcGamer();

console.log(valeMesmo('ryzen5'))

// Adicionando complexidade
const createPet = function(name, sex) {
    let petSex = sex.toLowerCase();

    return {
        setName: function(newName) {
            name = newName;
        },

        getName: function() {
            return name
        },

        getSex: function() {
            return petSex;
        },

        setSex: function(newSex) {
            if (
                typeof newSex === 'string' && 
                newSex.toLowerCase() === 'male' ||
                newSex.toLowerCase() === 'female'
            ) {
                petSex = newSex;
            }
        }
    }
}

const myPet = createPet("Akira", "Female")

console.log('---------------------------------------------')

console.log(myPet.getName());
myPet.setName("Lindinha");
console.log(myPet.getName());
console.log(myPet.getSex());
myPet.setSex("male");
console.log(myPet.getSex());