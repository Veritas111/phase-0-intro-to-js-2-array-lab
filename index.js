// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
};

cats.push("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name);
};
cats.unshift("Bob");

function destructivelyRemoveLastCat() {
    cats.pop();
};
cats.pop();

function destructivelyRemoveFirstCat() {
    cats.shift();
};
cats.shift();

function appendCat(name) {
    return [...cats, name];
};
appendCat("Broom");

function prependCat(name) {
    return [name, ...cats,];
};
prependCat("Arnold");

function removeLastCat() {
    return cats.slice(0, -1);
};
cats.slice(0, -1);

function removeFirstCat() {
    return cats.slice(1);
};
cats.slice(1);
