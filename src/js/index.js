


$(function () {

    //二级菜单
    $('.nav_item').each(function () {
        $(this).mouseenter(function () {
            // console.log(1)
            $(this).children('.nav_vfp').css('display', 'block');
        })
        $(this).mouseleave(function () {
            $(this).children('.nav_vfp').css('display', 'none');
        })
    })

    //中文
    $('.head_zw .h1').click(function () {
        // console.log(1)        
        $(this).siblings('.region').css('display', 'block');
    })
    $('head_zw .h1').mouseleave(function () {
        $(this).siblings('.region').css('display', 'none');
    })

    //遮罩
    $('.sha').each(function () {
        // console.log($('.sha'))
        $(this).mouseenter(function () {
            $(this).children('.shade').css('display', 'block');
        })
        $('.sha').each(function () {
            $(this).mouseleave(function () {
                $(this).children('.shade').css('display', 'none');
            })
        })
    })

    //下边框
    $('.product_list li').each(function () {
        // console.log($('.product_list li'))
        $(this).mouseenter(function () {
            $(this).css('border-bottom', '10px solid #ffb81c')
            $(this).css('transform', 'translateY(-10px)')
        })
        $(this).mouseleave(function () {
            $(this).css('border-bottom', '')
            $(this).css('transform', '')
        })
    })

    //微信扫码
    $('.smdl_img').mouseenter(function(){
        $(this).children('.wxtp').css({'width':'136' , 'left':'0'})
        $(this).children('.fdtp').css('opacity' , '1')
    })
    $('.smdl_img').mouseleave(function(){
        $(this).children('.wxtp').css({'width':'192px' , 'left':'59px'})
        $(this).children('.fdtp').css('opacity' , '0')
    })

    $('.content').css("background-image", "url(img/e.jpg)")


    $('.ner_sp a').mouseenter(function () {
        $(this).css('color', '#f8a120')
    })
    $('.ner_sp a').mouseleave(function () {
        $(this).css('color', '#000')
    })

    //扫码和账号切换
    $('.wx').click(function(){
        console.log($('.wx'))
        $(this).css('color' , '#f8a120')
        $(this).siblings('.no').css('color' , '#000')
        $(this).parent('.clearfix').siblings('.zhdl').css('display' , 'none')
        $(this).parent('.clearfix').siblings('.smdl').css('display' , 'inline')
    })
    $('.no').click(function(){
        console.log($('.no'))
        $(this).css('color' , '#f8a120')
        $(this).siblings('.wx').css('color' , '#000')
        $(this).parent('.clearfix').siblings('.smdl').css('display' , 'none')
        $(this).parent('.clearfix').siblings('.zhdl').css('display' , 'inline')
    })



    //注册
    //账号
    $(".reg_name").blur(function() {
        phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if($(this).val() == "") {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("手机号码不能为空!");
            return;
        } else if(!phoneReg.test($(this).val())) {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("请输入正确的手机号码!");
        } else {
            $(this).addClass("correctInput");
            $(this).next().empty();
        }
    });

    //密码
    $(".reg_pas").blur(function() {
        reg = /^[A-Za-z0-9]{6}$/
        if(reg.test($(this).val())==""){
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
        }else if(!reg.test($(this).val())) {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
        } else {
            $(this).removeClass("errorInput");
            $(this).next().empty();
            $(this).addClass("correctInput");
        }
    });

    //确认密码
    $(".pas_pas").blur(function() {
        var pwd1 = $('.reg_pas').val();
        var pwd2 = $(this).val();
        if(pwd1 == "") {
            $(this).removeClass("errorInput");
            $(this).next().html("确认密码不能为空！");
            $(this).addClass("errorInput");
            return;
        } else if(pwd1 != pwd2) {
            $(this).addClass("errorInput");
            $(this).removeClass("correctInput");
            $(this).next().css("display", "block").html("两次密码输入不一致！");
        } else {
            $(this).removeClass("errorInput");
            $(this).addClass("correctInput");
            $(this).next().empty();
        }
    });


    //贵宾邀请
    // $('.pas_input').click(function(){

    // })

    //登录
    //账号名
    $(".yonghu").blur(function() {
        accountReg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if($(this).val() == "" || $(this).val() == "请输入您的账号（即手机号）") {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("账号不能为空！");
            console.log("账号不能为空");
            return;
        } else if(!accountReg.test($(".box1 .account").val())) {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("账号不存在!");
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().empty();
        }
    });

    //密码
    $(".pass").blur(function() {
        reg = /^[A-Za-z0-9]{6}$/
        if($(this).val() == "") {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("密码不能为空！");
        } else if(!reg.test($(".password").val())) {
            $(this).addClass("errorInput");
            $(this).next().css("display", "block").html("请输入6位包含数字或字母的密码！");
        } else {
            $(this).addClass("correctInput");
            $(this).removeClass("errorInput");
            $(this).next().empty();
        }
    });

        //轮播
        $(function(){
            var index = 0;
            $('.zuo').click(function(){
                index --;
                if(index < 0){
                    $('.product_list').css('left',-1210 * 10);
                    index = 9;
                }
                slide();    
            }) 
            $('.you').click(function(){
                index ++;
                if(index > 9){
                    $('.product_list').css('left',0);
                    index = 1;
                }
                slide();
            })
            function slide(){
                $('.product_list').animate({
                    'left' : -1210 * index ,
                },1000)
            }
        })
        






})