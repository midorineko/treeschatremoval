var readyStateCheckInterval = setInterval(function() {
	// clearInterval(readyStateCheckInterval);

	var d = document.getElementsByClassName("stream-component");
	d=d[0]
	d.style.cssText += 'position:absolute !important';
	d.style.cssText += 'width:100% !important';
	d.style.cssText += 'height:100% !important';
	d.style.cssText += 'z-index:100 !important';
	var x = document.getElementsByClassName("chat-component");
	x=x[0]
	x.style.cssText = 'z-index:-1 !important';
	x.style.cssText += 'display:none !important';

}, 20);
