const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut


function start(type="COMING_SOON"){
	const t2Time = type==="COMING_SOON" ? 1 : .6
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".t1", .3, {opacity:0})
	tl.to(".t1", .3, {opacity:0}, `+=1.8`)

	tl.from(".t2", .3, {opacity:0})
	tl.from(".t2a", .3, {opacity:0}, `+=${t2Time}`)
	tl.to(".t2a", .3, {opacity:0}, "+=3")
	tl.from(".t2b", .3, {opacity:0})
}






export {size, start}