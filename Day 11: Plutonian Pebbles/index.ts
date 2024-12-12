// Day 11: Plutonian Pebbles

let input = "475449 2599064 213 0 2 65 5755 51149";
// let pebbles: string[] = "125 17";

let pebbles: number[] = input.split(" ").map(pebble => parseInt(pebble));
const blinks = 25;

function pebble_slicer(input: number[]) {
  let new_pebbles: number[] = [];
  input.forEach(pebble => {
    if (pebble === 0) {
      new_pebbles.push(1)
    } else if (digits(pebble) % 2 === 0) {
      let _pebble = pebble.toString();
      let sub_pebbles = [_pebble.slice(0, _pebble.length / 2), _pebble.slice(_pebble.length / 2)];
      sub_pebbles.forEach(sub_pebble => {
        new_pebbles.push(parseInt(sub_pebble));
      });
    } else {
      new_pebbles.push(pebble * 2024);
    }
  });
  return new_pebbles;
}

function digits(n: number) {
  return Math.floor(Math.log10(n) + 1);
}

console.log("Initial arrangement: ");
console.log(input);

for (let i = 0; i < blinks; i++) {
  pebbles = pebble_slicer(pebbles);
  console.log(`\nAfter ${i + 1} blinks: `);
  console.log(pebbles);
  console.log(`Length:${pebbles.length}`);
}


