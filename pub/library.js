/* JS Libraries */
"use strict";
const log=console.log
console.log('----------')
console.log('LIBRARY: Creating and loading JS libraries')

function MapGenerator(){
	log('Map Generator')
	
	
}
function drawMap(mapdata){
	const md = document.getElementById('modal-div')
	for (let i in mapdata){
		log(mapdata[i].page)
		let iframe = document.createElement('iframe')
		iframe.src = mapdata[i].link
		iframe.title = mapdata[i].page
		md.append(iframe)
		if (mapdata[i].children != null){

			drawMap(mapdata[i].children)
		}
	}
}
MapGenerator.prototype = {
	addMap: function(mapdata){
		const tab = document.createElement('button')
		tab.style = 'position: fixed; right:0; top:0'
		tab.innerHTML = 'Site Map'
		tab.className += 'collapsible'
		const modal = document.createElement('div')
		modal.className += 'modal'
		modal.innerHTML = '<div id = "modal-div" class="modal-content"><span id="close-modal">&times;</span><h2>Map</h2></div></div>'
		tab.onclick = function() { modal.style.display = "block";drawMap(mapdata)}

		const body = $('body')
		body.append(tab)
		body.append(modal)
		const close = document.getElementById('close-modal')
	const md = document.getElementById('modal-div')
		close.onclick=function(){
			modal.style.display="none";
			const md = document.getElementById('modal-div');
			md.innerHTML = '';
		}
		
	}
}
