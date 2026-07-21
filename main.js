function Pokemon(name, hp, attack, defense) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
}

Pokemon.prototype.attackEnemy = function() {
    console.log(`${this.name} atacou!`);
};

function FirePokemon(name, hp, attack, defense) {
    Pokemon.call(this, name, hp, attack, defense);

    this.type = "fire";
    this.weakness = ["water", "ground"];
}

FirePokemon.prototype = Object.create(Pokemon.prototype);
FirePokemon.prototype.constructor = FirePokemon;

function WaterPokemon(name, hp, attack, defense) {
    Pokemon.call(this, name, hp, attack, defense);

    this.type = "water";
    this.weakness = ["grass", "electric"];
}

WaterPokemon.prototype = Object.create(Pokemon.prototype);
WaterPokemon.prototype.constructor = WaterPokemon;

const charmander = new FirePokemon("Charmander", 20, 10, 12);
const squirtle = new WaterPokemon("Squirtle", 16, 11, 15);
const cyndaquil = new FirePokemon("Cyndaquil", 18, 14, 16);
