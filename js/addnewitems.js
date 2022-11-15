// add new feature

function addNewItem() {
    let input = document.querySelector('.box__input');
    let newList = document.querySelector('.box__list');
    let btnAdd = document.querySelector('.btnNewElem');
    let blockAdd = document.querySelector('.box__add');

    let input2 = document.querySelector('.box__input2');
    let newList2 = document.querySelector('.box__list2');
    let btnAdd2 = document.querySelector('.btnNewElem2');
    let blockAdd2 = document.querySelector('.box__add2');

    btnAdd.addEventListener('click', function () {
        let newElem = document.createElement('li');
        let warning = document.createElement('span');
        warning.innerHTML = 'Слишком коротое наименование';
        let inputValue = input.value;
        newElem.textContent = inputValue;

        if (inputValue.length < 6) { // проверка для длинну строки
            input.style.background = 'pink';
            inputValue = '';
            blockAdd.append(warning);
            input.focus();
        } else {
            input.style.background = '#D9D9D9';
            newList.appendChild(newElem);
            btnAdd.style.background = '#1F1368';
        }
    })

    btnAdd2.addEventListener('click', function () {
        let newElem2 = document.createElement('li');
        let warning = document.createElement('span');
        warning.innerHTML = 'Слишком коротое наименование';
        let inputValue = input2.value;
        newElem2.textContent = inputValue;

        if (inputValue.length < 6) { // проверка для длинну строки
            input2.style.background = 'pink';
            inputValue = '';
            blockAdd2.append(warning);
            input.focus();
        } else {
            input2.style.background = '#D9D9D9';
            newList2.appendChild(newElem2);
            btnAdd2.style.background = '#1F1368';
        }
    })

}
addNewItem();

