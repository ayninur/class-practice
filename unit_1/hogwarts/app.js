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
    $container.append('$h1')
    


  });