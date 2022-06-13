/*功能列手風琴效果*/
function accordion(v) {
    var item = $('#' + v);
    var icon = $('#icon_' + v);

    if (item.attr('class') == "_hide") {
        item.removeClass("_hide");
        item.addClass("_show");
        icon.removeClass("icon_up");
        icon.addClass("icon_down");
    } else {
        item.removeClass("_show");
        item.addClass("_hide");
        icon.removeClass("icon_down");
        icon.addClass("icon_up");
    }
}

//自動輪播
$(function() {
    self.setInterval("ChangeSlideShow();", 1000000);
})

function ChangeSlideShow() {
    var next;
    var count = 0;;
    $(".carousel-indicators li").each(function() {
        if ($(this).attr("class").indexOf("active") >= 0) {
            next = parseInt($(this).attr("data-slide-to")) + 2;
        }
        count++;
    });
    next = next > count ? 1 : next;
    $(".carousel-" + next).click();
}

function TabSlideShow(e, id, next, total) {
    if (e.keyCode == 9) {
        if (next + 1 <= total) {
            $(".carousel-" + (next + 1)).click();
        }
    }
    if (e.keyCode == 13) {
        if (id > 0) {
            location.href = "information/Detail.aspx?id=" + id;
        }
    }
}

/*alert*/
function MyAlert(v) {
    bootbox.alert({
        message: v,
        buttons: {
            ok: {
                label: '確認',
                className: "btn_submit"
            }
        }
    });
}

/*confirm*/
function MyConfirm(sender, msg) {
    if ($(sender).attr("confirmed") == "true") { return true; }

    bootbox.confirm(msg, function(confirmed) {
        if (confirmed) {
            $(sender).attr("confirmed", confirmed).trigger("click");
        }
    });

    return false;
}

/*彈跳視窗自適應*/
function DialogResponse(v) {
    var item = v;
    var _width = parseInt($(window).width() - 50);
    var _maxWidth = parseInt(item.dialog("option", "maxWidth"));
    var tWidth = _width > _maxWidth ? _maxWidth : _width;
    item.css("width", tWidth);
    item.parent().css("width", tWidth);
    item.parent().css("left", ($(window).width() - tWidth) / 2);
}

/*欄位必填提示*/
function EmptyCheck() {
    var is_valid = true;
    $(".prompt").remove();
    $(".empty_prompt").each(function() {
        $(this).css("border", "");
        if ($(this).val().trim() == "") {
            $(this).css("border", "1.5px solid red");
            $(this).after("<span class=\"prompt\">" + stripHTML($(this).attr("prompt")) + "<span>")
            is_valid = false;
        }
    })
    return is_valid;
}

/*過濾特殊字元*/
function stripHTML(input) {
    var s = '';
    if (typeof(input) == 'string') {
        var s = input.replace(/(<([^>]+)>)/ig, "");
    }
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;|{}【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < s.length; i++) {
        rs = rs + s.substr(i, 1).replace(pattern, '');
    }
    return rs;
}

$(document).ready(function(e) {
    new WOW().init();
    $(".animation_btn ")
        .mousemove(function() {

            $(this).siblings().find(".banner_img").addClass("on"); //其他按鈕透明度降低
        })
        .focus(function() {

            $(this).siblings().find(".banner_img").addClass("on"); //其他按鈕透明度降低
        })
        .focusout(function() {

            $(this).siblings().find(".banner_img").removeClass("on"); //其他按鈕透明度降低
        })
        .mouseout(function() {

            $(this).siblings().find(".banner_img").removeClass("on"); //其他按鈕透明度降低
        })

});
$(window).scroll(function() {
    var winWidth = $(window).width(),
        topWindow = $(window).scrollTop();
    if (topWindow > 0 && winWidth > 941) {
        $('header').addClass("small animated fadeInDown");
    } else {
        $('header').removeClass("small animated fadeInDown ");
    }
});


$(window).on("load", function() {
    $(".nbs-flexisel-ul").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }
    });
});