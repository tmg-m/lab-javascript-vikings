// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage) {
    this.health = this.health - damage
  }

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super (health, strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health < 1){
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }

  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health = this.health - damage;
    if(this.health < 1){
      return `A Saxon has died in combat`
    } else {
      return `A Saxon has received ${damage} points of damage`
    }
  }
  
}

////// random selector created by yours truly
function selectRandom (array){
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
  };


// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }


  vikingAttack(){
    let viking = selectRandom(this.vikingArmy);
    let saxon = selectRandom(this.saxonArmy);

    let vikingAttack = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0){
      this.saxonArmy.splice(Saxon);
      };
    return vikingAttack
  }

  saxonAttack(){
    let viking = selectRandom(this.vikingArmy);
    let saxon = selectRandom(this.saxonArmy);

    let saxonAttack = viking.receiveDamage(saxon.strength);
    if(viking.health <= 0){
      this.vikingArmy.splice(viking)
    }
    return saxonAttack
  }
  showStatus(){
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }

}





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
