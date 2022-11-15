// switch tabs

function switchTabs() {

    let btn1 = document.querySelector('.box__tab1');
    let btn2 = document.querySelector('.box__tab2');
    let tab1 = document.querySelector('.box__item1');
    let tab2 = document.querySelector('.box__item2');

    btn1.addEventListener('click', function () {
        btn1.classList.add('active');
        btn2.classList.remove('active');
        tab1.classList.add('active');
        tab2.classList.remove('active');
    })
    btn2.addEventListener('click', function () {
        btn2.classList.add('active');
        btn1.classList.remove('active');
        tab2.classList.add('active');
        tab1.classList.remove('active');
    })

    let btn1Mob = document.querySelector('.box__mob_tab1');
    let btn2Mob = document.querySelector('.box__mob_tab2');

    btn1Mob.addEventListener('click', function () {
        btn1Mob.classList.toggle('active');
        btn2Mob.classList.remove('active');
        tab1.classList.toggle('active');
        tab2.classList.remove('active');
    })
    btn2Mob.addEventListener('click', function () {
        btn2Mob.classList.toggle('active');
        btn1Mob.classList.remove('active');
        tab2.classList.toggle('active');
        tab1.classList.remove('active');
    })
}
switchTabs();