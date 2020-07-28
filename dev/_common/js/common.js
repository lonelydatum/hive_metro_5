const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut
const date = new Date()
const tl = new TimelineMax({repeat:1, repeatDelay:2})

function lb(){
	
	tl.set(".frame1", {opacity:1})
	tl.from([".t1", ".t1a"], .3, {opacity:0})

	tl.to(".t1a", .3, {opacity:0}, "+=1.8")
	tl.from(".t1b", .3, {opacity:0})

	tl.to(".t1b", .3, {opacity:0}, "+=1")
	tl.from(".t1c", .3, {opacity:0})

	tl.to(".t1c", .3, {opacity:0}, "+=1")
	tl.from(".t1d", .3, {opacity:0})

	tl.to(".frame1", .3, {opacity:0}, "+=1")
	tl.to(".frame2", .3, {opacity:1})
	// tl.to(".frame1", .3, {opacity:0})

}


function bb(type="COMING_SOON"){

	const t2Time = type==="COMING_SOON" ? 1 : .6

	tl.set(".frame1", {opacity:1})
	tl.from(".t1", .3, {opacity:0})
	tl.to(".t1", .3, {opacity:0}, `+=1.8`)

	tl.from([".t2", ".t2a"], .3, {opacity:0})
	// tl.from(".t2a", .3, {opacity:0}, `+=${t2Time}`)
	tl.to(".t2a", .3, {opacity:0}, "+=2.7")
	tl.from(".t2b", .3, {opacity:0})
}


function dbb(type="COMING_SOON"){
	const t2Time = type==="COMING_SOON" ? 1 : .6
	
	tl.set(".frame1", {opacity:1})

	const delay = 2
	const time = .5
	
	tl.add("f1")
	tl.to(".bg1", time, {opacity:1}, "f1")
	tl.to([".bg2", ".bg3"], time, {opacity:0}, "f1")

	tl.add("f2", `+=${delay}`)
	tl.to(".bg2", time, {opacity:1}, "f2")
	tl.to([".bg1", ".bg3"], time, {opacity:0}, "f2")

	tl.add("f3", `+=${delay}`)
	tl.to(".bg3", time, {opacity:1}, "f3")
	tl.to([".bg1", ".bg2"], time, {opacity:0}, "f3")
	

	
}



export {size, bb, dbb, lb}