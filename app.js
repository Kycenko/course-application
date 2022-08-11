import { technologies } from './technologies';

const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', openModal);

backdrop.addEventListener('click', closeModal);

function openModal() {
	modal.classList.add('open');
}

function closeModal() {
	modal.classList.remove('open');
}

let html = '';

for (let i = 0; i < technologies.length; i++) {
	const tech = technologies[i];

	html += ``;
}
content.innerHTML = html;
