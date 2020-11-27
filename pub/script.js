/* JS Library usage examples */
"use strict";
log('----------')
log('SCRIPT.JS')
const mg = new MapGenerator()
const mapdata = [
	{page:'1',link: '1.html',children:[
		{page:'1-1',link:'1-1.html',children:null},
		{page:'1-2',link:'1-2.html',children:null}]},
	{page:'2',link:'2.html',children:null},
	{page:'3',link:'3.html',children:null}
]
			
mg.addMap(mapdata)
