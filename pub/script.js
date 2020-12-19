/* JS Library usage examples */
"use strict";
log('----------')
log('SCRIPT.JS')
const mg = new MapGenerator()
const mapdata = [{page:'Home', link: 'index.html', children:[
	{page:'1',link: '1.html',children:[
		{page:'1-1',link:'1-1.html',children:null},
		{page:'1-2',link:'1-2.html',children:[
			{page:'1-2-1', link: '1-2-1.html', children:null},
			{page:'1-2-2', link: '1-2-2.html', children:null},
			{page:'1-2-3', link: '1-2-3.html', children:null}
		]}
	]},
	{page:'2',link:'2.html',children:null},
	{page:'3',link:'3.html',children:null}
]}]
			
mg.addMap(mapdata)

const linuxStructure = [{page:'/', children:[
	{page:'bin/',children:null},
	{page:'dev/',children:null},
	{page:'etc/',children:null},
	{page:'usr/',children:[
		{page:'bin/',children:null},
		{page:'man/',children:null},
		{page:'lib/',children:null},
		{page:'local/',children:null},
		{page:'share/',children:null}
	]},
	{page:'home/',children:null},
	{page:'lib/',children:null},
	{page:'sbin/',children:null},
	{page:'tmp/',children:null},
	{page:'var/',children:[
		{page:'log/',children:null},
		{page:'lock/',children:null},
		{page:'tmp/',children:null}
	]}
]}]

mg.addTree(linuxStructure, 'textTree')

const primateStructure = [{page:'primates', children:[
	{page:'Haplorhines',children:[
		{page:'Tarsioidea', link: 'img/tarsioidea.jpg', children: null},
		{page: 'Anthropoidea', children: [
			{page: 'Platyrrhini', children:[
				{page:'Pitheciidae', link:'img/pitheciidae.jpg',children:null},
				{page:'Cebidae',link:'img/cebidae.jpg',children:null},
				{page:'Atelidae',link:'img/atelidae.jpg',children:null}
			]},
			{page:'Catarrhini',children:[
				{page:'Cercopithecoidea',children:[
					{page:'Cercopithecinae',link:'img/cercopithecinae.jpg',children:null},
					{page:'Colobinae',link:'img/colobinae.jpg', children:null}
				]},
				{page:'Hominoidea',link:'img/hominoidea.jpg',children:null}
			]}
		]}
	]},
	{page:'Strepsirhini',children:[
		{page:'Loriformes', children:[
			{page:'Galagida',link:'img/galagida.jpg',children:null},
			{page:'Loridae',link:'img/loridae.jpg',children:null}
		]},
		{page:'Lemuriformes',link:'img/lemuriformes.jpg',children:null}
	]},
]}]
mg.addTree(primateStructure, 'pictureTree')

