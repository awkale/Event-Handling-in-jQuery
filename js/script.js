$(document).ready(function(){
	/* your code goes here */

	for (var i=0; i<27; i++) {
		listings.push(listings[i%3]); //multiplying the 3 elements in the array to 27
	}
	console.log(listings);

	var markup = "";

	for (var i=0; i < listings.length; i++){
		var listing = listings[i];
		markup += '<div class="listing">\
		<div class="photo-container"><img src="'+listing.image+'"/></div>\
				<div class="listing-details clearfix">\
								<div class="address">'+listing.address+'</div>\
								<div class="bed_bath">'+listing.bedrooms+'</div>\
							</div>\
							<a href="#" class="overlay">View Listing</a>\
						</div>';
	}

	$('#listings-container').append(markup);


	var page = 0;


	$('#next').click(function(e){
		e.preventDefault();
		var numItems = $('#num-items').val();
		var first_el = page * numItems;
		for(var i = first_el; i < first_el + numItems; i++){
			markup += '<div class="listing"><div class="photo-container"><img src="'+listings[i].image+'"/></div>';

		}
	});




	var $slides = $('#slides').find('li');
	var slideCount = $slides.length;
	var nextSlideIndex = 0;

	setInterval(function(){

		var $activeSlide = $slides.filter('.active');

		if(nextSlideIndex < slideCount - 1) {
			nextSlideIndex++;
		} else {
			nextSlideIndex = 0;
		}

		$slides.eq(nextSlideIndex).show();

		$activeSlide.fadeOut(500, function(){
			$activeSlide.removeClass('active');
			$slides.eq(nextSlideIndex).addClass('active');
		});

	}, 5000);



});


	// Listings page code

	var listings = [
		{
			address: "123 41st St",
			bedrooms: 2,
			bathrooms: 2,
			image: "img/1bdrm_a.jpg"
		},
		{
			address: "234 52nd St",
			bedrooms: 1,
			bathrooms: 1,
			image: "img/1bdrm_b.jpg"
		},
		{
			address: "345 63rd St",
			bedrooms: 3,
			bathrooms: 2,
			image: "img/1bdrm_c.jpg"
		}
	];