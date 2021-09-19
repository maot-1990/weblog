function search() {
    $('#hasMoreIndex').val("0");
    $('#hasMoreCategory').val("");
    hasMore(true);
    return false;
}

function category(category) {
    $('#hasMoreIndex').val("0");
    $('#hasMoreCategory').val(category);
    $('#searchKey').val("");
    hasMore(true);
}


function hasMore(isReplace) {
    if (isReplace == null) {
        isReplace = false;
    }
    var hasMoreIndex = $('#hasMoreIndex').val();
    var hasMoreCategory = $('#hasMoreCategory').val();
    var searchKey = $('#searchKey').val();
    var type = $('#hasMoreType').val();
    $.ajax({
        type: "get",
        dataType: "json",
        url: "/article/has-more",
        data: 'currentIndex=' + (parseInt(hasMoreIndex) + 1) + '&type=' + type + '&category=' + hasMoreCategory + '&searchKey=' + searchKey,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            var content = "";
            for (var i = 0; i < data.items.length; i++) {
                var obj = data.items[i];
                content += '<article class="post">';
                if (obj.imgPath != null && obj.imgPath != '') {
                    content += '<div class="post-img">'
                        +'<figure class="related-site-img"><a class="pic float-left" href="/article/show/' + obj.id + '"><img src="/show-img/' + obj.imgPath +'"></a></figure>'
                        +'<div class="mask-tags"> <a href="javascript:void(0)" onclick="category(\'' + obj.category + '\')"><span>' + obj.category + '</span></a> </div>'
                        +'</div>';
                }

                content +='<header>'
                    +'<h2 class="ellipsis"> <a href="/article/show/' + obj.id + '">' + obj.title + '</a> </h2>'
                    +'</header>'
                    +'<p class="post-text">' + obj.intro + '</p>'
                    +'<footer> <span class="author"><i class="fa fa-user fa-fw"></i>' + obj.author + '</span></span> <span class="time"><i class="fa fa-clock-o fa-fw"></i>' + obj.createAtStr + '</span></span> <span class="view"><i class="fa fa-eye fa-fw"></i>' + obj.readCount + '</span></span> <span class="comment"><i class="fa fa-comment-o fa-fw"></i><span>' + obj.leaveCount + '</span></span> </footer>'
                    +'</article>';

            }

            if (isReplace == true) {
                $("#article_content").html(content);
            } else {
                $("#article_content").append(content);
            }
            $('#hasMoreIndex').val(data.currentPage);

        }

    })
}