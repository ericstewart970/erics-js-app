// for loop for Exercize 1.3

let pokemon = [
    {name: "balbasure (height 0.7)",
    height: 0.7},
    {name: "caterpie (height 1.2)",
    height: 1.2},
    {name: "Seel (height: 1.9)",
    height: 1.9}
    ];

    console.log(pokemon[0]);
    console.log(pokemon[1]);
    console.log(pokemon[2]);

for (let i=0; i < pokemon.length; i++){
  if (pokemon[i].height > 1.5){
    console.log(pokemon[i].name + " Wow! That's Big!");
  }
}
