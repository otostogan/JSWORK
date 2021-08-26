import $ from './lib/lib';

$('#first').on('click', () => {
    $('.wrapper div').eq(0).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('.wrapper div').eq(1).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500px').fadeToggle(800);
}); 

// $('#first').fadeIn(800, 'inline-block');