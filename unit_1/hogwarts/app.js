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

/////////////////////
// Year Four
////////////////////

// a. Right above your table add an h5 that says 'Spring 2017'

let $h5 = $('<h5>Spring 2017</h5>')
$container.append($h5);

// b. Inside the table add a thead element

let $table = $('<table>');
$container.append($table);

let $thread = $('<thread>');
$table.append($thread);

// Inside the thead element add two th elements
    // in the first th add the text Day
let $th1 = $('<th>').text('Day Class');
$thread.append($th1);
        // in the second th add the text Classes
// let $th2 = $('<th>').text('Classes');
// $thread.append($th2);

// Create a tr element and add two td elements inside.
// in the first td add the day Monday
// in the second td add the classes you are taking 
// (Herbology, Divination, History of Magic, Charms, 
// Potions, Transfiguration, Defense Against the Dark Arts, 
// Quidditch practice, etc.)

let $tr = $('<tr>');
$thread.append($tr);


// Create more tr elements with tds inside so 
// that you have Monday - Friday and classes each of those days

let $tr1 = $('<tr>');
$thread.append($tr1);

let $td1 = $('<td> Monday Classes </td>');
$tr1.append($td1);


let $classes = $('<li>Herbology</li> <li>Divination</li> <li>History of Magic</li> <li>Charms</li> <li>Potions</li> <li>Transfiguration</li> <li>Defense Against the Dark Arts</li> <li>Quidditch Practice</li>')
$tr1.append($classes);
let $td2 = $('<td> Tuesday Classes </td>');
$tr1.append($td2);
let $td3 = $('<td> Wednesday Classes </td>');
$tr1.append($td3);
let $td4 = $('<td> Thursday Classes </td>');
$tr1.append($td4);
let $td5 = $('<td> Friday Classes </td>');
$tr1.append($td5);









  });