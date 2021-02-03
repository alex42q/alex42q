// $(".showPosts__btnLike").each(function(){
//     $(this).on("click", function(){
//     })
// })

$(".postId").each(function(){
    $(this).on("click", function(){
        console.log(this)
        $.ajax({
            url:"/likes",
            type:"POST",
            dataType:"json",       
            data:{
                postId:$(this).val(),
            }
        })
    })
})

$(".like").each(function(){
    $(this).on("click", function(){
        $(this).val()
    })
})





