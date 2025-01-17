console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];



function addToCollection(collection, title, artist, yearPublished) {
  let album ={
    title: title,
    artist: artist,
    yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}



let album0 ={
  title: 'Stoney',
  artist: 'Post Malone',
  yearPublished: 2016
}

console.log(addToCollection(myCollection, album0.title, album0.artist, album0.yearPublished));

let album1 ={
  title: 'Beerbongs & Bentleys',
  artist: 'Lost Malone',
  yearPublished: 2018
}

console.log(addToCollection(myCollection, album1.title, album1.artist, album1.yearPublished));

let album2 ={
  title: 'Hollywoods Bleeding',
  artist: 'Most Malone',
  yearPublished: 2019
}

console.log(addToCollection(myCollection, album2.title, album2.artist, album2.yearPublished));

let album3 ={
  title: 'Twelve Carat Toothache',
  artist: 'Boast Malone',
  yearPublished: 2022
}

console.log(addToCollection(myCollection, album3.title, album3.artist, album3.yearPublished));

let album4 ={
  title: 'Austin',
  artist: 'Toast Malone',
  yearPublished: 2023
}

console.log(addToCollection(myCollection, album4.title, album4.artist, album4.yearPublished));

let album5 ={
  title: 'Legends Never Die',
  artist: 'Juice WRLD',
  yearPublished: 2020
}

console.log(addToCollection(myCollection, album5.title, album5.artist, album5.yearPublished));
console.log('this is my collection:', myCollection);


function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i].title + ' by ' + collection[i].artist + ', published in ' + collection[i].yearPublished);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let singers =[];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      singers.push(collection[i])
    }
    
  }
  return singers
}

console.log(findByArtist(myCollection, 'Post Malone'));
console.log(findByArtist(myCollection, 'Most Malone'));
console.log(findByArtist(myCollection, 'Lost Malone'));
console.log(findByArtist(myCollection, 'Toast Malone'));
console.log(findByArtist(myCollection, 'Boast Malone'));
console.log(findByArtist(myCollection, 'Juice WRLD'));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
