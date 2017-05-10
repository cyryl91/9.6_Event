function checkOnclickEvent(param) {
  console.log(param);
}
var list = document.getElementById('js-list'),
    add = document.getElementById('js-button');

var itemsByTagName = document.getElementsByTagName('li');
	console.log(itemsByTagName);
var iloscElementow = itemsByTagName.length;
	console.log(iloscElementow);


add.addEventListener('click', function(e) {
list.innerHTML += '<li>item' +iloscElementow + '</li>';
checkOnclickEvent('button został kliknięty ' + ++iloscElementow + ' raz.');
});