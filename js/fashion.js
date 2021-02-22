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
           $(".itemHolder img").animate({
                "opacity": 1
            },3000) 
        }
    });

    // start of hamburger menu
    $(".menuBox").click(function () {
        $(".hamburgerModal").fadeToggle("slow");
        if ($(".menuBox div").attr("class") === "close") {
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
        const signInEmail = $(".signIn form input:first");
        const signInPass = $(".signIn form input:last");
        if (signInEmail.val() === "" || signInPass.val() === "") {
            alert("Please fill out this form.")
        } else {
            alert("Your account was not found.");
        }
    });
    $("#createBtn").click(function () {
        const createName = $(".createAcount form input:first");
        const createEmail = $("#createEmail");
        const createPass = $(".createAcount form input:last");
        if (createName.val() === "" || createEmail.val() === "" || createPass.val() === "") {
            alert("Please fill out this form.")
        } else {
            alert("Sorry, your e-mail address is already used")
        }
    });
    // end of user menu

    // start of cart
    var itemNumber = $("#itemNumber"); //number on the cart icon
    var currentItemNumber = 0; //total number of items
    var orderContainer = $(".cart ul");

    // add to cart by pushing the button
    $(".cartButton").click(function (index) {
        // // info of gallery
        const container = $(this).siblings();
        const cartImage = container.find("img");
        const cartProductName = container.find("h5");
        const cartPrice = container.find("span");
        const id = container.attr("id");
        const existingLi = orderContainer.find("li[id='" + id + "']");

        if (existingLi.length === 0) {
            const li = "<li id='" + id + "'><img src='" + cartImage.attr("src") + "' /><div class='cartInfo'><span class='cartProduct'>" + cartProductName.text() + "</span><span class='cartPrice'>" + cartPrice.text() + "</span><span class='itemNumber'>1</span></div><button>" + "×" + "</button></li>";
            currentItemNumber++;
            itemNumber.text(currentItemNumber);
            //change the number to the actual number of items
            orderContainer.append(li);
            $(".cart p").hide();
            $("#checkout").show();
            
        } else {
            var quantity = existingLi.find(".itemNumber");
            var quantityBefore = Number(quantity.text());
            quantity.text(++quantityBefore);
        }    
    });
    // remove each item from the cart
    $('body').on("click", ".cart ul li button", function () {
        $(this).parent("li").fadeOut();
        currentItemNumber--;
        itemNumber.text(currentItemNumber);
        if (currentItemNumber === 0) {
            $(".cart p").show("slow");
            $("#checkout").hide("slow");
        }
    });
    // when the checkout button is clicked
    $("#checkout").click(function () {
        alert("Thank you for your order! We'll send an e-mail to you.");
        orderContainer.find("li").remove();
        currentItemNumber = 0;
        itemNumber.text(currentItemNumber);
        if(currentItemNumber === 0) {
            $(".cart p").show("slow");
            $("#checkout").hide("slow");
        }
    });
    // open & close the cart modal window
    $(".shoppingCart").click(function () {
        $(".cart").fadeIn("slow");
    });
    $(".cart button").click(function () {
        $(".cart").fadeOut("slow");
    });
    // end of cart


    // start of slider
    var slideWidth = $(".slider img").width();
    function moveNext() {
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
    // end of slider

    // start of setting
    $(".category h3").click(function () {
        $("#mainText").text($(this).text()); 
    });
    var allItems = $(".gallery .contentHolder .itemBox");
    var tops = $(".gallery .contentHolder .tops");
    var pants = $(".gallery .contentHolder .pants");
    var shoes = $(".gallery .contentHolder .shoes");
    $("#allProduct").click(function () {
        allItems.fadeIn("slow"); 
    });
    $("#tops").click(function () {
        tops.fadeIn("slow");
        pants.fadeOut("fast");
        shoes.fadeOut("fast");
    });
    $("#pants").click(function () {
        pants.fadeIn("slow");
        tops.fadeOut("fast");
        shoes.fadeOut("fast");
    });
    $("#shoes").click(function () {
        shoes.fadeIn("slow");
        tops.fadeOut("fast");
        pants.fadeOut("fast");
    });

    // changing layout of gallery
    $("#wideButton").click(function () {
        $(".contentHolder").addClass("twoColumn");
    });
    $("#smallButton").click(function () {
        $(".contentHolder").removeClass("twoColumn");
    });
    // end of setting

    // start of gallery
    var productName = $("#productName");
    var price = $("#price");
    var infoImage = $("#infoImage");
    $(".itemHolder").click(function () {
        $(".infoWindow").fadeIn();
        productName.text($(this).find("h5").text());
        price.text($(this).find("span").text());
        infoImage.attr("src", $(this).find("img").attr("src"))
    });
    $(".infoClose").click(function () {
        $(".infoWindow").fadeOut();
    });
    // end of gallery

    // page top button
    $("#topButton").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        // console.log("clicked");
    });
    // page top button    
});