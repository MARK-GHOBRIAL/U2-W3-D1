class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  comparazioneAge(user1, user2) {
    if (user1.age > user2.age) {
      return "user1 e' piu' grande"
    } else if (user1.age === user2.age) {
      return "hanno eta' uguale"
    } else {
      return "user2 e' piu' grande"
    }
  }
}

const mario = new User('mario', 'rossi', 31, 'battistini')
const fabio = new User('fabio', 'cesarini', 51, 'tiburtina')

//console.log(User.function(mario, fabio))

//esercizio 2

const nome = document.getElementById('name')
const proprietario = document.getElementById('Owner')
const specie = document.getElementById('species')
const razza = document.getElementById('breed')
const bottom = document.getElementById('bottom')

class pet {
  constructor(_PetName, _OwnerName, _Species, _Bread) {
    this.PetNameet = _PetName
    this.OwnerName = _OwnerName
    this.Species = _Species
    this.Bread = _Bread
  }
}

const dog = new pet('wolf', 'mark', 'dog', 'bastore')

console.log(dog)
