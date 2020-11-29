// import './scss/main.scss';
import { data as dataRus } from './data-rus';
import { data as dataEng } from './data-eng';
import {
	render,
	createNavbar,
	createSlider,
	initSlider,

} from './templates';

function construct (data) {
	const content = [];
	content.push(createNavbar(data.navbar));
	content.push(createSlider(data.slider));
	render(content.join(''), data);
}

construct (dataEng);
initSlider();
