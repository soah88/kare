$(document).ready(function(){
    asideFixed(".detailContainer > div:first-of-type aside");
});

function asideFixed(target){
    var position=$(target).offset().top;

    $(window).scroll(function(){
        var windowVal=$(this).scrollTop();
        console.log(windowVal);
        var finHeightVal=$('.detailContainer > div:last-of-type').height();
        var wrapHeightVal=$('.detailContainer').height();
        var scrollTopVal=(wrapHeightVal-finHeightVal)-$(target).height()-position;
        
        if(windowVal>position){
            if(scrollTopVal+position>windowVal){
                $(target).css({
                    "position":"fixed",
                    "top":"130px"
                });
            }else{
                $(target).css({
                    "position":"absolute",
                    "top":scrollTopVal
                });
            }   
        }else{
            $(target).css({
                "position":"absolute",
                "top":"0px"
            });
        }
    });
}