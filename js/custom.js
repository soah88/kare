$(document).ready(function(){
    customizeSlider(".headCopySlider",true,"full",true,true,true,0);
    customizeSlider(".bestPrdSlider",false,"full",true,true,true,400);
    customizeSlider(".newPrdSlider",false,"full",true,true,true,800);
    quantityComponent(".cartContainer > ul li .numberComponent .countNumber1",".countMinus1",".countPlus1","#price1");
    quantityComponent(".cartContainer > ul li .numberComponent .countNumber2",".countMinus2",".countPlus2","#price2");
    quantityComponent(".cartContainer > ul li .numberComponent .countNumber3",".countMinus3",".countPlus3","#price3");
    quantityComponent(".mypageCartContainer > div ul li .numberComponent .countNumber1",".countMinus1",".countPlus1","#price4");
    quantityComponent(".mypageCartContainer > div ul li .numberComponent .countNumber2",".countMinus2",".countPlus2","#price5");
    quantityComponent(".mypageCartContainer > div ul li .numberComponent .countNumber3",".countMinus3",".countPlus3","#price6");
    tabMenu(".loginContainer ul li",".loginContainer .tabPage");
    openCloseControl("header div ul li:first-child input[type='button']");
    openCloseControl("header div ul li:last-child input[type='button']");
    openCloseControl(".detailContainer > div:first-of-type aside > div:last-of-type input:first-of-type");
    openCloseControl(".detailContainer > div:first-of-type aside > div:last-of-type input:nth-of-type(2)");
    openCloseControl(".detailContainer > div:first-of-type aside > div:last-of-type input:last-of-type");
    openCloseControl(".loginContainer #tab1 input[type='button']");
    headerFixed();
    productDel(".cartContainer > ul li > input.closeBtn");
    productDel(".mypageCartContainer > div ul li input.closeBtn");
    fnbControl("header nav ul > li");
    mobMenutoggle("header div ul li:last-of-type");
});

function customizeSlider(target,conVal,pagVal,autoVal,autoConVal,autoCombineVal,delayVal){
    $(target).bxSlider({
        controls: conVal,
        pagerType: pagVal,
        auto: autoVal,
        autoControls: autoConVal, 
        autoControlsCombine: autoCombineVal,
        touchEnabled: false,
        autoDelay: delayVal
    });
}

function quantityComponent(target,minus,plus,price){
    var orderField=$(target);
    var orderCount=$(orderField).val();
    var productPrice=Number($(price).val());
    var totalPrice=$(price);

    $(minus).click(function(){
        orderCount--;
        if(orderCount<=1){
            orderCount=1;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice*orderCount);
    });
    $(plus).click(function(){
        orderCount++;
        if(orderCount>=99){
            orderCount=99;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice*orderCount);
    });
}

function tabMenu(target,tabPage){
    $(target).click(function(){
        var activeTab=$(this).attr("data-tabNumb");

        $(target).removeClass("active");
        $(this).addClass("active");

        $(tabPage).removeClass("active");
        $("#"+activeTab).addClass("active");
    });
}

function openCloseControl(target){
    var dataPanel=null;
    var dataPopup=null;

    $(target).click(function(){
        dataPanel="#"+$(this).attr("data-panel");
        $(dataPanel).addClass("active");
        dataPopup="#"+$(this).attr("data-popup");
        $(dataPopup).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(dataPanel).removeClass("active");
        $(dataPopup).removeClass("active");
    });
}

function headerFixed(){
    var headerVal=$("header").offset().top+150;
    $(window).scroll(function(){
  	    var windowVal=$(this).scrollTop();

        if(headerVal<=windowVal){
          $("header").addClass("lock");
        }else{
          $("header").removeClass("lock");
        }
    })  
}

function productDel(target){
    $(target).click(function(){
        $(this).parent().css("display","none");
    });
}

function fnbControl(target){
    if(window.matchMedia("(max-width: 1279px)")){
        $(target).click(function(){       
            $(target).children("ol").removeClass("active");                
            $(this).children("ol").addClass("active");            
        });        
    }
}

function mobMenutoggle(target){
    $(target).click(function(){
        $(target).parent().addClass("active");

        $(".closeBtn").click(function(){
            $(target).parent().removeClass("active");
        });
    });
}
