function renderPopUp(figure)
{
	var imgSrc = figure.children[0].getAttribute('src');
	document.getElementsByClassName('modalContent')[0].children[0].setAttribute('src',imgSrc);
	document.getElementsByClassName('modalOverlay')[0].style.display = 'block';
}
function closePopUp()
{
	document.getElementsByClassName('modalContent')[0].children[0].setAttribute('src','');
	document.getElementsByClassName('modalOverlay')[0].style.display = 'none';
}
