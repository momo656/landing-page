let stars = document.getElementById('stars1');
let moon = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
onscroll = function(){
    let value = this.scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value  + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';

    if(this.scrollY >= 175){
        document.querySelector('.main').style.background='linear-gradient(#36a393,#34074d)';
    }else{
        document.querySelector('.main').style.background='linear-gradient(#270029,#210133)';
    }





}