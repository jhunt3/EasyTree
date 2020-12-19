/* JS Library usage examples */
"use strict";
log('----------')
log('SCRIPT.JS')


const mg = new MapGenerator()

const mapdata = [{page:'Home', link: 'index.html', children:[
	{page:'Getting Started',link: 'gettingstarted.html'},
	{page:'API',link:'api.html'},
	{page:'Examples',link:'examples.html'}
]}]
			
mg.addMap(mapdata)

const linuxStructure = [{page:'/', children:[
	{page:'bin/'},
	{page:'dev/'},
	{page:'etc/'},
	{page:'usr/',children:[
		{page:'bin/'},
		{page:'man/'},
		{page:'lib/'},
		{page:'local/'},
		{page:'share/'}
	]},
	{page:'home/'},
	{page:'lib/'},
	{page:'sbin/'},
	{page:'tmp/'},
	{page:'var/',children:[
		{page:'log/'},
		{page:'lock/'},
		{page:'tmp/'}
	]}
]}]

mg.addTree(linuxStructure, 'textTree')

const primateStructure = [{page:'Primates', children:[
	{page:'Haplorhines',children:[
		{page:'Tarsioidea', link: 'img/tarsioidea.jpg'},
		{page: 'Anthropoidea', children: [
			{page: 'Platyrrhini', children:[
				{page:'Pitheciidae', link:'img/pitheciidae.jpg'},
				{page:'Cebidae',link:'img/cebidae.jpg'},
				{page:'Atelidae',link:'img/atelidae.jpg'}
			]},
			{page:'Catarrhini',children:[
				{page:'Cercopithecoidea',children:[
					{page:'Cercopithecinae',link:'img/cercopithecinae.jpg'},
					{page:'Colobinae',link:'img/colobinae.jpg'}
				]},
				{page:'Hominoidea',link:'img/hominoidea.jpg'}
			]}
		]}
	]},
	{page:'Strepsirhini',children:[
		{page:'Loriformes', children:[
			{page:'Galagida',link:'img/galagida.jpg'},
			{page:'Loridae',link:'img/loridae.jpg'}
		]},
		{page:'Lemuriformes',link:'img/lemuriformes.jpg'}
	]},
]}]

mg.addTree(primateStructure, 'pictureTree')



