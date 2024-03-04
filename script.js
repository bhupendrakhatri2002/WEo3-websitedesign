function page1animation(){
    var tl1= gsap.timeline()
    tl1.from(".nav-left",{
        y:"-80px",
    })
    tl1.from(".nav-mid  h2",{
        y:"-80px",
        opacity:0,
    })
    tl1.from(".nav-right",{
        y:"-80px",
        opacity:0,
    })
    
    tl1.from(".page1 h1",{
        x:"1200px"
    })
    
    tl1.from(".page1 h2",{
        x:"-1200px"
    })
    tl1.from(".page1-left",{
        x:"-300px",
        opacity:0,
        sacle:0,
    })
    tl1.from(".page1-img img",{
        rotate:"360deg",
        opacity:0,
        sacle:0,
    })
    tl1.from(".page1-right p",{
        x:"300px",
        opacity:0,
        sacle:0,
    })
    tl1.from(".page1-right button",{
        x:"300px",
        opacity:0,
        sacle:0,
    })
}
page1animation()


function page2animation(){
    var tl2 =gsap.timeline({
        scrollTrigger:{
            scroller:"body",
            trigger:".page2",
            // markers:true,
            start:"top 30%",
            end:"top -10%",
            scrub:1,
            
        }
    })
    
    tl2.from(".page2 h1",{
       y:"-500px",
       opacity:0
    })
    
    tl2.from(".page2left h2",{
     x:"300px",
     opacity:0,
    })
    
    tl2.from(".page2left p",{
        x:"300px",
        opacity:0,
       })
    
    tl2.from(".page2left .rite",{
        x:"300px",
        opacity:0,
        stagger:.2,
       })
       tl2.from(".page2left button",{
        x:"300px",
        opacity:0,
       })
    tl2.from(".page2right img",{
        rotate:"360deg",
        scale:0,
        opacity:0
    })   
}
page2animation()
