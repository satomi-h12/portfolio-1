$(document).ready(function () {

    $(".slider").animate({
        opacity: "1"
    }, 2500);
    $(".mainText").animate({
        opacity: "1"
    }, 2500);

    $(window).scroll(function () {
        console.log($(this).scrollTop()); 
        if ($(this).scrollTop() > 250) {
            $(".newItem").animate({
                opacity: "1"
            }, 2500);
        }
        if ($(this).scrollTop() > 650) {
            $(".product").animate({
                opacity: "1"
            }, 2500)
        }
        if($(this).scrollTop() > 1300) {
            $(".saleItem").animate({
                opacity: "1"
            },2500)
        }
        if($(this).scrollTop() > 1500 ) {
            $(".about p").animate({
                opacity: "1"
            }, 3000)
        }
    });


    // start of hamburger menu
    $(".menuBox").click(function () {
        
        $(".hamburgerModal").fadeToggle("slow");
        if ($(".menuBox div").attr("class") === "close") {
            // console.log("a");
            $(".menuBox div").attr("class", "");
        } else {
            $(".menuBox div").attr("class", "close");
        }
    })
    // end of hamburger menu

    // start of user menu
    $(".userIcon").click(function () {
        $(".userModal").fadeIn("slow");
    });
    $(".closeButton").click(function () {
        $(".userModal").fadeOut("slow");
    })
    $("#signInBtn").click(function () {
        var signInEmail = $(".signIn form input:first");
        var signInPass = $(".signIn form input:last");
        if (signInEmail.val() === "" || signInPass.val() === "") {
            alert("Please fill out this form.")
        } else {
            alert("Your account was not found.");
        }
    });
    $("#createBtn").click(function () {
        var createName = $(".createAcount form input:first");
        var createEmail = $("#createEmail");
        var createPass = $(".createAcount form input:last");
        if (createName.val() === "" || createEmail.val() === "" || createPass.val() === "") {
            alert("Please fill out this form.")
        } else {
            alert("Sorry, your e-mail address is already used")
        }
    });


    // start of slider
    var slideWidth = $(".slider img").width(); 

    function moveNext() {
        // $(".slider").append($(".slider img:first"));
        // $(".slider").css({
        //     "left": -slideWidth,
        //     "left": "0"
        // });
        $(".slider").animate({
            "left": -slideWidth
        },"slow", function () {
            $(".slider").append($(".slider img:first"));
            $(".slider").css("left", "0");
        })
    };
    function movePrev() {
        $(".slider").prepend($(".slider img:last"));
        $(".slider").css({
            "left": -slideWidth,
            "left": 0
        });
        // $(".slider").prepend($(".slider img:last")).after(function () {
        //     $('.slider').animate({
        //         "left": +slideWidth
        //     },"fast", function () {
        //             $(".slider").css("left", "0");
        //             // clicked = false;
        //     })
        // })
        // $(".slider").animate({
        //     "left": +slideWidth
        // }, function () {
        //     $(".slider").css("left", "0");
        // })
    }
    $("#nextButton").click(function () {
        moveNext();
    });

    $("#prevButton").click(function () {
        movePrev();
    });

    setInterval(function () {
        moveNext(); 
    }, 4000);

    // $('.slider').after(function () {
    //     console.log('after');
    //     if (clicked) {
    //         console.log('animated');
    //         $('.slider').animate({
    //             "left": +slideWidth
    //         },3000, function () {
    //                 $(".slider").css("left", "0");
    //                 clicked = false;
    //         })
    //     }
    // })
    // $(".slider").after(function () {
    //     console.log("hello"); 
    //     $(this).animate({
    //         "left": +slideWidth
    //     }, function () {
    //         $(".slider").css("left", "0");
    //     })

    // });
    // end of slider



    // start of gallery
    var itemWidth = $(".itemHolder").width();
    var newItemCount = $(".newItem .outerBox .itemHolder").length;
    var currentItemCount = 0;

    $(".newItem .next").click(function () {
        currentItemCount++; 

        $(".newContentHolder").animate({
            "left": -itemWidth,
        },1000,function () {
            $(".newContentHolder").append($(".itemHolder:first"));  
            $(".newContentHolder").css("left", "0")
        })
        
        // $(".newContentHolder").animate({
        //     "left": -itemWidth,
        //     "left": "0"
        // }, function () {
        //     $(".newContentHolder").append($(".itemHolder:first"));    
        //     $(".newContentHolder").css({
                
        //     })
        // })

        // while(currentItemCount < newItemCount) {
        // if (currentItemCount < newItemCount) {
        //     $(".contentHolder").animate({
        //         "left": -itemWidth
        //     }, function () {
        //         "left", "0"
        //     }) 
        //     console.log(currentItemCount);  
        // }
        // }
    });
    
    $(".newItem .prev").click(function () {
        currentItemCount--;

        // $(".newContentHolder").prepend($(".newContentHolder .itemHolder:last"));

        // $(".newContentHolder").animate({
        //     "left": +itemWidth
        // }, "slow", function () {
        //     $(".newContentHolder").css({
        //         "left": "0"
        //     })
        // });

        $(".newContentHolder").prepend($(".newContentHolder .itemHolder:last"));
        $(".newContentHolder").css({
            "left": +itemWidth,
            "left": "0"
        })
    });


    $(".saleItem .next").click(function () {
        $(".saleContentHolder").animate({
            "left": -itemWidth
        }, 1000, function () {
            $(".saleContentHolder").append($(".saleContentHolder .itemHolder:first"));
            $(".saleContentHolder").css({
                "left": "0"
            })
        });
        // $(".saleContentHolder").append($(".saleContentHolder .itemHolder:first"));
        // $(".saleContentHolder").css({
        //     "left": -itemWidth,
        //     "left": "0"
        // })
    });
    $(".saleItem .prev").click(function () {
        $(".saleContentHolder").prepend($(".saleContentHolder .itemHolder:last"));
        $(".saleContentHolder").css({
            "left": +itemWidth,
            "left": "0"
        })
    })

    // page top button
    $("#topButton").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        // console.log("clicked");
    });
    // page top button    
});

// $(document).ready(function () {
    // var sliderWidth = $(".slider").width();
    // var sliderHeight = $(".slider img").height();
    // var sliderCount = $(".slider img").length;
    // var currentSliderCount = 1;
    // console.log(sliderWidth);
    // $("#nextButton").click(function () {
      
    //     console.log(currentSliderCount);
    //     if (currentSliderCount == sliderCount) {
            
    //         $(".slider").animate({
    //             right: "0"
    //         })
    //     } else {
    //         currentSliderCount++;
    //         $(".slider").animate({
    //             right: "+=" + sliderWidth,
    //             left: "0"
    //         }, "slow")
    //         console.log("a");
    //     }
    // });
    // $("#prevButton").click(function () {
    
    //     if (currentSliderCount === 1) {
    //         $(".slider").animate({
    //             right: "+=" + sliderWidth* (sliderCount-1)
    //         }, "slow")
    //         currentSliderCount = sliderCount
    //     } else {
    //         currentSliderCount--;
    //         $(".slider").animate({
    //             left: "+=" + sliderWidth
    //         })
    //     }
    //     console.log(currentSliderCount);
    // });

// });
