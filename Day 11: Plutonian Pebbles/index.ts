// Day 11: Plutonian Pebbles

let pebbles = "475449 2599064 213 0 2 65 5755 51149";
// let pebbles: string[] = "125 17";
const blinks = 25;

function pebble_slicer(input: string){
  pebbles = input.split(" ")
  let new_pebbles = []
  pebbles.forEach(pebble => {
    if (pebble === "0") {
      new_pebbles.push(1)
    } else if (pebble.length % 2 === 0) {
      let sub_pebbles = [pebble.slice(0, pebble.length / 2), pebble.slice(pebble.length / 2)];
      sub_pebbles.forEach(sub_pebble => {
        new_pebbles.push(parseInt(sub_pebble));
      });
    } else {
      new_pebbles.push(parseInt(pebble) * 2024);
    }
  });
  return new_pebbles.join(" ");
}

console.log("Initial arrangement: ");
console.log(pebbles);

for (let i = 0; i < blinks; i++) {
  pebbles = pebble_slicer(pebbles);
  console.log(`\nAfter ${i+1} blinks: `);
  console.log(pebbles);
  console.log(`Length:${pebbles.length}`);
}


