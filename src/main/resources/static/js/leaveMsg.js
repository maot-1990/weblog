// 绑定表情
$('.face-icon').sinaEmotion($('.comment_area'));

function leave(obj, articleId, replyId, replyName, replyType) {
    let commentSay = $(obj).parent().parent().prev().children("textarea").val();

    if (commentSay == '') {
        alert("请输入内容");
        return;
    }
    commentSay = encodeURIComponent(commentSay);

    $.ajax({
        type: "get",
        dataType: "json",
        url: "/article-leave",
        data: "msg=" + commentSay + "&articleId=" + articleId + "&replyId=" + replyId + "&replayNickName=" + replyName,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            if (replyId == "") {
                $('#info-show .first_show').prepend(commentInsert(data.data));
                // 更新评论总数
                $("#infocommentnumarea").html(parseInt($("#infocommentnumarea").html()) + 1)
            } else {
                if (replyType == 'first') {
                    $(obj).parent().parent().parent().next().find(".second_show").append(commentReplyInsert(data.data));
                } else {
                    $(obj).parent().parent().parent().parent().parent().append(commentReplyInsert(data.data));

                }
            }

            $('.comment_area').val("");
            $('.replay-window').hide(360);

            $('.face-icon').unbind("click");
            $('.face-icon').sinaEmotion($('.comment_area'));
            alert("評論成功！")
        }
    })
}
function commentInsert(data) {
    let html = '<li>';
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
    html += '<p class="comment-footer"><span>' + data.createdAt + '</span>　<a  onclick="showReply(this)">回复</a></p>';

    html += '<div class="content replay-window">';
    html += '<div class="cont-box">';
    html += '<textarea class="comment_area" placeholder="请遵守互联网相关规定，不要发布广告和违法内容…"></textarea>';
    html += '</div>';
    html += '<div class="tools-box">';
    html += '<div class="operator-box-btn"><span class="face-icon">☺</span>';
    html += '</div>';
    html += '<div class="submit-btn"><input type="button" onclick="leave(this,\'' + data.articleId + '\',\'' + data.id + '\',\'' + data.nickName + '\', \'first\');" value="回复"></div>';

    html += '</div>';
    html += '</div>';

    html += '<div class="reply-second">';
    html += '<ul class="second_show">';

    html += '</ul>';
    html += '</div>';

    html += '</div>';
    html += '</li>';
    return html;
}

function commentHasMoreInsert(data) {
    let html = '<li>';
    html += '<div class="head-face">';
    if (data.parent.headImg == '' || data.parent.headImg == null) {
        html += '<img src="/img/img57.jpg" />';
    } else {
        html += '<img src="/show-img/' + data.parent.headImg + '" />';
    }
    html += '</div>';
    html += '<div class="reply-cont">';
    html += '<p class="username">' + data.parent.nickName + '</p>';
    html += '<p class="comment-body comment-face">' + analyticEmotion(data.parent.msg) + '</p>';
    html += '<p class="comment-footer"><span>' + data.parent.createdAt + '</span>　<a  onclick="showReply(this)">回复</a></p>';

    html += '<div class="content replay-window">';
    html += '<div class="cont-box">';
    html += '<textarea class="comment_area" placeholder="请遵守互联网相关规定，不要发布广告和违法内容…"></textarea>';
    html += '</div>';
    html += '<div class="tools-box">';
    html += '<div class="operator-box-btn"><span class="face-icon">☺</span>';
    html += '</div>';
    html += '<div class="submit-btn"><input type="button" onclick="leave(this,\'' + data.parent.articleId + '\',\'' + data.parent.id + '\',\'' + data.parent.nickName + '\', \'first\');" value="回复"></div>';

    html += '</div>';
    html += '</div>';

    html += '<div class="reply-second">';
    html += '<ul class="second_show">';

    if (data.children != null && data.children.length > 0) {
        for (let i = 0; i < data.children.length; i++) {
            let childObj = data.children[i];
            html += '<li>';
            html += '<span class="username" style="display: inline;">' + childObj.nickName + '@' + childObj.replayNickName + '</span>';
            html += '<span class="comment-body comment-face"> ' + analyticEmotion(childObj.msg) + '</span>';
            html += '<p class="comment-footer"><span>' + childObj.createAtStr + '</span> <a onClick="showReply(this)">回复</a></p>';
            html += '<div class="content replay-window">';
            html += '<div class="cont-box">';
            html += '<textarea class="comment_area" placeholder="请遵守互联网相关规定，不要发布广告和违法内容…"></textarea>';
            html += '</div>';
            html += '<div class="tools-box">';
            html += '<div class="operator-box-btn"><span class="face-icon">☺</span>';
            html += '</div>';
            html += '<div class="submit-btn"><input type="button" onclick="leave(this,\'' + childObj.articleId + '\',\'' + childObj.replyId + '\',\'' + childObj.nickName + '\', \'second\');" value="回复"></div>';
            html += '</div>';
            html += '</div>';
            html += '</li>';
        }
    }

    html += '</ul>';
    html += '</div>';

    html += '</div>';
    html += '</li>';
    return html;
}


function commentReplyInsert(data) {
    let html = '<li>';
    html += '<span class="username" style="display: inline;">' + data.nickName + '：@' + data.replayNickName + '</span>';
    html += '<span class="comment-body comment-face"> ' + analyticEmotion(data.msg) + '</span>';
    html += '<p class="comment-footer"><span>' + data.createdAt + '</span>　<a  onclick="showReply(this)");">回复</a></p>';

    html += '<div class="content replay-window">';
    html += '<div class="cont-box">';
    html += '<textarea class="comment_area" placeholder="请遵守互联网相关规定，不要发布广告和违法内容…"></textarea>';
    html += '</div>';
    html += '<div class="tools-box">';
    html += '<div class="operator-box-btn"><span class="face-icon">☺</span>';
    html += '</div>';
    html += '<div class="submit-btn"><input type="button" onclick="leave(this,\'' + data.articleId + '\',\'' + data.replyId + '\',\'' + data.nickName + '\', \'second\');" value="回复"></div>';
    html += '</div>';
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
                $('#info-show .first_show').append(commentHasMoreInsert(data.items[i]));
            }
            $("#hasMoreIndex").val(data.currentPage);
            $('.face-icon').unbind("click");
            $('.face-icon').sinaEmotion($('.comment_area'));
        }
    })
}

function showReply(obj) {
    if ($(obj).parent().next().is(":hidden")) {
        $(".replay-window").hide();
        $(obj).parent().next().show(360);
    } else {
        $(obj).parent().next().hide(360);
    }
}