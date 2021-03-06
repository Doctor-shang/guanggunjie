var canvas = document.getElementById('mycanvas'); //获取dom
var context = canvas.getContext('2d'); //返回一个用于在画布上绘图的环境



context.beginPath(); //起始一条路径，或重置当前路径
context.moveTo(50,50); //把路径移动到画布中的指定点，不创建线条
context.arc(50,50,50,0+1.5*Math.PI,2*Math.PI+1.5*Math.PI,false);
//arc (圆心坐标x,圆心坐标y,半径,开始角度,结束角度,画的方向顺时针trueor逆时针false)
context.closePath(); //创建从当前点回到起始点的路径
context.fillStyle='#fff'; //属性设置或返回用于填充绘画的颜色、渐变或模式。
context.fill(); //填充当前的路径      

function drawCircle(pi) {
    context.beginPath(); //起始一条路径，或重置当前路径
    context.moveTo(50,50); //把路径移动到画布中的指定点，不创建线条
    context.arc(50,50,50, 0+1.5*Math.PI, 1.5*Math.PI-pi*Math.PI, true);
    //arc (圆心坐标x,圆心坐标y,半径,开始角度,结束角度,画的方向顺时针trueor逆时针false)
    context.closePath(); //创建从当前点回到起始点的路径
    context.fillStyle='#ffa9ad'; //属性设置或返回用于填充绘画的颜色、渐变或模式。
    context.fill(); //填充当前的路径
}
drawCircle(0);

// 加载图片缓存
// var pics = ['http://mat1.gtimg.com/yslp/guanggunjie/css/share.png','http://mat1.gtimg.com/yslp/guanggunjie/css/entitle.png','http://mat1.gtimg.com/yslp/guanggunjie/css/hand.png','http://mat1.gtimg.com/yslp/guanggunjie/css/hand_finger.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_avatar0.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_avatar1.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_avatar2.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_avatar4.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_avatar5.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_avatar6.png','http://mat1.gtimg.com/yslp/guanggunjie/css/home_shake_text.png','http://mat1.gtimg.com/yslp/guanggunjie/css/loading.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer0.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer1.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer2.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer3.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer4.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_answer6.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar_bg.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar_bg_1.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar_bg_2.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar0.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar1.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar2.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar3.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar4.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_avatar6.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_btn.png','http://mat1.gtimg.com/yslp/guanggunjie/css/result_title.png','http://mat1.gtimg.com/yslp/guanggunjie/css/shake_tips.png','http://mat1.gtimg.com/yslp/guanggunjie/css/share.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share.png','http://mat1.gtimg.com/yslp/guanggunjie/css/subtitle.png','http://mat1.gtimg.com/yslp/guanggunjie/css/title.png','http://mat1.gtimg.com/yslp/guanggunjie/css/yue.png','http://mat1.gtimg.com/yslp/guanggunjie/css/share0.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share1.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share2.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share3.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share4.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share5.jpg','http://mat1.gtimg.com/yslp/guanggunjie/css/share6.jpg']
// var pics = ['img/entitle.png','img/hand.png','img/hand_finger.png','img/home_avatar0.png','img/home_avatar1.png','img/home_avatar2.png','img/home_avatar3.png','img/home_avatar4.png','img/home_avatar5.png','img/home_avatar6.png','img/home_shake_text.png','img/loading.png','img/result_answer.png','img/result_answer0.png','img/result_answer1.png','img/result_answer2.png','img/result_answer3.png','img/result_answer4.png','img/result_answer6.png','img/result_avatar.png','img/result_avatar_bg.png','img/result_avatar_bg_1.png','img/result_avatar_bg_2.png','img/result_avatar0.png','img/result_avatar1.png','img/result_avatar2.png','img/result_avatar3.png','img/result_avatar4.png','img/result_avatar6.png','img/result_btn.png','img/result_text.png','img/result_text0.png','img/result_text1.png','img/result_text2.png','img/result_text3.png','img/result_text4.png','img/result_text6.png','img/result_title.png','img/shake_tips.png','img/share.jpg','img/share.png','img/share0.jpg','img/share1.jpg','img/share2.jpg','img/share3.jpg','img/share4.jpg','img/share5.jpg','img/share6.jpg','img/subtitle.png','img/title.png','img/yue.png'];
var pics = ["../../public/img/entitle.png","../../public/img/hand.png","../../public/img/hand_finger.png","../../public/img/home_avatar0.png","../../public/img/home_avatar1.png","../../public/img/home_avatar2.png","../../public/img/home_avatar3.png","../../public/img/home_avatar4.png","../../public/img/home_avatar5.png","../../public/img/home_avatar6.png","../../public/img/home_shake_text.png","../../public/img/loading.png","../../public/img/result_answer.png","../../public/img/result_answer0.png","../../public/img/result_answer1.png","../../public/img/result_answer2.png","../../public/img/result_answer3.png","../../public/img/result_answer4.png","../../public/img/result_answer6.png","../../public/img/result_avatar.png","../../public/img/result_avatar_bg.png","../../public/img/result_avatar_bg_1.png","../../public/img/result_avatar_bg_2.png","../../public/img/result_avatar0.png","../../public/img/result_avatar1.png","../../public/img/result_avatar2.png","../../public/img/result_avatar3.png","../../public/img/result_avatar4.png","../../public/img/result_avatar6.png","../../public/img/result_btn.png","../../public/img/result_text.png","../../public/img/result_text0.png","../../public/img/result_text1.png","../../public/img/result_text2.png","../../public/img/result_text3.png","../../public/img/result_text4.png","../../public/img/result_text6.png","../../public/img/result_title.png","../../public/img/shake_tips.png","../../public/img/share.jpg","../../public/img/share.png","../../public/img/share0.jpg","../../public/img/share1.jpg","../../public/img/share2.jpg","../../public/img/share3.jpg","../../public/img/share4.jpg","../../public/img/share5.jpg","../../public/img/share6.jpg","../../public/img/subtitle.png","../../public/img/title.png","../../public/img/yue.png"]

var index = 0;
var pics_length = pics.length;

var count = 7


function donghua() {
    $('.home .title').velocity('callout.bounce',{
        complete: function () {
            $('.subtitle').velocity('callout.flash',{
                complete: function () {
                    $('.entitle').velocity('transition.perspectiveDownIn',{
                        complete:function () {
                            $('.hand-warp').show();
                            $('.home-shake-text').show();
                            window.addEventListener('shake',function () {
                                $('.home').hide();
                                //随机出现结果
                                var random = Math.floor(Math.random()*count);
                                var $t = $('.result .item:not(".noshow")').eq(random)
                                $t.show().siblings().hide();
                                //加noshow防止重复
                                $t.addClass('noshow')
                                count--;
                                //循环完一遍以后,重新循环
                                if (count == 0) {
                                    count = 7;
                                    $('.result .item').removeClass('noshow')
                                }
                                $('.result').show(function () {
                                    $('.avater-wrap').velocity({'rotateY':'3600deg'},{'duration':3000,
                                        complete:function () {
                                            $('.wenhao').velocity('transition.expandOut',{
                                                complete:function(){
                                                    $('.avater').velocity('transition.expandIn',{display:'block'});
                                                    $('.answer').velocity('transition.bounceIn');
                                                }
                                            })
                                        }
                                    })
                                })
                            })
                        }
                    });
                },
                display: 'block'
            });
        },
        display: 'block'
    });
}

for (let i = 0; i < pics_length; i++) {
    var img = new Image();
    img.src = pics[i];
    img.onload = function () {
        index++;
        var percent = Math.round(index*100/pics_length);
        console.log(percent);
        drawCircle(percent/50);
        $('.loading-text').text(percent+'%');
        if (percent == 100) {
            $('.loading').hide();
            $('.home').show(donghua())
        }
    }
}

// var i=0;
// while (i < pics.length) {
//     var img = new Image();
//     img.src = pics[i];
//     img.onload = function () {
//         // debugger

//         // console.log(index);
//         index++;
//         var percent = Math.round(index*100/pics_length);
//         drawCircle(percent/50);
//         $('.loading-text').text(percent+'%');
//         if (percent == 100) {
//             $('.loading').hide();
//             $('.home').show(donghua())
//         }
//     }
//     i++;
// }

var Shake = {
    main:function () {
        // console.log(1112);
    },
    handleEvent:function (e) {
        var shakeevent = new Event('shake', {'bubbles':true, 'cancelable':false});
        dispatchEvent(shakeevent);
        this.main();
        // console.log(e);
    }
}
addEventListener('click', Shake, false);
// addEventListener('shake', function () {
//     // console.log('22222');
//     $('.home').hide();
//     $('.result').show()
// });

// 现场演示new函数变对象
// function fruit() {
// }
// var apple = new fruit();
// apple.color = 'red';
// console.log(apple)