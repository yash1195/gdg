

var fixmeTop;
var footTop;
var pastEventsHeight;
var winHeight;

$(document).ready(function(){
	//TO START THE STELLAR FRAMEWORK
	$(window).stellar();
	fixmeTop = $('.events-fixed').offset().top;       // get initial position of the element
    footTop = $('.team-head').offset().top;
    pastEventsHeight = $('.past-events').offset().top;
    winHeight = $(window).height();
    console.log(winHeight);
    //console.log(pastEventsHeight);
});


// function easeOut(){
//     $('.events-fixed-sticky').animate({
//         opacity:0
//     },300);
// }


$(window).scroll(function() {                  // assign scroll event listener
    var currentScroll = $(window).scrollTop(); // get current position    

    var tmp = footTop - winHeight;

    if (currentScroll > tmp || currentScroll < fixmeTop)
    {
        
        $('.events-fixed-sticky').css({                      // scroll to that element or below it
            'display': 'none'
        });
    }
    else if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.events-fixed-sticky').css({                      // scroll to that element or below it
            'display': 'block'
        });
    }

});

$(document).on('click','.chevron1',function(){});

$(document).on('click','#wtm-button',function(){
    location.href = "https://www.facebook.com/Women-Techmakers-1602378576670289/";
});