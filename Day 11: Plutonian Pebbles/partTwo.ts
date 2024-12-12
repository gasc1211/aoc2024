// Day 11: Plutonian Pebbles

let input = "475449 2599064 213 0 2 65 5755 51149";
// let input: string = "125 17";

let pebbles: number[] = input.split(" ").map(pebble => parseInt(pebble));
const blinks = 75;

const pebble_slicer = memoize((pebble: number, i: number): number => {
  if (i === 0) {
    return 1;
  } else if (pebble === 0) {
    return pebble_slicer(1, i - 1);
  } else if (digits(pebble) % 2 === 0) {
    let _pebble = pebble.toString();
    let sub_pebbles = [_pebble.slice(0, _pebble.length / 2), _pebble.slice(_pebble.length / 2)];
    return pebble_slicer(parseInt(sub_pebbles[0]), i - 1) + pebble_slicer(parseInt(sub_pebbles[1]), i - 1);
  } else {
    return pebble_slicer(pebble * 2024, i - 1);
  }
});

function digits(n: number) {
  return Math.floor(Math.log10(n) + 1);
}

function memoize(fn: Function) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}


console.log("Initial arrangement: ");
console.log(pebbles);

let len = 0;
pebbles.forEach((pebble) => {
  // console.log(`Pebble: ${pebble}`);
  len += pebble_slicer(pebble, blinks);
});
console.log(`Result: ${len}`);