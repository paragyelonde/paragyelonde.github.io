
	var isTouchDevice = 'ontouchstart' in document.documentElement;
var mobTip;
	var i,
	timer2;
	//functions
	var leftpokeAnimation,
	rightpokeAnimation,
	centerpokeAnimation1,
	centerpokeAnimation2,
	laugh1Animation,
	laugh2Animation,
	laugh3Animation,
	laugh4Animation,
	sunAnimation,
	mosquitoAnimation,
	musicAnimation,
	alarmAnimation,
	playAnimationMan;

	//textures
	var	steps = [], 
	snoreTextures = [],
	manTextures = [],
	manTextures2 = [],
	leftpokeTextures = [],
	leftpokeTextures2 = [],
	rightpokeTextures = [],
	rightpokeTextures2 = [],
	centerpokeTextures = [],
	centerpokeTextures2 = [],
	centerpokeTextures3 = [],
	laughTextures1 = [],
	laughTextures2 = [],
	laughTextures3 = [],
	laughTextures4 = [],
	sunTextures = [],
	mosquitoTextures = [],
	musicTextures = [],
	alarmTextures = [],
	i,
	man,
	snore,
	snore2,
	leftpoke,
	rightpoke,
	centerpoke,
	laughpoke,
	sun,
	centerAn,
	defAn;

	var turnMusic = false;
	//param
	var stage = new PIXI.Container();
	
	var width = 734;
	var height = 280;
	var renderer = new PIXI.CanvasRenderer(width, height, {transparent: true});
	
	var widthMan = 318;	
	var heightMan = 411;
	var stage2 = new PIXI.Container();
	var renderer2 = new PIXI.CanvasRenderer(widthMan, heightMan, {transparent: true});

	document.getElementById('final-man').appendChild(renderer2.view);


	//Texture frames
	function playAnimation(){
		//snoring
	  for (i = 0; i < 28; i++){
	    snore = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    snoreTextures.push(snore);
	  }
	  //left poke
	  for (i = 28; i < 33; i++){
	    leftpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    leftpokeTextures.push(leftpoke);
	  }
	  //right poke
	  for (i = 33; i < 38; i++){
	    rightpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    rightpokeTextures.push(rightpoke);
	  }
	  //center poke
	  for (i = 38; i < 43; i++){
	    centerpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    centerpokeTextures.push(centerpoke);
	  }
	  //left poke 2
	  for (i = 43; i < 48; i++){
	    leftpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    leftpokeTextures2.push(leftpoke);
	  }
	  //right poke
	  for (i = 48; i < 53; i++){
	    rightpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    rightpokeTextures2.push(rightpoke);
	  }
	  //center poke 2
	  for (i = 53; i < 58; i++){
	    centerpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    centerpokeTextures2.push(centerpoke);
	  }  
	  //center poke 3
	  for (i = 58; i < 63; i++){
	    centerpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    centerpokeTextures3.push(centerpoke);
	  }    
	  //laugh 1
	  for (i = 63; i < 70; i++){
	    laughpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    laughTextures1.push(laughpoke);
	  }
	  //laugh 2
	  for (i = 70; i < 77; i++){
	    laughpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    laughTextures2.push(laughpoke);
	  }
	  //laugh 3
	  for (i = 77; i < 84; i++){
	    laughpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    laughTextures3.push(laughpoke);
	  }
	  //laugh 4
	  for (i = 84; i < 91; i++){
	    laughpoke = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    laughTextures4.push(laughpoke);
	  }

	  //sun
	  for (i = 91; i < 96; i++){
	    sun = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    sunTextures.push(sun);
	  }
	  //mosquito
	  for (i = 96; i < 100; i++){
	    sun = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    mosquitoTextures.push(sun);
	  }
	  //music
	  for (i = 100; i < 104; i++){
	    sun = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    musicTextures.push(sun);
	  }

	  //alarm
	  for (i = 104; i < 110; i++){
	    sun = PIXI.Texture.fromFrame('web ' + (i+1) + '.png');
	    alarmTextures.push(sun);
	  }







		defaultAnimation();
	}

	//default Animation
	function defaultAnimation(){
	  snore = new PIXI.extras.AnimatedSprite(snoreTextures);
	 
	  snore.animationSpeed = 0.131;
	  snore.loop = true;

	  snore.position.x = width/2;
	  snore.position.y = height/2;
	  snore.anchor.x = 0.5;
	  snore.anchor.y = 0.5;

	  snore.play();
	  $("#snore-sound")[0].volume = 1;

	  if($(".relax-off").hasClass("playing")){	
	  	$("#snore-sound")[0].play();
		}

	  stage.addChild(snore);
	  requestAnimationFrame(animate);
	  defAn = true;

	}

		


	leftpokeAnimation = function(){//console.log(333)
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokeleft")[0].play();
		  }
			snore = new PIXI.extras.AnimatedSprite(leftpokeTextures);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}

	}

	leftpokeAnimation2 = function(){//console.log(333)
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokeleft2")[0].play();
		  }
			snore = new PIXI.extras.AnimatedSprite(leftpokeTextures2);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}

	}

	rightpokeAnimation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokeright")[0].play();
		  }
			snore = new PIXI.extras.AnimatedSprite(rightpokeTextures);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}
	rightpokeAnimation2 = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokeright2")[0].play();
		  }
			snore = new PIXI.extras.AnimatedSprite(rightpokeTextures2);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}
	centerpokeAnimation1 = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokecenter1")[0].play();
		  }
			snore = new PIXI.extras.AnimatedSprite(centerpokeTextures);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	centerpokeAnimation2 = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokecenter2")[0].play();
		  }

			snore = new PIXI.extras.AnimatedSprite(centerpokeTextures2);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	centerpokeAnimation3 = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#pokecenter2")[0].play();
		  }

			snore = new PIXI.extras.AnimatedSprite(centerpokeTextures3);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	laugh1Animation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#laugh1")[0].play();
		  }

			snore = new PIXI.extras.AnimatedSprite(laughTextures1);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}
	laugh2Animation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#laugh2")[0].play();
		  }

			snore = new PIXI.extras.AnimatedSprite(laughTextures2);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}
	laugh3Animation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#laugh3")[0].play();
		  }
			snore = new PIXI.extras.AnimatedSprite(laughTextures3);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	laugh4Animation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			if($(".relax-off").hasClass("playing")){
				$("#laugh4")[0].play();
		  }

			snore = new PIXI.extras.AnimatedSprite(laughTextures4);
		  snore.animationSpeed = 0.2;
		
			snore.loop = false;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	sunAnimation = function(){
		if(defAn){
			//alert(1);
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;

			snore = new PIXI.extras.AnimatedSprite(sunTextures);
			if($(".relax-off").hasClass("playing")){
				$("#sunanimationsound")[0].play();
		  }
			
		  snore.animationSpeed = 0.08;
		
			snore.loop = true;

		  snore.play();
		  
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);


		  setTimeout(function(){
				snore.loop = false;
		  },2000);

			setTimeout(function(){
		  	$("body").addClass("putOnMask");
		  	if($(".relax-off").hasClass("playing")){
					$("#move")[0].play();
			  }
			},1000);

			snore.onComplete = function(){			
				snore.destroy();

				stepsAnimation();
				$("#sunanimationsound")[0].pause();
				$("#sunanimationsound")[0].currentTime = 0;
				
		 	}
		}
	}

	mosquitoAnimation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			$("#snore-sound")[0].pause();
			$("#snore-sound")[0].currentTime = 0;
			snore = new PIXI.extras.AnimatedSprite(mosquitoTextures);
		  snore.animationSpeed = 0.2;
		
			snore.loop = true;
		  snore.play();
		  stage.addChild(snore);

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	musicAnimation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			snore = new PIXI.extras.AnimatedSprite(musicTextures);
		  snore.animationSpeed = 0.2;

			if($(".shake").hasClass("playing")){
				snore.loop = true;
				turnMusic = true;
			}else{
				snore.loop = false;
				turnMusic = false;
			}

			
			
		  snore.play();
		  stage.addChild(snore);



		 /* setTimeout(function(){
		  	if(jQuery("body").hasClass("play-shake")){
					
					alert(1)
				}

		  },6000);*/

		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}
	alarmAnimation = function(){
		if(defAn){
			snore.loop = false;
			//snore.onComplete = function(){
				snore.destroy();

				thisFunction();

			 	defAn = false;
			//}
		}else{
			thisFunction();
		}
		function thisFunction() {
			snore = new PIXI.extras.AnimatedSprite(alarmTextures);
		  snore.animationSpeed = 0.2;
		
			snore.loop = true;
		  snore.play();
		  stage.addChild(snore);

		  setTimeout(function(){
		  	if($("body").hasClass("play-alarm") || jQuery("body").hasClass("default")){
		  		snore.loop = false;
		  	}
		  },2000);


		  // start animating
		  requestAnimationFrame(animate);
			
			snore.onComplete = function(){
				snore.destroy();
				stepsAnimation();

		 	}
		}
	}

	function animate() {
	  renderer.render(stage);
	 
		requestAnimationFrame(animate);

	}
	

	var progres = true;
	function addSteps(addAnimation){

		steps.push(addAnimation);
		
		//console.log(steps);
		if(progres){
			stepsAnimation();
			progres = false;
		}
	}

	function stepsAnimation(){
		
		if(steps[0]){
			var fn = window[steps[0]];
			if(typeof fn === 'function') {

			  fn();
			}

			steps.splice(0, 1);

		}else{
			defaultAnimation();
			progres = true;
		}


	}	


	function playAnimationMan(){

			for (i = 0; i < 160; i++){
		    man = PIXI.Texture.fromFrame('man ' + (i+1) + '.png');
		    manTextures.push(man);
		  }

		  for (i = 30; i < 160; i++){
		    man = PIXI.Texture.fromFrame('man ' + (i+1) + '.png');
		    manTextures2.push(man);
		  }

		  man = new PIXI.extras.AnimatedSprite(manTextures);
		 	if(isTouchDevice){
				man.animationSpeed = 1;
		 	}else{
		 		man.animationSpeed = 0.3;
		 	}
		  
		  man.loop = false;

		  man.position.x = widthMan/2;
		  man.position.y = heightMan/2;
		  man.anchor.x = 0.5;
		  man.anchor.y = 0.5;

		  man.play();
		 

		  stage2.addChild(man);
		  requestAnimationFrame(animate2);

		  man.onComplete = function(){
				man.destroy();
				playAnimationManloop();
		 	}

		}

		function playAnimationManloop(){

		  man = new PIXI.extras.AnimatedSprite(manTextures2);
		 
		  if(isTouchDevice){
				man.animationSpeed = 1;
		 	}else{
		 		man.animationSpeed = 0.3;
		 	}

		  man.loop = true;

		  man.position.x = widthMan/2;
		  man.position.y = heightMan/2;
		  man.anchor.x = 0.5;
		  man.anchor.y = 0.5;

		  man.play();
		 

		  stage2.addChild(man);
		  requestAnimationFrame(animate2);

		}

		function animate2() {
		  renderer2.render(stage2);
		 
			requestAnimationFrame(animate2);
		}

	jQuery(document).ready(function($) {
		if($(window).width() < 1025){
			$(".second").attr("data-width", "500");
			$(".second").attr("data-height", "500")
		}

		


		$("body").show();

		if(!isTouchDevice){
			jQuery("body").addClass("hover");
		}else{
			jQuery("body").addClass("tap");
			$(".click").text("Tap!")

			document.ontouchmove = function(event){
			  event.preventDefault();
			}
		}


		jQuery(".try-again").on("click", function(){
			
			clearTimeout(timer2);
			$(".folder-close").trigger("click");
			$(".icon").removeClass("active");

			$('.timer').trigger(
	     'configure',
	      {	
	      	"resetValue" : "60",
	      	"fgColor":"#b0cfff"
	    	}
			);

			if($(".relax-off").hasClass("playing")){	
				$("#relax-sound")[0].play();
				$("#snore-sound")[0].play();
				
		  }
			
			$('.timer').removeClass("end-time");
			$("body").removeClass("popup-show");

			$(".stop-sounds, .relax").addClass("playing");

			man.destroy();

			circularTimer2();
		});

		//detect what side was clicked 
		$(".website-inner").on("mousedown", function(e){

			$("body").addClass("animatepoke");

			setTimeout(function(){
				$("body").removeClass("animatepoke");
			},200);
			
			if($("body").hasClass("default")){
			  var offset = $(this).offset();
			  var relativeX = (e.pageX - offset.left);
			  if($(".browser").width()/2-100 > relativeX){
			  	centerAn = getRandomInt(1, 3);
			  	if(centerAn == 1){
			  		addSteps("leftpokeAnimation");
			  	}else{
			  		addSteps("leftpokeAnimation2");
			  	}
			  }else if($(".browser").width()/2+100 > relativeX){
			  	centerAn = getRandomInt(1, 4);	  	

			  	if(centerAn == 1){
			  		addSteps("centerpokeAnimation1");
			  	}else if(centerAn == 2){
			  		addSteps("centerpokeAnimation2");
			  	}else{
			  		addSteps("centerpokeAnimation3");
			  	}
			  	
			  }else{
			  	centerAn = getRandomInt(1, 3);
			  	if(centerAn == 1){
			  		addSteps("rightpokeAnimation");
			  	}else{
			  		addSteps("rightpokeAnimation2");
			  	}
			  }
			}else if($("body").hasClass("bg-feather")){
				//$("body").addClass("taped");

				centerAn = getRandomInt(1, 5);
				
				if(centerAn == 1){
					addSteps("laugh1Animation");
				}else if(centerAn == 2){
					addSteps("laugh2Animation");
				}else if(centerAn == 3){
					addSteps("laugh3Animation");
				}else{
					addSteps("laugh4Animation");
				}
				
			}
			/*else if($("body").hasClass("sandal-progres-in")){
				
			}else if($("body").hasClass("pillow-progres-in")){
				
			}*/
		});
		
		//document.body.appendChild(renderer.view);
		//console.log(renderer);

		document.getElementById('face').appendChild(renderer.view);

		// create the root of the scene graph

		PIXI.loader
		    .add(['json/snoreNEW2.json', 'json/man.json'])
		    .load(onAssetsLoaded);

		function onAssetsLoaded(){
			$(".timer").val(0).knob();

			$("body").addClass("intro-animate showing-el");

			setTimeout(function(){
				$("body").addClass("intro-animate-second");
				$("body").removeClass("intro-animate");
				setTimeout(function(){
					$("body").addClass("load-icons");
					$("body").removeClass("intro-animate-second");
					
					

					setTimeout(function(){
						$("body").addClass("load-timer");	
						$("body").addClass("load-ready");
						setTimeout(function(){
							$("body").removeClass("load-ready");
							$("body").addClass("load-set");
							setTimeout(function(){
								$("body").removeClass("load-set");
								$("body").addClass("load-click");
								setTimeout(function(){
									if($("body").hasClass("hover")){
										//stop
										/*circularTimer(1); 

										$("body").addClass("load-desktop");
										$(".browser").show("size", { origin: ["top", "right"] }, 700);


										$(".relax").addClass("playing")
										var audio = $("#relax-sound"),

										play = $('.relax .music-progres'),
										circle = $('.relax').find('#circle'),
										getCircle = circle.get(0),
										totalLength = getCircle.getTotalLength();
										
										audio[0].volume = 0.5; 

										circle.attr({
											'stroke-dasharray': totalLength,
											'stroke-dashoffset': totalLength
										});

										audio[0].play();

										audio.on('timeupdate', function() {
											var currentTime = audio[0].currentTime,
												maxduration = audio[0].duration,
												calc = totalLength - ( currentTime / maxduration * totalLength );

											circle.attr('stroke-dashoffset', calc);
										});
										playAnimation();*/

									}else{
										var startAnimation = true;
										$(".intro").on("touchend", function(){
											if(startAnimation){
												startAnimation = false;
												//alert($(window).height());
												if($(".relax-off").hasClass("playing")){	
													$("#time-end")[0].play();
											  }
												$("#time-end")[0].pause();
												if($(".relax-off").hasClass("playing")){	
													$("#end")[0].play();
											  }
												$("#end")[0].pause();
												if($(".relax-off").hasClass("playing")){	
													$("#mosquito-slap")[0].play();
											  }
												$("#mosquito-slap")[0].pause();
												if($(".relax-off").hasClass("playing")){	
													$("#mosquitoanimationsound")[0].play();
												}
												$("#mosquitoanimationsound")[0].pause();

												
												$("body").addClass("load-desktop");
												$(".browser").show();
												$(".facke-timer").hide();
												//stop
												circularTimer(1);  

												$(".relax").addClass("playing")
												var audio = $("#relax-sound"),

												play = $('.relax .music-progres'),
												circle = $('.relax').find('#circle'),
												getCircle = circle.get(0),
												totalLength = getCircle.getTotalLength();
												
												audio[0].volume = 0.5; 

												circle.attr({
													'stroke-dasharray': totalLength,
													'stroke-dashoffset': totalLength
												});
												if($(".relax-off").hasClass("playing")){	
													audio[0].play();
											  }

												audio.on('timeupdate', function() {
													var currentTime = audio[0].currentTime,
														maxduration = audio[0].duration,
														calc = totalLength - ( currentTime / maxduration * totalLength );

													circle.attr('stroke-dashoffset', calc);
												});
												playAnimation();
											}
										})

									}
									


								},1000);

							},1000);
						},1000);

						//set timer
	          circularTimer();  
						     

					}, 2000)
				},3000);
			}, 2000);
			

			// create an array to store the textures
	   
			

		}



		var mosquito = jQuery("#mosquito");

	  //open menu 
		/*$(".menu-icon").on("click", function(){
			$(".website-menu-fixed").addClass("active");
		});*/

	  $("body").on("mousemove touchmove",function (e) {
	 		//mosquito event
	 		if($(this).hasClass("bg-mosquito")){
	  		handleMouseMove(e, mosquito);	
	  	}

	  	handleMouseMove(e, $("#feather"));
	  	handleMouseMove(e, $("#poke"));

	  	//if(isTouchDevice){
		    
			//}

	  });

	  $(".mosquito").on("mousemove touchmove",function (e) {
	 		//mosquito event
	 		if($(this).hasClass("default")){
	  		handleMouseMove(e, mosquito);	
	  	}
	  });

	  $(".website-inner").on("mousemove touchmove",function (e) {
	 		//console.log(1);
	 		//poke cursor
	 		if($("body").hasClass("default") || $("body").hasClass("sandal-progres-in") || $("body").hasClass("pillow-progres-in")){
	 			handleMouseMove(e, $("#poke"));
	 		}

	  
	  });

		$(".website-inner").on("touchend", function(){
			if($("body").hasClass("bg-mosquito") || $("body").hasClass("bg-feather")){
				$("body").addClass("taped");
			}
		})
	  		
		

		//hover 
		$(".browser").mouseenter(function(e){


			if($("body").hasClass("bg-mosquito")){
				

				if(!$("body").hasClass("mosquitoAnimation")){	
					addSteps("mosquitoAnimation");
					$("body").addClass("mosquitoAnimation");	
					if($(".relax-off").hasClass("playing")){	
						$("#mosquitoanimationsound")[0].play()
					}

				}

				if(!$("body").hasClass("inprogress")){
			  	$("body").addClass("inprogress");	
			  	$("body").addClass("face-move");
			 		
			  	setTimeout(function(){
			  		$("body").removeClass("face-move")
			  		$("body").removeClass("inprogress");
			  	},800);
			  }
			}
		});



		//remove active icons
		$('body').on('click', function(e){
	    if($(e.target).hasClass("active") && $(e.target).hasClass("icon") ){
	   		$(".icon").removeClass("active");
	    }
	    $(".website-menu-list li").removeClass("active");
	  });

		if($(window).width() < 1025 && isTouchDevice){
			$(".website-menu-list li a").on("click", function(){
				var This = $(this);

				$(".website-menu-list li").removeClass("active");
				This.parent().addClass("active");					

				return false;
			});

			
		}else{
			$(".website-menu-list li a").on("click", function(){return false;});
		}
		

		//over folder
	  $(".folder").click(function(){
	  	$(".folder").css({"z-index" : "998"})
	  	$(this).css({"z-index" : "999"})
	  });

	  //close folder
	  $(".folder-close").on("click", function(){
	  	$(this).parents(".folder").removeClass("active-folder");

	  	$(".try-tapping").text("Try tapping him");
	  	
	  });

	  //draggable folder
	  $( ".folder" ).draggable();

	  $( ".icon" ).draggable({ 
	  	revert: true, 
	  	scroll: false
	 	});


		$(".stop-sounds").on("click", function(){
			if($(this).hasClass("playing")){
				//$(this).removeClass("playing");
				$(".relax, .stop-sounds").removeClass("playing");
				$("#relax-sound")[0].pause();

			}else{
				//$(this).addClass("playing");
				$(".relax, .stop-sounds").addClass("playing");
				if($(".relax-off").hasClass("playing")){	
					$("#relax-sound")[0].play();
				}
			}
		});

		$(".relax-off").on("click", function(){
			if($("body").hasClass("default") || $("body").hasClass("sandal-progres-in") || $("body").hasClass("pillow-progres-in")){

				if($(this).hasClass("playing")){
					$(this).removeClass("playing")
					$(".audio").each(function(){
						$(this)[0].pause();
					});	
				}else{
					$(this).addClass("playing");
					$("#relax-sound")[0].play();
					$("#snore-sound")[0].play();
					if($(".timer").val() <= 10){
						$("#time-end")[0].play();
					}
				}
				
			}
			

		});


		$(".icon").on("click", function(e) {
    		
		    $("body").removeClass("dropped Click").addClass("dblclick");
		    $(".icon").removeClass("active");
		  	$(this).addClass("active");
		  	
		  	
		    if($(this).hasClass("sun")){
		    	mobTip = $(this).find(".icon-tooltip p").text();
		    	$(".try-tapping").text(mobTip);

		    	if(isTouchDevice){
		    		$(".music-folder").removeClass("active-folder");
		    		$(".slap-folder").removeClass("active-folder");
		    	}


		    	$(".column-icons").addClass("blocked");
		    	$(".folder-inner").addClass("blocked");
		    	$("body").addClass("bg-sun");
		    	$("body").removeClass("default");
		    	$(this).addClass("progres-in");	

		    	if($(".relax-off").hasClass("playing")){
		    		$("#curtains")[0].play();
		    		$("#move")[0].play();
		    	}
		    	
		    	$("#move")[0].pause();

		    	setTimeout(function(){
		    		addSteps("sunAnimation");
		    	}, 1000);

			    $(this).find(".progres div").animate({"width" : "100%"}, 6000, function(){
			    	$(".icon").removeClass("progres-in");
			    	$("body").removeClass("bg-sun");
			    	if($(".relax-off").hasClass("playing")){
			    		$("#curtains")[0].play();
			    	}
			    	$(".icon").find(".progres div").css("width", "0");

			    	setTimeout(function(){
			    		if($(".relax-off").hasClass("playing")){		
			    			$("#move")[0].play();
			    		}
			    		$(".column-icons").removeClass("blocked");
			    		$(".folder-inner").removeClass("blocked");
			    		$("body").addClass("closeOnMask");
			    		
			    		$("#curtains")[0].pause();
			    		$("#curtains")[0].currentTime = 0;
			    		setTimeout(function(){
			    			$("body").removeClass("closeOnMask");
			    			$("body").removeClass("putOnMask");
			    			$("body").addClass("default");
			    			$(".try-tapping").text("Try tapping him");
			    		}, 800);
			    	}, 800);
			    	
			    });

			    

		    }else if($(this).hasClass("feather")){
		    	mobTip = $(this).find(".icon-tooltip p").text();
		    	$(".try-tapping").text(mobTip);	

		    	if(isTouchDevice){
		    		$(".music-folder").removeClass("active-folder");
		    		$(".slap-folder").removeClass("active-folder");
		    	}


		   		$(".column-icons").addClass("blocked");
		   		$(".folder-inner").addClass("blocked");
		   		$("body").removeClass("default");
		    	$("body").addClass("bg-feather");
		    	$(this).addClass("progres-in");	
	        
	        $(this).find(".progres div").animate({"width" : "100%"}, 6000, function(){
	        	$(".icon").removeClass("progres-in");
			    	$("body").removeClass("bg-feather taped");
			    	$(".column-icons").removeClass("blocked");
			    	$(".folder-inner").removeClass("blocked");
			    	$("body").addClass("default");
			    	$(".feather").find(".progres div").width(0);
			    	$(".try-tapping").text("Try tapping him");
	    	  });

		    }else if($(this).hasClass("mosquito")){
		    	mobTip = $(this).find(".icon-tooltip p").text();
		    	$(".try-tapping").text(mobTip);

		    	if(isTouchDevice){
		    		$(".music-folder").removeClass("active-folder");
		    		$(".slap-folder").removeClass("active-folder");
		    	}


		    	handleMouseMove(e, $("#mosquito"));	
		    	$(".column-icons").addClass("blocked");
		    	$(".folder-inner").addClass("blocked");
		    	$(this).addClass("progres-in");
		    	$("body").addClass("bg-mosquito");
		    	$("body").removeClass("default");
		    	$("#snore-sound")[0].volume = 0.2;
		    	if($(".relax-off").hasClass("playing")){
		    		$("#mosquito-sound")[0].play();
		    	}
		    	

		    	$("#mosquito").show().removeClass("mosquito-stop mosquito-squished");


			    $(this).find(".progres div").animate({"width" : "100%"}, 6000, function(){
			    	$(".icon").removeClass("progres-in");
			    	$("body").removeClass("bg-mosquito taped");

			    	$("body").addClass("mosquito-to-face");
			    	
		 			 	var toX = ($(".face").offset().left+($(".face").width()*0.2));
		 			 	var toY = ($(".face").offset().top);
		  			$("#mosquito").css({
		  				"left" : toX,
		  				"top" : toY
		  			});


		  			setTimeout(function(){
		  				$("body").addClass("slapp");
		  				$("#mosquito-sound")[0].pause();
		  				$("#mosquito").addClass("mosquito-stop");
		  				if($(".relax-off").hasClass("playing")){
		  					$("#mosquito-slap")[0].play();
		  			  }
		  				

							setTimeout(function(){
								$("#mosquito").addClass("mosquito-squished");
								/*$("#mosquito").css({
				  				"top" : toY+500
				  			});*/
								snore.loop = false;
								snore.destroy();
	  						stepsAnimation();
	  						
	  						$("#mosquitoanimationsound")[0].pause();

			  				$("body").removeClass("slapp");
			  				setTimeout(function(){
			  					$("body").removeClass("mosquito-to-face mosquitoAnimation ");
			  					setTimeout(function(){
			  						$("body").addClass("default");
			  						$(".column-icons").removeClass("blocked");
			    					$(".folder-inner").removeClass("blocked");
			  						$(".try-tapping").text("Try tapping him");
			  					},2000);
			  					//$(".website-inner").trigger("mousemove");

			  				},400);
			  			},400);

		  	
			    	},1000);

			    	$(".icon").find(".progres div").css("width", "0");
			    	
			    });


		    }else if($(this).hasClass("slap")){
		    	mobTip = $(this).find(".icon-tooltip p").text();
		    	$(".try-tapping").text(mobTip);

		    	if(isTouchDevice){
			    	$(".music-folder").removeClass("active-folder");
			    }

		    	$(".slap-folder").addClass("active-folder");

		    }else if($(this).hasClass("music")){

		    	mobTip = $(this).find(".icon-tooltip p").text();
		    	$(".try-tapping").text(mobTip);	

		    	if(isTouchDevice){
		    		$(".slap-folder").removeClass("active-folder");
		    	}

		    	$(".music-folder").addClass("active-folder");


		    }else if($(this).hasClass("sandal")){
		    	$(this).addClass("progres-in");
		    	/*$(".column-icons").addClass("blocked");
			    $(".folder-inner").addClass("blocked");*/

		    	$("body").removeClass("default");
		    	$("body").addClass("sandal-progres-in");

		    	var positionRand = getRandomInt(1, 5);

		    	if(positionRand == 1){
		    		$("#sandal").addClass("position-1");
		    	}else if(positionRand == 2){
		    		$("#sandal").addClass("position-2");
		    	}else if(positionRand == 3){
		    		$("#sandal").addClass("position-3");
		    	}else if(positionRand == 4){
		    		$("#sandal").addClass("position-4");
		    	}


		    	if(!$("body").hasClass("sandal-progress")){
		 
			    	$("body").addClass("bg-sandal sandal-progress ");

		    		if($(".relax-off").hasClass("playing")){	
			    		$("#move")[0].play();
			    	}

			    	setTimeout(function(){
			    		if($(".relax-off").hasClass("playing")){
			    			$("#sandal-slap")[0].play();
			        }

			    		$("body").removeClass("bg-sandal");
			    		$(".browser").addClass("slap-browser");
			    		$("#sandal").addClass("sandaldown");
				    	centerAn = getRandomInt(1, 8);
					  	
					  	if(centerAn == 1){
					  		addSteps("leftpokeAnimation");
					  	}else if(centerAn == 2){
					  		addSteps("leftpokeAnimation2");
					  	}else if(centerAn == 3){
					  		addSteps("rightpokeAnimation");
					  	}else if(centerAn == 4){
					  		addSteps("rightpokeAnimation2");
					  	}else if(centerAn == 5){
					  		addSteps("centerpokeAnimation1");
					  	}else if(centerAn == 6){
					  		addSteps("centerpokeAnimation2");
					  	}else if(centerAn == 7){
					  		addSteps("centerpokeAnimation3");
					  	}

			    		setTimeout(function(){
			    			//$("body").removeClass("bg-sandal");
			    			$("#sandal").removeClass("sandaldown");
			    			$(".browser").removeClass("slap-browser");
			    			$("#sandal").removeClass("position-1 position-2 position-3 position-4");
		        	}, 780);

		        	setTimeout(function(){
		        		$("body").removeClass("sandal-progress");	
		        	},810);

			    	}, 450);
		       
		      }


		    	$(this).find(".progres div").animate({"width" : "100%"}, 1000, function(){
	        	$(".icon").removeClass("progres-in");
			    	$(".column-icons").removeClass("blocked");
			    	$(".folder-inner").removeClass("blocked");
			    	$("body").addClass("default");
			    	$(".icon").find(".progres div").css("width", "0");
			    	$("body").removeClass("sandal-progres-in");

			    	/*$(".column-icons").removeClass("blocked");
			    	$(".folder-inner").removeClass("blocked");*/
	    	  });
	    	  
		    } else if($(this).hasClass("pillow")){
		    		$(this).addClass("progres-in ");
		    		$("body").removeClass("default");
		    		$("body").addClass("pillow-progres-in");

		    		/*$(".column-icons").addClass("blocked");
			    	$(".folder-inner").addClass("blocked");*/
			    	var positionRand = getRandomInt(1, 5);

			    	if(positionRand == 1){
			    		$("#pillow").addClass("position-1");
			    	}else if(positionRand == 2){
			    		$("#pillow").addClass("position-2");
			    	}else if(positionRand == 3){
			    		$("#pillow").addClass("position-3");
			    	}else if(positionRand == 4){
			    		$("#pillow").addClass("position-4");
			    	}

			    	if(!$("body").hasClass("pillow-progress")){
				    	$("body").addClass("bg-pillow pillow-progress");
				    	
				    	if($(".relax-off").hasClass("playing")){
				    	  $("#move")[0].play();
				      }

				    	setTimeout(function(){
				    		if($(".relax-off").hasClass("playing")){
				    	 		$("#pillow-slap")[0].play();
				    	  }

				    		$("body").removeClass("bg-pillow");
				    		$(".browser").addClass("slap-browser");
				    		$("#pillow").addClass("sandaldown");
					    	centerAn = getRandomInt(1, 8);
						  	
						  	if(centerAn == 1){
						  		addSteps("leftpokeAnimation");
						  	}else if(centerAn == 2){
						  		addSteps("leftpokeAnimation2");
						  	}else if(centerAn == 3){
						  		addSteps("rightpokeAnimation");
						  	}else if(centerAn == 4){
						  		addSteps("rightpokeAnimation2");
						  	}else if(centerAn == 5){
						  		addSteps("centerpokeAnimation1");
						  	}else if(centerAn == 6){
						  		addSteps("centerpokeAnimation2");
						  	}else if(centerAn == 7){
						  		addSteps("centerpokeAnimation3");
						  	}

				    		setTimeout(function(){
				    			//$("body").removeClass("bg-sandal");
				    			$("#pillow").removeClass("sandaldown");
				    			$(".browser").removeClass("slap-browser");
				    			$("#pillow").removeClass("position-1 position-2 position-3 position-4");
				    			
			        	}, 780);

			        	setTimeout(function(){
			        		$("body").removeClass("pillow-progress");	
			        	},810);

				    	}, 450);
			       
			      }
		    		$(this).find(".progres div").animate({"width" : "100%"}, 1000, function(){

	        	$(".icon").removeClass("progres-in");
			    	
			    	/*$(".column-icons").removeClass("blocked");
			    	$(".folder-inner").removeClass("blocked");*/
			    	$("body").addClass("default");
			    	$(".icon").find(".progres div").css("width", "0");
			    	$("body").removeClass("pillow-progres-in");

			    	$(".column-icons").removeClass("blocked");
			    	$(".folder-inner").removeClass("blocked");

	    	  });
		    } else if($(this).hasClass("alarm")){
		    	$("body").removeClass("play-shake closeMusic");
		    	$("#shake-sound")[0].pause();
					$("#shake-sound")[0].currentTime = 0;

					snore.loop = false;
		    	
		    	$(this).addClass("progres-in");
		    	$("#snore-sound")[0].pause();
					$("#snore-sound")[0].currentTime = 0;

		    	//$("#click")[0].play();
		    	if($(".relax-off").hasClass("playing")){
		    		$("#alarm-sound")[0].play();
		      }
					$(".column-icons").addClass("blocked");
					$(".folder-inner").addClass("blocked");
		    	$("body").removeClass("default");
		    	$("body").addClass("play-alarm");

		    	$(".icon").removeClass("playing");
		    	$("#relax-sound")[0].pause();
		    	setTimeout(function(){
		    		addSteps("alarmAnimation");
		    	}, 1000)

		    	$(this).find(".progres div").animate({"width" : "100%"}, 2000, function(){
		    		$(".icon").removeClass("progres-in");
		    		$("body").addClass("closeMusic");
		    		
		    		/*setTimeout(function(){
		    			if($(".relax-off").hasClass("playing")){
								$("#click")[0].play();
						  }
						},500);*/

						setTimeout(function(){
							$("#alarm-sound")[0].pause();
							$("#alarm-sound")[0].currentTime = 0;

							if($(".relax-off").hasClass("playing")){	
								$("#relax-sound")[0].play();
						  }
							$(".relax").addClass("playing");

							$(".column-icons").removeClass("blocked");
							$(".folder-inner").removeClass("blocked");
			    		$("body").removeClass("play-alarm closeMusic");
				    	$("body").addClass("default");
				    	$(".icon").find(".progres div").width(0);
				    	$(".icon").removeClass("progres-in");
						},1000)

		    	});
		    }else	if($(this).hasClass("shake")){
		    	$("body").removeClass("default");
		    	

		    	//if(!$("body").hasClass("play-shake")){
		    		//$("#click")[0].play();
		    		$("body").addClass("play-shake");
	    			$(".relax").removeClass("playing");

			    	$("#relax-sound")[0].pause();

			    	var audio = $("#shake-sound"),
						play = $('.shake .music-progres'),
						circle = $('.shake').find('#circle'),
						getCircle = circle.get(0),
						totalLength = getCircle.getTotalLength();

						circle.attr({
							'stroke-dasharray': totalLength,
							'stroke-dashoffset': totalLength
						});

						audio.on('timeupdate', function() {
							var currentTime = audio[0].currentTime,
								maxduration = audio[0].duration,
								calc = totalLength - ( currentTime / maxduration * totalLength );

							circle.attr('stroke-dashoffset', calc);
						});

						if(!$(".shake").hasClass("playing")){	
							$(".shake").addClass("playing");

								if($(".relax-off").hasClass("playing")){
									audio[0].play();
							  }

								setTimeout(function(){

									$("#snore-sound")[0].pause();
									$("#snore-sound")[0].currentTime = 0;
					    		addSteps("musicAnimation");
					    	},1000);

								setTimeout(function(){
									if($(".shake").hasClass("playing")){
										$("body").addClass("closeMusic");
										
										/*setTimeout(function(){
											if($(".relax-off").hasClass("playing")){
												$("#click")[0].play();
										  }
										},500)*/
				
										setTimeout(function(){

											audio[0].pause();
											audio[0].currentTime = 0;

											$(".icon").removeClass("playing");
											
											if($(".relax-off").hasClass("playing")){
												$("#relax-sound")[0].play();
									  	}

											$(".relax").addClass("playing");

											$(".column-icons").removeClass("blocked");
											$(".folder-inner").removeClass("blocked");
							    		$("body").removeClass("play-shake closeMusic");
								    	$("body").addClass("default");
								    	snore.loop = false;
										},1000);

									}
								}, 2000);
						
						}else{
							snore.loop = false;
							$(".shake").removeClass("playing");
							audio[0].pause();
							audio[0].currentTime = 0;
							if($(".relax-off").hasClass("playing")){
								$("#snore-sound")[0].play();
						  }

						}

		    	//}
		    
		    }else if($(this).hasClass("relax")){
		    	if(turnMusic){
		    		snore.loop = false;
		    	}


		    	//$("#click")[0].play();
     	
		    	if($(".relax-off").hasClass("playing")){	
		    		$("#snore-sound")[0].play();
		      }

		    	$("body").addClass("default");
		    	$("body").removeClass("play-shake play-alarm closeMusic");
		    	


		    	if(!$(this).hasClass("playing")){
		    		$(".shake").removeClass("playing");
		    		$("#shake-sound")[0].pause();
		    		$(this).addClass("playing");
		    		$(".stop-sounds").addClass("playing");
		    		
		    		if($(".relax-off").hasClass("playing")){	
		    			$("#relax-sound")[0].play();
		    	  }
		    		

		    	}else{
		    		$(this).removeClass("playing");
		    		$(".stop-sounds").removeClass("playing");
		    		$("#relax-sound")[0].pause();

		    	}			    
		    }
		    




		  });





	  $( ".browser" ).droppable({
	    classes: {
	      "ui-droppable-active": "ui-state-active",
	      "ui-droppable-hover": "ui-state-hover"
	    },
	    drop: function( event, ui ) {
	    	$("body").removeClass("Click dblclick").addClass( "dropped" );
	    	
	    	if(ui.draggable.hasClass("sun")){	

			  }else if(ui.draggable.hasClass("mosquito")){

			  }
	    }
	  });
	});


	function handleMouseMove(event, element){

	  var x = event.pageX;
	  var y = event.pageY;

	  element.css({
	    "left" : x,
	    "top" : y
	  });
	}

	function circularTimer(a){
		if(a==1){
			setTimeout(function(){
				$('.timer').trigger(
		     'configure',
		      {	

		      	"width" : "85",
		      	"height" : "85",
		      	"resetValue" : "60",
		      	"thickness" : "0.05"
		    	}
				);
				
				circularTimer2();
			}, 900);
			
		} else {
			var i = 0;

		  function cl(){
				
				var $i = $(".second");

				$i.val(i).trigger("change");
				var myVar;
				if(i < 60){
					myVar = setTimeout(function(){cl(); i = 1+i; }, 40);
				}else{
					if($("body").hasClass("hover")){
						//stop
						circularTimer(1); 

						$("body").addClass("load-desktop");
						$(".browser").show("size", { origin: ["top", "right"] }, 700);


						$(".relax").addClass("playing")
						var audio = $("#relax-sound"),

						play = $('.relax .music-progres'),
						circle = $('.relax').find('#circle'),
						getCircle = circle.get(0),
						totalLength = getCircle.getTotalLength();
						
						audio[0].volume = 0.5; 

						circle.attr({
							'stroke-dasharray': totalLength,
							'stroke-dashoffset': totalLength
						});
						if($(".relax-off").hasClass("playing")){		
							audio[0].play();
					  }

						audio.on('timeupdate', function() {
							var currentTime = audio[0].currentTime,
								maxduration = audio[0].duration,
								calc = totalLength - ( currentTime / maxduration * totalLength );

							circle.attr('stroke-dashoffset', calc);
						});
						playAnimation();
					}	




					clearTimeout(myVar);
				}
			  //console.log(1)
			}
			cl();
		}

	}
	function circularTimer2(){

	 	var i = 60;
	  function clock2() {
	    var $s = $(".second");
	    //console.log(s) 
	    $s.val(i).trigger("change");
	     
	    timer2 = setTimeout(function(){clock2();  i= i-1;}, 1000);

	    //time over
	    if($(".second").val() <= 10 ){

	    	if($(".second").val() == 9 ){
	    		$("#relax-sound")[0].pause();
	    		if($(".relax-off").hasClass("playing")){
	    		  $("#time-end")[0].play();
	    	  }
	    	}


    		if($(".second").val() == 0 ){
    			if(!$("body").hasClass("popup-show")){
    	
    					playAnimationMan();
    				

    				$("#time-end")[0].pause();
    			

						$(".audio").each(function(){
							$(this)[0].pause();
						});	

						if($(".relax-off").hasClass("playing")){
 	    			  $("#end")[0].play();
 	    		  }
						
    			}
    			
		  		jQuery("body").addClass("popup-show");
		  	}

				$(".timer").addClass("end-time");
				$('.timer').trigger(
				     'configure',
				      {
				        "fgColor":"#ff7373"
				    	}
				);
				
		  }else{
		  	jQuery(".timer").removeClass("end-time");
		  }

	  }

	  clock2();  
	}
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}
