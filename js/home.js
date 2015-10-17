

var fixmeTop;
var footTop;
var pastEventsHeight;
var winHeight;
$(document).ready(function(){
	//TO START THE STELLAR FRAMEWORK
	$(window).stellar();
	fixmeTop = $('.events-fixed').offset().top;       // get initial position of the element
    footTop = $('.foot').offset().top;
    pastEventsHeight = $('.past-events').offset().top;
    winHeight = $(window).height();
    console.log(winHeight);
    //console.log(pastEventsHeight);
});
// TO FIX EVENTS PAGE

$(window).scroll(function() {                  // assign scroll event listener
    var currentScroll = $(window).scrollTop(); // get current position    
    console.log(" window : "+currentScroll);

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