// for loop for Exercize 1.3

let pokemon = [
    {name: "balbasure",
    height: 0.7},
    {name: "caterpie",
    height: 1.2},
    {name: "Seel",
    height: 1.9}
    ];



for (let i=0; i < pokemon.length; i++){
  if (pokemon[i].height > 1.5){
    document.write(pokemon[i].name + " Wow! That's Big!");
  }else if (pokemon[i].height < 1.5) {
    document.write(pokemon[i].name);
  }
  document.write(pokemon[i].height);
}
