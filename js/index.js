// control arrow-up btn
const arrowUpContainer= document.querySelector('.arrow-up-container');
arrowUpContainer.addEventListener('click', arrowClick);

function arrowClick() {
    $('html, body').animate( {scrollTop:0}, 1000 )
}