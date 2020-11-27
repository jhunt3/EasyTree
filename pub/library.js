/* JS Libraries */
"use strict";
const log=console.log
console.log('----------')
console.log('LIBRARY: Creating and loading JS libraries')

function MapGenerator(){
	log('Map Generator')
	
	
}
function drawMap(mapdata, level){
	const md = document.getElementById('modal-div')
	//log('Mapdata full')
	//log(mapdata)
	for (let i in mapdata){
		//log('mapdata[i]')
		//log(mapdata[i])
		if (mapdata[i].children == null){
			mapdata[i].numchildren = 0
			mapdata[i].level = level
			let div = document.createElement('div')
			let iframe = document.createElement('iframe')
			iframe.src = mapdata[i].link
			iframe.title = mapdata[i].page
			div.innerHTML = level
			div.append(iframe)
			md.append(div)
			div.className = 'grid-'+level+'-'+0
			div.id = mapdata[i].page
			continue
		}
		level += 1
		//log('Calling draw on')
		//log(mapdata[i])
		mapdata[i].children = drawMap(mapdata[i].children, level)
		level -= 1	
		mapdata[i].level = level
		let nchild = mapdata[i].children.length
		for (let j in mapdata[i].children){
			nchild += mapdata[i].children[j].numchildren
		}
		mapdata[i].numchildren = nchild

		let div = document.createElement('div')
		let iframe = document.createElement('iframe')
		iframe.src = mapdata[i].link
		iframe.title = mapdata[i].page
		div.innerHTML = level
		div.append(iframe)
		md.append(div)
		div.className = 'grid-'+level+'-'+nchild
		div.id = mapdata[i].page

		
	}
	//log('Return Value')
	//log(mapdata)
	return mapdata

	
}
function styledata(mapdata){
	document.getElementById('1').style.gridArea = '1 / 1/span 1 /span 2'
	document.getElementById('2').style.gridArea = '1 / 3/span 1 /span 1'
	document.getElementById('3').style.gridArea = '1 / 4/span 1 /span 1'
	document.getElementById('1-1').style.gridArea = '2 / 1/span 1 /span 1'
	document.getElementById('1-2').style.gridArea = '2 / 2/span 1 /span 1'
}

function styledata2(mapdata){
	let grid = document.getElementById('modal-div')
	grid.style.display = 'grid'
	let leafs = 0
	for (let i in mapdata){
		leafs += mapdata[i].numchildren
		if (mapdata[i].numchildren == 0){
			leafs += 1
		}
	}
	let scol = 1
	for (let i in mapdata){
		let getid = 'grid-'+mapdata[i].level+'-'+mapdata[i].numchildren
		log(getid)
		let el = document.getElementById(getid)
		let ecol = mapdata[i].numchildren
		if (mapdata[i].numchildren == 0){
			ecol = 1
		}
		let row = mapdata[i].level + 1
		el.style.gridArea = 1+' / '+scol+' / '+'span 1 / '+'span '+ecol
		scol = scol+ecol
		let scol2 = 1
		if (mapdata[i].children != null)
		{
			let getid = 'grid-'+mapdata[i].level+'-'+mapdata[i].numchildren
			let el = document.getElementById(getid)
			let ecol2 = mapdata[i].numchildren
			if (mapdata[i].numchildren == 0){
				ecol2 = 1
			}
			let row = mapdata[i].level + 1
			el.style.gridArea = 2+' / '+scol2+' / '+'span 1 / '+'span '+ecol2
			scol2 = scol2+ecol2
		}
	}

	log(leafs)
}

MapGenerator.prototype = {
	addMap: function(mapdata){
		const tab = document.createElement('button')
		tab.style = 'position: fixed; right:0; top:0'
		tab.innerHTML = 'Site Map'
		tab.className += 'collapsible'
		const modal = document.createElement('div')
		modal.className += 'modal'
		modal.innerHTML = '<div id = "modaldiv" class="modal-content"><span id="close-modal">&times;</span><h2>Map</h2><div id = "modal-div" style = "grid"></div></div></div>'
		tab.onclick = function() { modal.style.display = "block";mapdata=drawMap(mapdata, 0);styledata(mapdata); log(mapdata)}

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
