import $ from './lib/lib';

$('#first').on('click', () => {
    $('.wrapper div').eq(0).fadeOut(800);
});

$('[data-count="second"]').on('click', () => {
    $('.wrapper div').eq(1).fadeOut(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500px').fadeOut(800);
}); 