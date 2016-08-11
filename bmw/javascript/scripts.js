$(document).ready(function(){
    $(".btn-cookies").click(function(){
        $(".Cookies").fadeOut(1000);
    });
});


$(document).ready(function(){
    $(".learn-more-text1").click(function(){
        $(".text1").slideToggle(500);
    });
     $(".learn-more-text2 , .learn-more-text3 , .learn-more-text4").click(function(){
        $(".text1").slideUp(500);
    });

});

$(document).ready(function(){
    $(".learn-more-text2").click(function(){
        $(".text2").slideToggle(500);
    });
     $(".learn-more-text1 , .learn-more-text3 , .learn-more-text4").click(function(){
        $(".text2").slideUp(500);
    });

});

$(document).ready(function(){
    $(".learn-more-text3").click(function(){
        $(".text3").slideToggle(500);
    });
     $(".learn-more-text1 , .learn-more-text2 , .learn-more-text4").click(function(){
        $(".text3").slideUp(500);
    });
});

$(document).ready(function(){
    $(".learn-more-text4").click(function(){
        $(".text4").slideToggle(500);
    });
     $(".learn-more-text1 , .learn-more-text2 , .learn-more-text3 ").click(function(){
        $(".text4").slideUp(500);
    });
});

$(document).ready(function(){
    $(".cookies-learn").click(function(){
        $(".learn-more-cookies").fadeIn(1000);
    });
      $(".close-cookies").click(function(){
        $(".learn-more-cookies").fadeOut(1000);
    });
});

$(document).ready(function(){
    $(".offer").click(function(){
        $(".dropdown-content1").slideToggle(500);
    });

     $(".dropdown-content1").mouseleave(function(){
        $(this).hide();
    });

       $(".inside , #all-models , .connect-us , .search").click(function(){
        $(".dropdown-content1").hide();
    }); 
});

$(document).ready(function(){
    $(".inside").click(function(){
        $(".dropdown-content2").slideToggle(500);
    });
     $(".dropdown-content2").mouseleave(function(){
        $(this).hide();
    });
      $(".offer , #all-models , .connect-us , .search").click(function(){
        $(".dropdown-content2").hide();
    });
});

$(document).ready(function(){
    $(".connect-us").click(function(){
        $(".dropdown-content3").slideToggle(500);
    });
     $(".dropdown-content3").mouseleave(function(){
        $(this).hide();
    });
      $(".offer , #all-models , .inside , .search").click(function(){
        $(".dropdown-content3").hide();
    });
});

$(document).ready(function(){
    $(".search").click(function(){
        $(".dropdown-content4").slideToggle(500);
    });
     $(".dropdown-content4").mouseleave(function(){
        $(this).hide();
    });
      $(".offer , #all-models , .inside , .connect-us").click(function(){
        $(".dropdown-content4").hide();
    });

       $(".btn-close").click(function(){
        $(".dropdown-content4").hide(1000);
    });
});

$(document).ready(function(){
    $(".corp-sell").click(function(){
        $(".corporate-sellers").show();
    });

      $(".corp-sell").click(function(){
        $(".Content , .allmodels , .special-offers").hide();
    });
});

$(document).ready(function(){
    $("#all-models").click(function(){
        $(".allmodels").show();
    });
    $("#all-models").click(function(){
        $(".Content , .corporate-sellers, .special-offers").hide();
    });
});

$(document).ready(function(){
    $(".spec-off").click(function(){
        $(".special-offers").show();
    });
    $(".spec-off").click(function(){
        $(".Content , .corporate-sellers , .allmodels").hide();
    });
});

jQuery(document).ready(function ($) {
            
            var jssor_1_SlideoTransitions = [
              [{b:5500,d:3000,o:-1,r:240,e:{r:2}}],
              [{b:-1,d:1,o:-1,c:{x:51.0,t:-51.0}},{b:0,d:1000,o:1,c:{x:-51.0,t:51.0},e:{o:7,c:{x:7,t:7}}}],
              [{b:-1,d:1,o:-1,sX:9,sY:9},{b:1000,d:1000,o:1,sX:-9,sY:-9,e:{sX:2,sY:2}}],
              [{b:-1,d:1,o:-1,r:-180,sX:9,sY:9},{b:2000,d:1000,o:1,r:180,sX:-9,sY:-9,e:{r:2,sX:2,sY:2}}],
              [{b:-1,d:1,o:-1},{b:3000,d:2000,y:180,o:1,e:{y:16}}],
              [{b:-1,d:1,o:-1,r:-150},{b:7500,d:1600,o:1,r:150,e:{r:3}}],
              [{b:10000,d:2000,x:-379,e:{x:7}}],
              [{b:10000,d:2000,x:-379,e:{x:7}}],
              [{b:-1,d:1,o:-1,r:288,sX:9,sY:9},{b:9100,d:900,x:-1400,y:-660,o:1,r:-288,sX:-9,sY:-9,e:{r:6}},{b:10000,d:1600,x:-200,o:-1,e:{x:16}}]
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: jssor_1_SlideoTransitions
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });
/* tanio kalechev */
