export function randomInRange(startInclusive: number, endInclusive: number) {
  return startInclusive + Math.ceil((endInclusive - startInclusive) * Math.random());
}
