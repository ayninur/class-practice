 $(()=>{
    // if (typeof jQuery == 'undefined'){
    //     console.log('oops! I still have to link my jQuery properly!');
    //   } else {console.log('I did it! I linked jQuery and this js file!')};

/////////////////////
// Year One
////////////////////

// a. Query for your div with the id of container and set it to a variable named $container
// console.log $container

    let $div = $("<div class='container'>")
    console.log($div)

// b. Create an <h1> element and set it to a variable called $h1 and console log it

    let $h1 = $("<h1>")
    console.log($h1)

// c. Add some text inside the h1 element. Example text: 'Hogwarts'

    let $container = $('.container')

    $h1.text('Hogwarts')
    $container.append($h1)
    
/////////////////////
// Year Two
////////////////////

// // a. h2 element with your name

let $h2 = $('<h2>').text('Ayni');
$container.append($h2);

// b. h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin)

let $h3 = $('<h3>').text('Gryffindor');
$container.append($h3);

// c. h4 element with your pet's name
        // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)

let $h4 = $('<h4>').text('kitty');
$container.append($h4);
$h4.addClass('pet')

// d. h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )

let $wand = $('<h5>').text('Harry Potter`s trademarked wand');
$container.append($wand);

/////////////////////
// Year Three
////////////////////

// 1. Following what you did in previous years, add the following into an unordered list 
// (with the attribute of storage and a value of trunk):

let $trunk = $('<ul>Trunk</ul>').attr('storage', 'trunk');
$container.append($trunk);

// 2. list items of
// butter beer
// invisibility cloak (add a class of secret)
// magic map (add a class of secret)
// time turner (add a class of secret)
// leash (for your pet, be sure to give this list element the same class as you gave your pet)
// Bertie Bott's Every Flavor [Jelly] Beans.
// append the unordered list to your container div

let $items = $('<li>Butter Beer</li> <li class="secret"> Invisibility Cloak </li> <li class="secret">Time Turner</li> <li class="kitty">Leash</li> <li>Bertie Bott`s Every Flavor [Jelly] Beans</li>');
$trunk.append($items);








  });