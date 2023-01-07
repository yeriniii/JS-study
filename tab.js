/*
document.querySelectorAll('.tab-button')[0].addEventListener('click',function(){
    document.querySelectorAll('.tab-button').classList.remove('orange');
    document.querySelectorAll('.tab-button')[0].classList.add('orange');
    document.querySelectorAll('.tab-content').classList.remove('show');
    document.querySelectorAll('.tab-content')[0].classList.add('show');
});
*/
for (let i=0; i< $('.tab-button').length; i++){ //반복문 변수는 let
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
    });
}

$('.list').click(function(e){
    opentab(e.target.dataset.id)
})

function opentab(num){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(num).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(num).addClass('show');
}

