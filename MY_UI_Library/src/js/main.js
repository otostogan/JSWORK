import $ from './lib/lib';

$('button').on('click', function() {
    $('.wrapper div').eq(2).toggleClass('active');
});



$('.wrapper div').click(function() {
    console.log($(this).index());
}); 

// console.log($('.wrapper div').eq(2).find('.some'));

// console.log($('.some').closest('.findme'));

$('button').fadeIn(1000);