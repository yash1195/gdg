

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

$(document).on('click','#wtm-button',function(){
    location.href = "https://www.facebook.com/Women-Techmakers-1602378576670289/";
});

$(document).on('click','#subscribe-btn',function(){
    // get email id from form
    var data = {};
    data.email = $('#subscribe-input').val();
    var url = "http://www.iecse.xyz/api/subscribe-gdg";
    $.post(url,data,function(e){
        $('#subscribe-thankyou').css({
            'color':'#212121'
        });
    });

});
$(window).load(function(e){

    $('#loader').css({
          'display':'none'
    });
    $('.loader-overlay').animate({
        'opacity':'0'
    },2500);
});