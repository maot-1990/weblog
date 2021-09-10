// 绑定表情
$('.face-icon').sinaEmotion($('.comment_area'));

function leave(obj, articleId, replyId) {
    let commentSay = $('.comment_area').val();
    if (commentSay == '') {
        alert("请输入内容");
        return;
    }
    commentSay = encodeURIComponent(commentSay);

    $.ajax({
        type: "get",
        dataType: "json",
        url: "/article-leave",
        data: "msg=" + commentSay + "&articleId=" + articleId + "&replyId=" + replyId,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            if (replyId == "") {
                $('#info-show ul').prepend(commentInsert(data.data));
                $('.comment_area').val("");
                $("#infocommentnumarea").html(parseInt($("#infocommentnumarea").html()) + 1)
            }
            alert("評論成功！")
        }
    })
}
function commentInsert(data) {
    let html = '';
    html = '<li>';
    html += '<div class="head-face">';
    if (data.headImg == '' || data.headImg == null) {
        html += '<img src="/img/img57.jpg" />';
    } else {
        html += '<img src="/show-img/' + data.headImg + '" />';
    }
    html += '</div>';
    html += '<div class="reply-cont">';
    html += '<p class="username">' + data.nickName + '</p>';
    html += '<p class="comment-body comment-face">' + analyticEmotion(data.msg) + '</p>';
    html += '<p class="comment-footer"><span>' + data.createdAt + '</span>　<a>回复</a></p>';
    html += '</div>';
    html += '</li>';
    return html;
}

function hasLeaveMsgMore() {
    let hasMoreIndex = $('#hasMoreIndex').val();
    let articleId = $('#articleId').val();
    $.ajax({
        type: "get",
        dataType: "json",
        url: "/article-leave/has-more",
        data: 'currentIndex=' + (parseInt(hasMoreIndex) + 1) + '&articleId=' + articleId,
        contentType: "application/json;charset=utf-8",
        success: function (data) {

            if (data.items.length == 0) {
                return;
            }
            for (let i = 0; i < data.items.length; i++) {
                $('#info-show ul').append(commentInsert(data.items[i].parent));
            }
            $("#hasMoreIndex").val(data.currentPage);
        }
    })
}