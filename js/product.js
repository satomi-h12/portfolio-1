$(document).ready(function () {

    $(".itemHolder img").animate({
        "opacity": 1
    },3000)

    // start of cart
    var itemNumber = $("#itemNumber"); //number on the cart icon
    var currentItemNumber = 0; //total number of items
    var orderContainer = $(".cart ul");

    // add to cart by pushing the button
    $(".cartButton").click(function (index) {
        // // info of gallery
        var container = $(this).siblings();
        var cartImage = container.find("img");
        var cartProductName = container.find("h5");
        var cartPrice = container.find("span");
        var id = container.attr("id");
        var existingLi = orderContainer.find("li[id='" + id + "']");

        if (existingLi.length === 0) {
            var li = "<li id='" + id + "'><img src='" + cartImage.attr("src") + "' /><div class='cartInfo'><span class='cartProduct'>" + cartProductName.text() + "</span><span class='cartPrice'>" + cartPrice.text() + "</span><span class='itemNumber'>1</span></div><button>" + "×" + "</button></li>";
        
            currentItemNumber++;
            itemNumber.text(currentItemNumber);;
            //change the number to the actual number of items
            orderContainer.append(li);
            // console.log(0);
            $(".cart p").hide();
            $("#checkout").show();
            
        } else {
            var qty = existingLi.find(".itemNumber");
            var qtyBefore = Number(qty.text());
            qty.text(++qtyBefore);
        }
        
        
            
    });

    $('body').on("click", ".cart ul li button", function () {
        $(this).parent("li").fadeOut();
        currentItemNumber--;
        itemNumber.text(currentItemNumber);
        if (currentItemNumber === 0) {
            $(".cart p").show("slow");
            $("#checkout").hide("slow");
        }
    });

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
        // openInfo();
        $(".infoWindow").fadeIn();
        productName.text($(this).find("h5").text());
        price.text($(this).find("span").text());
        infoImage.attr("src", $(this).find("img").attr("src"))
    });

    $(".infoClose").click(function () {
        $(".infoWindow").fadeOut();
    });
    // end of gallery
});
