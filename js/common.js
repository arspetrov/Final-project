/**
 * Created by Anna on 23.04.2016.
 */
$(document).ready(function() {

    $(".enterOrRegButton ").click(function() {
        $(this).next().slideToggle();
    });
    $(".mainMenueButton").click(function() {
        $(".main_mnu ul").slideToggle();
    });
    
    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();


    //Каруселька
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items : 4,
        autoHeight : true
    });
    owl.on("mousewheel", ".owl-wrapper", function (e) {
        if (e.deltaY > 0) {
            owl.trigger("owl.prev");
        } else {
            owl.trigger("owl.next");
        }
        e.preventDefault();
    });
    $(".btnNext").click(function() {
        owl.trigger("owl.next");
    });
    $(".btnPrev").click(function() {
        owl.trigger("owl.prev");
    });

    //Кнопка "Наверх"
    $("#top").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#callback").submit(function() {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("#callback").serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });

});