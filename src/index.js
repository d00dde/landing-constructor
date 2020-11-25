// import './scss/main.scss';
import { data as dataRus } from './data-rus';
import { data as dataEng } from './data-eng';
import {
	render,
	createNavbar,

} from './templates';



console.log('document.head :', document.head);

function construct (data) {
	const content = [];
	content.push(createNavbar(data.navbar));
	render(content, data);
}

// renderToggleButton(
// 	{on:
// 		{title: 'eng', data: dataEng},
// 		off:{title: 'rus', data: dataRus}
// 	},
// 	'switch-lang',
// 	(data) =>{
// 		construct (data);
// 	}
// );

construct (dataEng);
