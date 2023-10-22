const toggleBtn = document.querySelector('.toggle_btn');
const dropownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function (){
    dropownMenu.classList.toggle('open')
}