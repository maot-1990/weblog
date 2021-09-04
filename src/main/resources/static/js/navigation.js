//头部
$(function() {
    $('.header').after('<div id="m-nav" class="m-nav"><div class="m-wrap"></div><div id="m-btn" class="m-btn"><i class="fa fa-remove"></i></div>');

    $('.sub-nav').before('<em class="dot"><i class="fa fa-angle-down"></i></em>');


    $('.container .mnav').appendTo('.m-wrap');
    $('.m-btn').click(function() {
        $('#m-nav').toggleClass("m-open").siblings("#m-nav").removeClass("m-open");
        $('#mask').slideToggle(0).siblings("#mask").slideToggle(0);
        $('body').toggleClass("open").siblings("body").removeClass("open");
    })

    $('.dot').click(function(e) {
        dropSwift($(this), '.sub-nav');
        e.stopPropagation();
    });

    function dropSwift(dom, drop) {
        dom.next().slideToggle();
        dom.parent().siblings().find('.fa').removeClass('open');
        dom.parent().siblings().find(drop).slideUp();
        var iconChevron = dom.find('.fa');
        if (iconChevron.hasClass('open')) {
            iconChevron.removeClass('open');
        } else {
            iconChevron.addClass('open');
        }
    }

    $('.nav-bar li').hover(function() {
            $(this).addClass('on');
        },
        function() {
            $(this).removeClass('on');
        });




    $('#mask').click(function() {
        $(this).hide();
        $('.search-bg').hide();
        $('#m-nav').removeClass("m-open");
        $('body').removeClass("open");
    });


});



//导航高亮
jQuery(document).ready(function($) {
    var datatype = $("#nav-box").attr("data-type");
    $(".nav>li").each(function() {
        try {
            var myid = $(this).attr("id");
            if ("index" == datatype) {
                if (myid == "nvabar-item-index") {
                    $("#nvabar-item-index").addClass("active");
                }
            } else if ("category" == datatype) {
                var infoid = $("#nav-box").attr("data-infoid");
                if (infoid != null) {
                    var b = infoid.split(' ');
                    for (var i = 0; i < b.length; i++) {
                        if (myid == "navbar-category-" + b[i]) {
                            $("#navbar-category-" + b[i] + "").addClass("active");
                        }
                    }
                }

            } else if ("article" == datatype) {
                var infoid = $("#nav-box").attr("data-infoid");
                if (infoid != null) {
                    var b = infoid.split(' ');
                    for (var i = 0; i < b.length; i++) {
                        if (myid == "navbar-category-" + b[i]) {
                            $("#navbar-category-" + b[i] + "").addClass("active");
                        }
                    }
                }
            } else if ("page" == datatype) {
                var infoid = $("#nav-box").attr("data-infoid");
                if (infoid != null) {
                    if (myid == "navbar-page-" + infoid) {
                        $("#navbar-page-" + infoid + "").addClass("active");
                    }
                }
            } else if ("tag" == datatype) {
                var infoid = $("#nav-box").attr("data-infoid");
                if (infoid != null) {
                    if (myid == "navbar-tag-" + infoid) {
                        $("#navbar-tag-" + infoid + "").addClass("active");
                    }
                }
            }
        } catch (E) {}
    });
    $("#nav-box").delegate("a", "click", function() {
        $(".nav>li").each(function() {
            $(this).removeClass("active");
        });
        if ($(this).closest("ul") != null && $(this).closest("ul").length != 0) {
            if ($(this).closest("ul").attr("id") == "munavber") {
                $(this).addClass("active");
            } else {
                $(this).closest("ul").closest("li").addClass("active");
            }
        }
    });
});