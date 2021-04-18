const pronoun = ['I','You', 'He', 'She', 'We', 'They'];
const mod = ['can', 'must', 'need'];
const verb = ['go', 'swim', 'ride', 'fly', 'eat', 'stand', 'poop', 'cry', 'laugh', 'run'];
const union = ['in', 'on', 'under', 'over', 'inside', 'outside', 'from', 'behind', 'before', 'to', 'till'];
const where = ['water', 'food', 'pit', 'lake', 'sea', 'mud', 'city', 'house', 'work', 'road', 'table', 'window', 'end', 'beginning'];

function main () {
let pikPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
let pikMode = mod[Math.floor(Math.random() * mod.length)];
let pikVerb = verb[Math.floor(Math.random() * verb.length)];
let pikUnion = union[Math.floor(Math.random() * union.length)];
let pikWhere = where[Math.floor(Math.random() * where.length)];
console.log(`${pikPronoun} ${pikMode} ${pikVerb} ${pikUnion} the ${pikWhere}.`);
};
main();