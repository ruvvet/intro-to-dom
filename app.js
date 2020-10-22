// Touring the DOM zoo!
// Select the specified parts of the DOM and console.log them
// use document.getElementById, document.getElementsByClassName, document.getElementsByTagName

// the mammals section
// const mammalsSection = document.getElementById('mammals')
// console.log(mammalsSection);
// // the birds section
// const birdsSection = document.getElementById('birds')
// console.log(birdsSection)
// // all divs with the class animal
// const animals = document.getElementsByClassName('animal')
// console.log(animals);
// console.log(animals[1]);
// // the first animal div
// console.log(animals[0])
// // the last animal div
// console.log(animals[animals.length - 1]);
// // all imgs
// const imgs = document.getElementsByTagName('img')
// console.log(imgs);
// // the number of imgs on the page
// console.log(imgs.length);
// // all labels
// const labels = document.getElementsByTagName('label')
// // all the labels, one at a time
// for (let i = 0; i < labels.length; i++) {
//   console.log(labels[i]);
// }

// const labelsArrayForReal = Array.from(labels)
// labelsArrayForReal.forEach(console.log)


// Do the zoo tour one more time, this time with document.querySelector and document.querySelectorAll

// console.log(document.querySelector('#mammals'))
// const birds = document.querySelectorAll('#birds')
// console.log(birds);
// console.log(birds[0]);
// console.log(document.querySelectorAll('.animal'))






// // Changing parts of the zoo!

// // The owl is the coolest animal. Give the owl img a gold border to show this
// // const owl = document.getElementById('owl')
// const owl = document.querySelector('#owl')
// owl.style.border = '0.5em dotted goldenrod';

// // Change the label for the bunny to "Stylish Bunny"
// const bunnyLabel = document.querySelector('label[for=bunny]')
// // const bunnyLabel = document.querySelector('#bunny + label')
// // following line doesn't do what you want it to. only innerHTML changes the DOM
// // bunnyLabel.innerText = '<div>Stylish Bunny</div>'
// // Once with innerText, then again with innerHTML. When using innerHTML, create a new div inside the label tag

// // innerHTML is important to know about, but there are better tools for changing the DOM
// // bunnyLabel.innerHTML = '<div>Stylish Bunny</div>'

// // Give all images a border-radius of 3em
// const imgs = document.querySelectorAll('img')
// for (let i = 0; i < imgs.length; i++) {
//   imgs[i].style.borderRadius = '100%';
// }

// // The parrot is being rotated for a newer, flashier model: https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Change the img's src to reflect this. Use a direct attribute assignment, not the setAttribute method
// document.querySelector('#parrot').src = 'https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

// // Change our sheep image to: https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500. Use setAttribute
// document.querySelector('#sheep').setAttribute('src', 'https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')


// // Give all labels a text-decoration of underline, a font-size of 2em, and a color of darkgreen. Create a new class to handle this, and apply it to all the labels.

// const labels = document.querySelectorAll('label')

// for (let i = 0; i < labels.length; i++) {
//   labels[i].classList.add('fancy-label')
// }




// Remove the animal class from all divs that have it



// Zoo events!

// Put all of our existing js inside of a DOMContentLoaded event

// document.addEventListener('DOMContentLoaded', function() {

// })



// attach an event listener to the owl image that logs "You clicked the coolest animal!"

document.querySelector('#owl').addEventListener('click', function() {
    console.log('You clicked the coolest animal!!!');
  })


  // attach an event listener to each animal that logs "You clicked an animal!"

  const animals = document.querySelectorAll('img');
  // for (let i = 0; i < animals.length; i ++) {
  //   animals[i].addEventListener('click', function() {
  //     console.log('You clicked an animal!');
  //   })
  // }


  // Change the event listener on each animal to log "You clicked on <the-animal's-name>!". First do this the long way w/ 6 different events, then use a loop and the event object

  // for (let i = 0; i < animals.length; i ++) {
  //   animals[i].addEventListener('click', function(event) {
  //     const id = event.target.id
  //     console.log(`You clicked the ${id}!`);
  //   })
  // }


  // Add an event listener to each animal picture that changes that picture's label to 'Hello!' when the image is clicked on

  for (let i = 0; i < animals.length; i ++) {
    animals[i].addEventListener('click', function(event) {
      const id = event.target.id
      // const label = document.querySelector(`[for=${id}]`) // template literal, aka string interpolation
      const label = document.querySelector('[for=' + id + ']') // string concatenation
      label.innerText = `The ${id} says hello!`
    })
  }