(Update: Only works in Chrome)
<h2>Introduction</h2>
Library landing page: https://young-sierra-51618.herokuapp.com/
	<p>Welcome! Easy Tree is a web Javascript library that started off as a quick way for developers to add a more intuitive site navigation tool for users. It became apparent that this functionality could be broadened to help developers render a variety of interactive tree diagrams. <br/><br/>This site has a few pages:<br/>- Getting starting: provides a guide to what is required to use this library<br/>- API: describes in more detail how to use the library<br/>- Examples: provides 3 example use cases for this library
<h3>Description of Library</h3>
<p>This library generally allows developers to define any tree structure they would like, and for each node, include text and a site url or image link. With this, the library will automatically render a diagram of the tree in an overlay of the site.</p><br/>
<p>The rendered diagrams are made suitable for large tree structures with these features:<br/>- Scroll allows users to adjust zoom on the diagram<br/>- text size remains constant regardless of zoom<br/>- resource size scales with zoom to allow for only node text</p>
<h2>Getting Started</h2>	<div><p>To use this library you must include the <a href='easyTree.js'>Easy Tree</a> library along with <a href = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'>jQuery</a> in your project. There are three steps to rendering a tree diagram.</p></div>
<div><p>The first step, after including all the required files, is to declare an instance of the library like this:</p></div>
<div><img src='pub/img/declarelibrary.png'></div>

<div><p>The next step is to create a tree object similar to this: </p></div>
<div><img src='pub/img/sitestruct.png'></div>
<div><p>And finally you must call a function to render the object you defined:</p></div>
<div><img src = 'pub/img/addsitemap.png'></div>
<div><p>And that will create a button that will open the diagram when clicked. To get a better sense of what this looks like check out the examples page. For more details on using the library visit the API page.</p></div>
	<h2>API</h2>
	<div><p>To initialize the library you must declare an instance:</p></div>
<div><img src='pub/img/declarelibrary.png'></div>
<div><p>Once this is done there are three main interactions you can have with this library:</p></div>
<div><p>- Defining a tree structure to be rendered</p></div>
<div><p>- Rendering a tree as a site map diagram (function addMap)</p></div>
<div><p>- Rendering and linking a defined tree structure to an element click (function addTree)</p></div>
<div><h3>Defining a tree structure</h3></div>
<div><p>The library expects a list of nodes. There are 3 attributes a node can have:</p></div>
<div><p>1. page - this is the name of the node, and will appear in any rendered diagram</p></div>
<div><p>2. link (optional) - string link to an image or website</p></div>
<div><p>3. children (optional) - expects an array of node objects (leaf node indicated with null or no 'children' attribute)</p></div>
<div><p>Example node object:</p></div>

<div><img src='pub/img/example-node.png'></div>
<div><p>Example tree structure:</p></div>
	<div><img src='pub/img/sitestruct.png'></div>

<div><h3>addMap(struct) - Rendering as a Site Map</h3></div>
<div><p>Once a tree structure is defined, rendering a diagram is very straightforward.</p></div>
<div><p>If a defined tree structure (for instance in a variable named 'mapdata') is meant as a site navigation map with library instance (for instance named 'mg'), the following command will render a button in the top right corner of the page that will bring up the map in an overlay when clicked:</p></div>
<div><img src = 'pub/img/addsitemap.png'></div>
<div><h3>addTree(struct, elementID) - Link Render to HTML Element</h3></div>
<div><p>This command is if you would like to add a tree diagram within the sites contents.<br/>
	To do this you must also provide the HTML element ID of the element thatwill bring up the diagram when clicked. For instance, if we want to render a structure 'linuxStructure' when a user clicks on an html element with ID 'textTree', we would call the following: </p></div>
<div><img src = 'pub/img/addtree.png'></div>
<div><p>The rendered diagram will be given the name of the innerHTML of the linked button.</p></div>

