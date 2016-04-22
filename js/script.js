/*$('.dot').velocity({
  rotateZ: '360deg', 'font-color': 'blue'}, {duration: 1000	});

*/

/*$('.loader').velocity({
  perspective:[100, 50],
  roatetZ:[5, 0],
  perspective:[100, 50],
},
{duration: 800, delay: 3000, loop: 2
});



$('.dots').velocity({
  opacity:[
  function(){return Math.random()},
  function(){return Math.random() + 0.1}
  ],
},
{duration: 10000, delay: 3000, loop: 2
});
*/

/*$('.arrow-dot')
.velocity({

  translateX: "15px"
},
 {
  loop: true
});

$('.square-dot').velocity({
  rx: "7px",
}, {
  duration:300
});

$('.square-dot').velocity({
	
  opacity: 0.5,

  fill: "#D92229"
}, {
  loop: true
});*/


/*$('.dots').velocity({
  rotateZ: ["360deg"]
},
{loop:true
});
*/

$("rect")
    .velocity({ fill: "#D92229"})
    .delay(500)
    .velocity({ rx: "10px",width: "10px", height: "10px"})
    .delay(500)

$('.arrow-dot')
  .velocity({ stroke: "#ffffff", strokeWidth: "2px"})

    .delay(300)
    .velocity({ fill: "#ffffff"})

    .delay(500)

$('.arrow-dot')
  .velocity({ translateX: "15px"
},
{
  loop: true
});


$(".rotating-dot")
  .delay(500)
  .velocity({ x: "+=97.5", y: "-50" })
  .delay(100)
  .velocity({ x: "+=97.5", y: "50.5" })
  .delay(100)
  .velocity({ x: "-=97.5", y: "+155" })
  .delay(100)
  .velocity({ x: "-50", y: "50.5" })
  .delay(100)




