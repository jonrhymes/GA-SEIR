// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

<<<<<<< HEAD
$(() => {
    const $container = $('#container');
    // console.log($container)
    const $h1 = $('<h1>').text('Hogwarts');
    // console.log($h1);
    $container.append($h1);
    const $h2 = ($('<h2>').text('Jon Rhymes'));
    $container.append($h2);
    // console.log($h2);
    const $h3 = ($('<h3>').text('Gryffindor'));
    $container.append($h3);
    const $dog = ($('<h4>').text('Spike').attr('class', 'doggo'));
    $container.append($dog);
    const $h4wand = ($('<h4>').text('Hawthorn Wand with Dragon Heartstring Core'));
    $container.append($h4wand);
    const $trunk = $('<ul>').attr('storage', 'trunk');
    $container.append($trunk);
    const $li1 = ($('<li>').text('butter beer'));
    $trunk.append($li1);
    const $li2 = ($('<li>').text('invisibility cloak').attr('class', 'secret'));
    $trunk.append($li2);
    const $li3 = ($('<li>').text('magic map').attr('class', 'secret'));
    $trunk.append($li3);
    const $li4 = ($('<li>').text('time turner').attr('class', 'secret'));
    $trunk.append($li4);
    const $leash = ($('<li>').text('leash').attr('class', 'doggo'));
    $trunk.append($leash);
    const $li6 = ($('<li>').text('bertie bott\'s every flavor (jelly) beans'));
    $trunk.append($li6);
    const $spring = ($('<h5>').text('Spring 2017')) 
    $container.append($spring);
    const $table = $('<table>');
    $container.append($table);
    const $tr1 = $('<tr>');
    $table.append($tr1);
    const $th1 = $('<th>').text('Day');
    const $th2 = $('<th>').text('Classes');
    $tr1.append($th1);
    $tr1.append($th2);
    const $tr2 = $('<tr>');
    $table.append($tr2);
    const $td1 = $('<td>').text('Monday');
    const $td2 = $('<td>').text('Transfiguration, Herbology');
    $tr2.append($td1, $td2);
    const $tr3 = $('<tr>');
    $table.append($tr3);
    const $td3 = $('<td>').text('Tuesday');
    const $td4 = $('<td>').text('Charms, History of Magic, Potions');
    $tr3.append($td3, $td4);
    const $tr4 = $('<tr>');
    $table.append($tr4);
    const $td5 = $('<td>').text('Wednesday');
    const $td6 = $('<td>').text('Defense Against the Dark Arts, Quiddicth practice');
    $tr4.append($td5, $td6);
    const $tr5 = $('<tr>');
    $table.append($tr5)
    const $td7 = $('<td>').text('Thursday');
    const $td8 = $('<td>').text('Divination');
    $tr5.append($td7, $td8);
    const $tr6 = $('<tr>');
    $table.append($tr6)
    const $td9 = $('<td>').text('Friday');
    const $td10 = $('<td>').text('Herbology, Charms, Transfiguration');
    $tr6.append($td9, $td10);
    $h4wand.remove();
    $li1.remove();
    const $newstick = $('<h4>').text('Magical Stick');
    // $dog.addClass('afterclass');
    $newstick.insertAfter($dog);
    $newstick.css('color', 'hotpink')
    $dog.appendTo($spring);
    $dog.insertAfter($h3);
    const $hideaway = $('.secret').hide('slow').delay(2000);
    $hideaway.show('slow');
    $leash.addClass('cabbage');
    $leash.removeClass('cabbage');
    $spring.text('Fall 2018');
    const $butterbeer = ($('<li>').text('butter beer'));
    $trunk.prepend($butterbeer);
    const $newTrunk = $trunk.clone().attr('storage', 'class');
    $trunk.remove();
    $newTrunk.insertAfter($newstick);
    $('ul').attr('storage', 'chest')
});
=======
//////////
// Year 1
//////////

// $(() => {}); -> add jQuery in here

const $container = $('#container');
console.log($container);

const $h1 = $('<h1>');
console.log($h1);
$h1.text('Hogwarts');
$container.append($h1);


////////////
// Year 2
////////////

const $h2 = $('<h2>');
$h2.text('Sharon Kim');
const $h3 = $('<h3>');
$h3.text('Gryffindor');
const $h4 = $('<h4>');
$h4.text('Hedwig');
$h4.addClass('owl');
const $wand = $('<h4>');
$wand.text('Birch Wand with Phoenix Feather Core');
$container.append($h2, $h3, $h4, $wand);


/////////////
// Year 3
////////////

const $list = $('<ul>');
$list.attr('storage', 'trunk');
const $listItem1 = $('<li>');
$listItem1.text('butter beer')
const $listItem2 = $('<li>').text('invisibility cloak');
$listItem2.addClass('secret');
const $listItem3 = $('<li>').text('magic map').addClass('secret');
const $listItem4 = $('<li>').text('time turner').addClass('secret');
const $leash = $('<li>').text('leash').addClass('owl');
const $jellyBeans = $('<li>').text("Bertie Bott's Every Flavor [Jelly] Beans");
$list.append($listItem1, $listItem2, $listItem3, $listItem4, $leash, $jellyBeans);
$container.append($list);


//////////////
// Year 4
//////////////

const $table = $('<table>');
const $h5 = $('<h5>').text('Spring 2017');
const $tr = $('<tr>');
const $th1 = $('<th>').text('Day');
const $th2 = $('<th>').text('Classes');
$tr.append($th1, $th2);
const $trMon = $('<tr>');
const $td1 = $('<td>').text('Monday');
const $tdClasses1 = $('<td>').text('Divination, Charms, Potions, Transfiguration');
$trMon.append($td1, $tdClasses1);
const $trTues = $('<tr>');
const $td2 = $('<td>').text('Tuesday');
const $tdClasses2 = $('<td>').text('History of Magic, Defense Against Dark Arts, Quidditch practice');
$trTues.append($td2, $tdClasses2);
const $trWed = $('<tr>');
const $td3 = $('<td>').text('Wednesday');
const $tdClasses3 = $('<td>').text('Divination, Charms, Potions, Transfiguration');
$trWed.append($td3, $tdClasses3);
const $trThurs = $('<tr>');
const $td4 = $('<td>').text('Thursday');
const $tdClasses4 = $('<td>').text('History of Magic, Defense Against Dark Arts, Quidditch practice');
$trThurs.append($td4, $tdClasses4);
const $trFri = $('<tr>');
const $td5 = $('<td>').text('Friday');
const $tdClasses5 = $('<td>').text('Divination, Charms, Potions, Transfiguration');
$trFri.append($td5, $tdClasses5);
$table.append($tr, $trMon, $trTues, $trWed, $trThurs, $trFri);
$container.append($h5, $table);


////////////
// Year 5
////////////

$wand.remove();
$listItem1.remove();
$wand.text('Repaired Birch Wand')
$wand.insertAfter($h4) // learned from stackoverflow
$wand.css('color', 'indigo');
$h4.detach();
$h4.insertAfter($h3);


////////////////
// Year 6
////////////////

const $divClass = $('.secret');
$divClass.hide('slow').delay(3000);
$divClass.show('slow');
$leash.addClass('cabbage');
$leash.removeClass('cabbage');


///////////////
// Year 7
///////////////

$h5.text('Fall 2018');
const $addItem = $('<li>');
$addItem.text('Butter Beer');
$list.prepend($addItem);
$list.attr('storage', 'chest');
>>>>>>> b2c4f80e74a9e4e260e47473d2057c5d453acf3b
