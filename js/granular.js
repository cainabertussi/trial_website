// this is a comment in java
console.log('Hi!');

// 1. Click on scroll button - arrow in the header
// select the thing with jquery
$('.scroll-btn').on('click',function(){
	// list of instructions inside
	console.log('IS IT WORKING>??');
// 2. Figure out the section we want to move to
// 3. Checl how far the section we want go to is away from the top of the page
	var introSection = $ ('.intro').offset().top;

	console.log(introSection);
// 4. Animate page down to this position
	$('html,body').animate({ scrollTop:introSection - 50 },800 );











})