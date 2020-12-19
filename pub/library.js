/* JS Libraries */
"use strict";
const log=console.log
console.log('----------')
console.log('LIBRARY: Creating and loading JS libraries')

function MapGenerator(){
	log('Map Generator')
	
	
}
function drawMap(mapdata, level,start){
	const md = document.getElementById('modal-div')
	//log('Mapdata full')
	//log(mapdata)
	let index = start
	for (let i in mapdata){
		
		
		if (mapdata[i].children == null||mapdata[i].hasOwnProperty('children')==false){
			mapdata[i].numchildren = 1
			mapdata[i].level = level
			mapdata[i].above = 1
			let div = document.createElement('div')
			div.style.textAlign='center'
			div.className = 'node-parent'
			let cdiv = document.createElement('div')
			div.style.padding='10px'
			
			if (mapdata[i].hasOwnProperty('link') == false|| mapdata[i].link==''){
				let text = "<p class='map_responsive'>"+mapdata[i].page+"</p>"
				cdiv.style.width = '100px'
				//cdiv.style.height = '20px'
				cdiv.style.textAlign = 'center'
				cdiv.innerHTML=text
				div.append(cdiv)
			}else if(mapdata[i].link.endsWith('.jpg') ||mapdata[i].link.endsWith('.jpeg')||mapdata[i].link.endsWith('.png')){
				cdiv.className = 'map_responsive'
				let iframe = document.createElement('img')
				iframe.src = mapdata[i].link
				iframe.title = mapdata[i].page
				iframe.style.maxHeight = '70px'
				iframe.style.maxWidth = '70px'
				//let text = "<p >"+mapdata[i].page+"</p> Level: "+level+" Leafs: "+mapdata[i].numchildren
				let text = "<p >"+mapdata[i].page+"</p>"

				cdiv.innerHTML=text
				div.append(cdiv)
				div.append(iframe)			
			}else{
				cdiv.className = 'map_responsive'
				let iframe = document.createElement('iframe')
				iframe.src = mapdata[i].link
				iframe.title = mapdata[i].page
				iframe.style.overflow = 'hidden'
				let text = "<a href="+mapdata[i].link+"><p >"+mapdata[i].page+"</p></a>"
				cdiv.innerHTML=text
				div.append(cdiv)
				div.append(iframe)

			}
			//iframe.scrolling='no'
			
						//let text = "<a href="+mapdata[i].link+"><p >"+mapdata[i].page+"</p></a> Level: "+level+" Leafs: "+mapdata[i].numchildren
			//log(text)
			md.append(div)
			div.className += ' grid-'+level+'-'+mapdata[i].numchildren
			//div.id = mapdata[i].page
			div.style.gridArea = `${mapdata[i].level+1} / ${index} / span 1 / span ${mapdata[i].numchildren}`
			div.style.borderTop = '5px solid black'
			if(i == 0){
				//item.style.borderLeft='5px solid black'
				div.style.borderTopLeftRadius='20px 20px'
			}
			if( i == mapdata.length-1){
				//item.style.borderLeft='5px solid black'
				div.style.borderTopRightRadius='20px 20px'
			}
			index += 1
		

			continue
		}
		level += 1
		//log('Calling draw on')
		//log(mapdata[i])
		mapdata[i].children = drawMap(mapdata[i].children, level,index)

		level -= 1	
		mapdata[i].level = level
		let nchild = 0
		let above = 0
		for (let j in mapdata[i].children){
			log(mapdata[i].children[j])
			nchild += mapdata[i].children[j].numchildren
			if (mapdata[i].children[j].above > above){
				above = mapdata[i].children[j].above 
			}
		}
		mapdata[i].numchildren = nchild
		mapdata[i].above = above +1
		let div = document.createElement('div')
		div.style.textAlign='center'
		div.className = 'node-parent'
		div.style.padding='10px'
		let cdiv = document.createElement('div')
		cdiv.style.textAlign='center'
		if (mapdata[i].hasOwnProperty('link') == false || mapdata[i].link==''){
			let text = "<p class='map_responsive' style = 'text-align:center'>"+mapdata[i].page+"</p>"
			cdiv.style.width = '100px'
			//cdiv.style.height = '20px'
			div.innerHTML=text
			div.append(cdiv)
		}else if(mapdata[i].link.endsWith('.jpg') ||mapdata[i].link.endsWith('.jpeg')||mapdata[i].link.endsWith('.png')){
			cdiv.className = 'map_responsive'
			let iframe = document.createElement('img')
			iframe.src = mapdata[i].link
			iframe.title = mapdata[i].page
			iframe.style.maxHeight = '70px'
			iframe.style.maxWidth = '70px'
			//let text = "<p >"+mapdata[i].page+"</p> Level: "+level+" Leafs: "+mapdata[i].numchildren
			let text = "<p >"+mapdata[i].page+"</p>"
			cdiv.innerHTML=text
			div.append(cdiv)
			div.append(iframe)			
		}
		else{
			cdiv.className = 'map_responsive'
			let iframe = document.createElement('iframe')
			iframe.src = mapdata[i].link
			iframe.title = mapdata[i].page
			iframe.style.overflow = 'hidden'
			let text = "<a href="+mapdata[i].link+"><p >"+mapdata[i].page+"</p></a>"
			cdiv.innerHTML=text
			div.append(cdiv)
			div.append(iframe)

		}
			//iframe.scrolling='no'
			
						
			//log(text)
		md.append(div)
		div.className += ' grid-'+level+'-'+mapdata[i].numchildren
	//	div.id = mapdata[i].page
			//div.id = mapdata[i].page
		div.style.gridArea = `${mapdata[i].level+1} / ${index} / span 1 / span ${mapdata[i].numchildren}`
		div.style.borderTop = '5px solid black'
		if(i == 0){
			//item.style.borderLeft='5px solid black'
			div.style.borderTopLeftRadius='20px 20px'
		}
		if( i == mapdata.length-1){
			//item.style.borderLeft='5px solid black'
			div.style.borderTopRightRadius='20px 20px'
		}
		index += mapdata[i].numchildren

		//let div = document.createElement('div')
		//div.style.textAlign = 'center'
		//div.className = 'node-parent'
		//let iframe = document.createElement('iframe')
		//iframe.src = mapdata[i].link
		//iframe.title = mapdata[i].page
		//iframe.style.overlow = 'hidden'
		//let cdiv = document.createElement('div')
		//cdiv.className = 'map_responsive'
		//cdiv.style.backgroundColor = 'white'
		//let text = "<a href="+mapdata[i].link+"><p> "+mapdata[i].page+"</p></a> Level: "+level+" Leafs: "+mapdata[i].numchildren
		//log(text)
		//cdiv.innerHTML = text
		//div.append(cdiv)
		//div.append(iframe)
		//md.append(div) 
		//div.className += ' grid-'+level+'-'+nchild
		//div.id = mapdata[i].page
		
	}
	//log('Return Value')
	//log(mapdata)
	return mapdata

	
}
function initLibModal(){
		const modal = document.createElement('div')
		modal.id = 'treeLibModal'
		modal.style.position = 'fixed'
		modal.style.overflow = 'auto'
		modal.style.boxSizing = 'border-box'
	//	modal.style.backgroundColor = colour
		//modal.style.maxHeight = 'calc(100vh-125px)'
		//modal.style.maxWidth = 'calc(100%-80px)'
		//modal.style.transform = 'translate(-50%,-50%)'
		modal.className += 'modal'
		modal.innerHTML = '<span id="close-modal" style="position:absolute;top:7vh;left:90vw;z-index:1100;cursor:pointer">&times;</span><div id = "modaldiv" style = "overflow-y: scroll;height:80vh;width:90vw;margin:5vh" class="modal-content"><h2 id = "treeLibModalTitle"></h2><div id = "modal-div" style = "display:grid; "></div></div></div>'
		const body = $('body')
		body.append(modal)
		$(document).ready(function(){
    		$('#modaldiv').bind('wheel mousewheel', function(e){
			let positionDiv = $('#modaldiv').position();
			let rightSide = $('#modaldiv').width()+positionDiv.left;
			//log(rightSide, positionDiv.left, e.pageX)
			let focusX = e.pageX/$(window).width()
			//log($('#modaldiv').width())
			//$('#modaldiv').scrollLeft($('#modaldiv').width()*focusX)
			let fullScrollLeft = $('#modaldiv').prop('scrollHeight')
			let oldScrollLeft = $('#modaldiv').scrollLeft()
			let oldScrollTop = $('#modaldiv').scrollTop()
			//log(oldScrollLeft, fullScrollLeft)
		        let delta;
			if (e.originalEvent.wheelDelta !== undefined)
				delta = e.originalEvent.wheelDelta;
			else
				delta = e.originalEvent.deltaY * -1;
			
			if(delta > 0) {
				let mapzoom = $("#modal-div").css("zoom")*1.1
				let fontzoom = $(".map_responsive").css("zoom")/1.1
				$("#modal-div").css("zoom", mapzoom);
				$(".map_responsive").css("zoom", fontzoom);
				//$('#modaldiv').scrollLeft($('#modaldiv').scrollLeft($('#modaldiv').prop('scrollHeight'))*(oldScrollLeft
				$('#modaldiv').scrollLeft($('#modaldiv').scrollLeft()*1.2)
				$('#modaldiv').scrollTop($('#modaldiv').scrollTop()*1.2)
			}
			else{
				let mapzoom = $("#modal-div").css("zoom")/1.1
				let fontzoom = $(".map_responsive").css("zoom")*1.1
				$("#modal-div").css("zoom", mapzoom);
				$(".map_responsive").css("zoom", fontzoom);
				$('#modaldiv').scrollLeft($('#modaldiv').scrollLeft()/1.2)
				$('#modaldiv').scrollTop($('#modaldiv').scrollTop()/1.2)
			}
		});
		
		const close = document.getElementById('close-modal')
		const md = document.getElementById('modal-div')
		close.onclick=function(){
			$('body').css('overflow-y','auto')
			modal.style.display="none";
			const md = document.getElementById('modal-div');
			md.innerHTML = '';
			$("#modal-div").css("zoom", 1);
			$(".map_responsive").css("zoom", 1);
		}

			});
}
MapGenerator.prototype = {
	addMap: function(mapdata){
		const tab = document.createElement('button')
		tab.style = 'position: fixed; right:0; top:0'
		tab.innerHTML = 'Site Map'
		tab.className += 'collapsible'
	
		if($('#treeLibModal').length == 0){initLibModal()}
		
		let modal = document.getElementById('treeLibModal')
		tab.onclick = function() { 
			document.getElementById('treeLibModalTitle').innerHTML = 'Site Map'
			$('body').css('height','100vh')
			$('body').css('overflow-y','hidden')

			modal.style.display = "block";
			mapdata=drawMap(mapdata, 0,1);
			let totalleafs = 0
			let max_height = 0
			for (let i in mapdata){
				totalleafs += mapdata[i].numchildren
				if (mapdata[i].above > max_height){
					max_height = mapdata[i].above
				}
			}
			let grid_c_style = ''
			let grid_r_style = ''
			for (let i = 0; i < totalleafs; i++){
				grid_c_style += "auto "	
			}
			for (let i = 0; i < max_height; i++){
				grid_r_style += "auto "	
			}
			const grid = document.getElementById('modal-div')
			grid.style.gridTemplateColumns = grid_c_style
			grid.style.gridTemplateRows = grid_r_style
			log(totalleafs)
			log(mapdata)
			//styleData(mapdata, 1)
			//grid.style.gridTemplateAreas = '"
			//const item = document.getElementById('1')
			//item.style.gridArea = '1 / 1 / span 1 / span 2'
			//log(item)
				
		}
		const body = $('body')
		body.append(tab)
		
	},
	addTree: function(mapdata, buttonId){
		const tab = document.getElementById(buttonId)
		//tab.className += ' collapsible'
	
		if($('#treeLibModal').length == 0){initLibModal()}
		let modal = document.getElementById('treeLibModal')
		tab.onclick = function() { 
			document.getElementById('treeLibModalTitle').innerHTML = document.getElementById(buttonId).innerHTML
			$('body').css('height','100vh')
			$('body').css('overflow-y','hidden')

			modal.style.display = "block";
			mapdata=drawMap(mapdata, 0,1);
			let totalleafs = 0
			let max_height = 0
			for (let i in mapdata){
				totalleafs += mapdata[i].numchildren
				if (mapdata[i].above > max_height){
					max_height = mapdata[i].above
				}
			}
			let grid_c_style = ''
			let grid_r_style = ''
			for (let i = 0; i < totalleafs; i++){
				grid_c_style += "auto "	
			}
			for (let i = 0; i < max_height; i++){
				grid_r_style += "auto "	
			}
			const grid = document.getElementById('modal-div')
			grid.style.gridTemplateColumns = grid_c_style
			grid.style.gridTemplateRows = grid_r_style
			log(totalleafs)
			log(mapdata)
			//styleData(mapdata, 1)
			//grid.style.gridTemplateAreas = '"
			//const item = document.getElementById('1')
			//item.style.gridArea = '1 / 1 / span 1 / span 2'
			//log(item)
				
		}
		//const body = $('body')
		//body.append(tab)
		

	}

	/*	let clicked = false, clickY, clickX;
		let updateScrollPos = function(e){
			$('#modaldiv').css('cursor', 'grabbing');
			$('#modaldiv').scrollTop($('#modaldiv').scrollTop() + (clickY - e.pageY));
			$('#modaldiv').scrollLeft($('#modaldiv').scrollLeft() + (clickX - e.pageX));

		}
		$('#modaldiv').on({
			'mousemove': function(e){
				clicked && updateScrollPos(e);
			},
			'mousedown': function(e){
				log('Page x: '+e.pageX)
				log('Scroll Left: '+$('#modal-div').scrollLeft())
				clicked = true;
				clickY = e.pageY;
				clickX = e.pageX;
			},
			'mouseup': function(){
				clicked = false;
				log('mouseup')
				$('#modaldiv').css('cursor', 'auto');
			}
			'keydown':function(e){
				log(e.keyCode)
			}

			
		});*/

		
	
}
