//
// Card
//

'use strict';


//
// Card actions
//

var CardActions = (function() {

	// Variables

	var $card = $(".card"),
		actions = '.card-product-actions';


	// Methods

	function show($this) {
		var $el = $this.find(actions),
        	animation = $el.data('animation-in');

        if ($el.length) {
            $el.addClass('in animated ' + animation);
            $el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $el.removeClass('animated ' + animation);
            });
		}
	}

	function hide($this) {
		var $el = $this.find(actions),
			animation = $el.data('animation-out');

		if ($el.length) {
			$el.addClass('animated ' + animation);
			$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$el.removeClass('in animated ' + animation);
			});
		}
	}

	// Events

	if ($card.length && $(actions).length) {
		$card.on({
    		'mouseenter': function() {
    			show($(this));
    		}
    	})

		$card.on({
    		'mouseleave': function() {
    			hide($(this));
    		}
    	})
	}

})();

//
// Count to (milestone counter)
//

'use strict';

! function(t) {
	t.fn.countTo = function(e) {
		return e = e || {}, t(this).each(function() {
			var a = t.extend({}, t.fn.countTo.defaults, {
					from: t(this).data("from"),
					to: t(this).data("to"),
					speed: t(this).data("speed"),
					refreshInterval: t(this).data("refresh-interval"),
					decimals: t(this).data("decimals")
				}, e),
				n = Math.ceil(a.speed / a.refreshInterval),
				o = (a.to - a.from) / n,
				r = this,
				l = t(this),
				f = 0,
				i = a.from,
				c = l.data("countTo") || {};

			function s(t) {
				var e = a.formatter.call(r, t, a);
				l.text(e)
			}
			l.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval(function() {
				f++, s(i += o), "function" == typeof a.onUpdate && a.onUpdate.call(r, i);
				f >= n && (l.removeData("countTo"), clearInterval(c.interval), i = a.to, "function" == typeof a.onComplete && a.onComplete.call(r, i))
			}, a.refreshInterval), s(i)
		})
	}, t.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1e3,
		refreshInterval: 100,
		decimals: 0,
		formatter: function(t, e) {
			return t.toFixed(e.decimals)
		},
		onUpdate: null,
		onComplete: null
	}
}(jQuery);


var CountTo = (function() {


	// Variables

	var milestone = '.milestone-count',
		$milestone = $(milestone);


	// Methods

	function init($this) {
		inView(milestone)
		.on('enter', function() {
			if(! $this.hasClass('counting-finished')) {
				$this.countTo({
					formatter: function(value, options) {
						return value.toFixed(options.decimals);
					},
					onUpdate: function(value) {
						//console.debug(this);
					},
					onComplete: function(value) {
						$(this).addClass('counting-finished');
					}
				});
			}
		})
	}


	// // Events

	if ($milestone.length) {
		init($milestone);
	}

})();

//
// Dropdown
//

'use strict';

var Dropdown = (function() {

	// Variables

	var $dropdown = $('.dropdown');


	// Methods

	function hideDropdown($this) {

		// Add additional .hide class for animated dropdown menus in order to apply some css behind

		if ($this.hasClass('dropdown-animate')) {
			var $dropdownMenu = $this.find('.dropdown-menu');

	        $dropdownMenu.addClass('hide');

	        setTimeout(function(){
	            $this.removeClass('hide');
	        }, 300);
		}
	}


	// Events

	if ($dropdown.length) {
    	$dropdown.on({
    		'hide.bs.dropdown': function() {
    			hideDropdown($dropdown);
    		}
    	})
	}
})();

//
// Forms
//

'use strict';


//
// Form control
//

var FormControl = (function() {

	// Variables

	var $input = $('.form-control');


	// Methods

	function init($this) {
		$this.on('focus blur', function(e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');
	}


	// Events

	if ($input.length) {
		init($input);
	}

})();


//
// Autosize textarea
//

var TextareaAutosize = (function() {

	// Variables

	var $textarea = $('.textarea-autosize');


	// Methods

	function init() {
		autosize($textarea);
	}


	// Events

	if ($textarea.length) {
		init();
	}

})();


//
// Custom input file
//

var CustomInputFile = (function() {

	// Variables

	var $customInputFile = $('.custom-input-file');


	// Methods

	function change($input, $this, $e) {
		var fileName,
			$label = $input.next('label'),
			labelVal = $label.html();

		if ($this && $this.files.length > 1) {
			fileName = ($this.getAttribute('data-multiple-caption') || '').replace('{count}', $this.files.length);
		}
		else if ($e.target.value) {
			fileName = $e.target.value.split('\\').pop();
		}

		if (fileName) {
			$label.find('span').html(fileName);
		}
		else {
			$label.html(labelVal);
		}
	}

	function focus($input) {
		$input.addClass('has-focus');
	}

	function blur($input) {
		$input.removeClass('has-focus');
	}


	// Events

	if ($customInputFile.length) {
		$customInputFile.each(function() {
			var $input = $(this);

			$input.on('change', function(e) {
				var $this = this,
					$e = e;
					
				change($input, $this, $e);
	        });

	        // Firefox bug fix
	        $input.on('focus', function() {
	            focus($input);
	        })
	        .on('blur', function() {
	            blur($input);
	        });
		});
	}
})();

//
// Highlight
//

'use strict';

var Highlight = (function() {

	// Variables

	var $highlight = $('.highlight');


	// Methods

	function init($this) {
		hljs.highlightBlock($this);
	}


	// Events

	if ($highlight.length) {
		$highlight.each(function(i, block) {
			init(block);
		})
	}

})();

//
// Layout
//

'use strict';

var Layout = (function() {

    $("body").on("click", "[data-action]", function(e) {

        e.preventDefault();

        var $this = $(this);
        var action = $this.data('action');
        var target = $this.data('target');

        switch (action) {
            case "offcanvas-open":
                target = $this.data("target"), $(target).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + target + " />");
                break;
            case "offcanvas-close":
                target = $this.data("target"), $(target).removeClass("open"), $("body").find(".body-backdrop").remove();
                break;

            case 'aside-open':
                target = $this.data('target');
                $this.addClass('active');
                $(target).addClass('show');
                $('body').append('<div class="body-backdrop" data-action="aside-close" data-target='+target+' />');
                break;

            case 'aside-close':
                target = $this.data('target');
                $this.removeClass('active');
                $(target).removeClass('show');
                $('body').find('.body-backdrop').remove();
                break;

            case 'search-open':
                target = $this.data('target');
                $this.addClass('active');
                $(target).addClass('show');
                $('body').addClass('navbar-search-open').append('<div class="body-backdrop body-backdrop-dark" data-action="search-close" data-target="'+target+'" />');
                break;

            case 'search-close':
                target = $this.data('target');
                $('[data-action="search-open"]').removeClass('active');
                $(target).removeClass('show');
                $('body').removeClass('navbar-search-open').find('.body-backdrop').remove();
                break;
        }
    })

})();

//
// Swiper
// init of plugin Swiper JS
//

'use strict';

var Masonry = (function() {

	// Variables

	var $masonryContainer = $(".masonry-container");


	// Methods

	function init($this) {
		var $el = $this.find('.masonry'),
			$filters = $this.find('.masonry-filter-menu'),
			$defaultFilter = $filters.find('.default'),
			defaultFilterValue = $defaultFilter.data('filter');

		var $masonry = $el.imagesLoaded(function() {

			// Set default filter if exists

			if (defaultFilterValue != undefined && defaultFilterValue != '') {

				if (defaultFilterValue != '*') {
					defaultFilterValue = '.' + defaultFilterValue;
				}

				$defaultFilter.addClass('active');
			}


			// Plugin options
			var options = {
				itemSelector: '.masonry-item',
				filter: defaultFilterValue
			};

			// Init plugin
			$masonry.isotope(options);
		});


		// Sorting buttons (filters)

        $filters.on('click', 'a', function() {
            var val = $(this).attr('data-filter');

            if (val == '*') {
                val = '';
            } else {
                val = '.' + val;
            }

            $masonry.isotope({
                filter: filterValue
            });
        });

	}


	// Events

	if ($masonryContainer.length) {
		$masonryContainer.each(function() {
			init($(this));
		})
	}

})();

//
// Navbar
//

'use strict';

var NavbarCollapse = (function() {

	// Variables

    var $nav = $('#navbar-main'),
	    $collapse = $('#navbar-main-collapse'),
        $navTop = $('#navbar-top-main');


	// Methods

	function showNavbarCollapse($this) {
        $nav.addClass('navbar-collapsed');
        $navTop.addClass('navbar-collapsed');
	}

    function hideNavbarCollapse($this) {
        $this.removeClass('collapsing').addClass('collapsing-out');
        $nav.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
        $navTop.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
	}

    function hiddenNavbarCollapse($this) {
        $this.removeClass('collapsing-out');
        $nav.removeClass('navbar-collapsed-out');
        $navTop.removeClass('navbar-collapsed-out');
	}


	// Events

    if ($collapse.length) {
    	$collapse.on({
    		'show.bs.collapse': function() {
    			showNavbarCollapse($collapse);
    		}
    	})

        $collapse.on({
    		'hide.bs.collapse': function() {
                hideNavbarCollapse($collapse);
    		}
    	})

        $collapse.on({
    		'hidden.bs.collapse': function() {
                hiddenNavbarCollapse($collapse);
    		}
    	})
    }

})();


//
// Sticky Navbar
//

var NavbarSticky = (function() {

	// Variables

	var $nav = $('.navbar-sticky');


	// Methods

	function init($this) {

		var scrollTop = $(window).scrollTop(); // our current vertical position from the top

		// if we've scrolled more than the navigation, change its position to fixed to stick to top,
		// otherwise change it back to relative
		if (scrollTop > (navOffsetTop + 200)) {
			$this.addClass('sticky');
		} else {
			$this.removeClass('sticky');
		}
	}


	// Events

	if ($nav.length) {

        var navOffsetTop = $nav.offset().top;

		// Init sticky navbar
		init($nav);

		// re-calculate stickyness on scroll
		$(window).on({
			'scroll': function() {
				init($nav);
			}
		})
	}
})();

//
// Popover
//

'use strict';

var Popover = (function() {

	// Variables

	var $popover = $('[data-toggle="popover"]'),
		$popoverClass = '';


	// Methods

	function init($this) {
		if ($this.data('color')) {
			$popoverClass = 'popover-' + $this.data('color');
		}

		var options = {
			template: '<div class="popover ' + $popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		};

		$this.popover(options);
	}


	// Events

	if ($popover.length) {
		$popover.each(function() {
			init($(this));
		});
	}

})();

//
// Scroll to (anchor links)
//

'use strict';

var ScrollTo = (function() {

	//
	// Variables
	//

	var $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a');


	//
	// Methods
	//

	function scrollTo($this) {
		var $el = $this.attr('href');
        var offset = $this.data('scroll-to-offset') ? $this.data('scroll-to-offset') : 0;
		var options = {
			scrollTop: $($el).offset().top - offset
		};

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate(options, 600);

        event.preventDefault();
	}


	//
	// Events
	//

	if ($scrollTo.length) {
		$scrollTo.on('click', function(event) {
			scrollTo($(this));
		});
	}

})();

//
// Scrollbar
//

'use strict';

var Scrollbar = (function() {

	// Variables

	var $scrollbar = $('.scrollbar-inner');


	// Methods

	function init() {
		$scrollbar.scrollbar().scrollLock()
	}


	// Events

	if ($scrollbar.length) {
		init();
	}

})();

//
// Spotlight
//

'use strict';

var Spotlight = (function() {

	// Variables

	var $spotlight = $('.spotlight');


	// Methods

	function init($this) {

		var holderHeight;

		if ($this.data('spotlight') == 'fullscreen') {
			if ($this.data('spotlight-offset')) {
				var offsetHeight = $('body').find($this.data('spotlight-offset')).height();
				holderHeight = $(window).height() - offsetHeight;
			} else {
				holderHeight = $(window).height();
			}

			if ($(window).width() > 991) {
				$this.find('.spotlight-holder').css({
					'height': holderHeight + 'px'
				});
			} else {
				$this.find('.spotlight-holder').css({
					'height': 'auto'
				});
			}
		}
	}


	// Events

	$(window).on({
		'load resize': function() {
			if ($spotlight.length) {
				$spotlight.each(function() {
					init($(this));
				});
			}
		}
	})

})();

//
// Sticky
//

'use strict';

var Sticky = (function() {

	//
	// Variables
	//

	var $sticky = $('[data-toggle="sticky"]');


	//
	// Methods
	//

	function init($this) {

		var offset = $this.data('sticky-offset') ? $this.data('sticky-offset') : 0;
		var options = {
			'offset_top': offset
		};

		$this.stick_in_parent(options);
	}


	//
	// Events
	//

	if ($sticky.length) {

		// Init selects
		$sticky.each(function() {
			init($(this));
		});
	}

})();

//
// Swiper
// init of plugin Swiper JS
//

'use strict';

var WpxSwiper = (function() {

	// Variables

	var $swiperContainer = $(".swiper-js-container"),
	 	animEndEv = 'webkitAnimationEnd animationend';


	// Methods

	function init($this) {

		// Swiper elements

        var $el = $this.find('.swiper-container'),
			pagination = $this.find('.swiper-pagination'),
			navNext = $this.find('.swiper-button-next'),
			navPrev = $this.find('.swiper-button-prev');


		// Swiper options

        var effect = $el.data('swiper-effect') ? $el.data('swiper-effect') : 'slide',
        	direction = $el.data('swiper-direction') ? $el.data('swiper-direction') :  'horizontal',
			initialSlide = $el.data('swiper-initial-slide') ? $el.data('swiper-initial-slide') : 0,
			autoHeight = $el.data('swiper-autoheight') ? $el.data('swiper-autoheight') : false,
			autoplay = $el.data('swiper-autoplay') ? $el.data('swiper-autoplay') : false,
			centeredSlides = $el.data('swiper-centered-slides') ? $el.data('swiper-centered-slides') : false;


		// Items per slide

        var items = $el.data('swiper-items');
        var itemsSm = $el.data('swiper-sm-items');
        var itemsMd = $el.data('swiper-md-items');
        var itemsLg = $el.data('swiper-lg-items');
		var itemsXl = $el.data('swiper-xl-items');


		// Space between items

        var spaceBetween = $el.data('swiper-space-between');
        var spaceBetweenSm = $el.data('swiper-sm-space-between');
        var spaceBetweenMd = $el.data('swiper-md-space-between');
        var spaceBetweenLg = $el.data('swiper-lg-space-between');
		var spaceBetweenXl = $el.data('swiper-xl-space-between');


		// Slides per view written in data attributes for adaptive resoutions

        items = items ? items : 1;
        itemsSm = itemsSm ? itemsSm : items;
		itemsMd = itemsMd ? itemsMd : itemsSm;
        itemsLg = itemsLg ? itemsLg : itemsMd;
        itemsXl = itemsXl ? itemsXl : itemsLg;


        // Space between slides written in data attributes for adaptive resoutions

        spaceBetween = !spaceBetween ? 0 : spaceBetween;
        spaceBetweenSm = !spaceBetweenSm ? spaceBetween : spaceBetweenSm;
        spaceBetweenMd = !spaceBetweenMd ? spaceBetweenSm : spaceBetweenMd;
        spaceBetweenLg = !spaceBetweenLg ? spaceBetweenMd : spaceBetweenLg;
		spaceBetweenXl = !spaceBetweenXl ? spaceBetweenLg : spaceBetweenXl;

		var $swiper = new Swiper($el, {
            pagination: {
                el: pagination,
                clickable: true
            },
            navigation: {
                nextEl: navNext,
                prevEl: navPrev,
            },
            slidesPerView: items,
            spaceBetween: spaceBetween,
            initialSlide: initialSlide,
            autoHeight: autoHeight,
            centeredSlides: centeredSlides,
            mousewheel: false,
			keyboard: {
			    enabled: true,
			    onlyInViewport: false,
			},
            grabCursor: true,
			autoplay: autoplay,
            effect: effect,
            coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 50,
                modifier: 3,
                slideShadows: false
            },
            speed: 800,
            direction: direction,
            preventClicks: true,
            preventClicksPropagation: true,
            observer: true,
            observeParents: true,
			breakpointsInverse: true,
			breakpoints: {
                575: {
                    slidesPerView: itemsSm,
                    spaceBetweenSlides: spaceBetweenSm
                },
                767: {
                    slidesPerView: itemsMd,
                    spaceBetweenSlides: spaceBetweenMd
                },
                991: {
                    slidesPerView: itemsLg,
                    spaceBetweenSlides: spaceBetweenLg
                },
                1199: {
                    slidesPerView: itemsXl,
                    spaceBetweenSlides: spaceBetweenXl
                }
            }
        });

		console.log($swiper.params);
	}


	// Events
	$(document).ready(function() {
		if ($swiperContainer.length) {
			$swiperContainer.each(function(i, swiperContainer) {
				init($(swiperContainer));
			})
		}
	})


})();

//
// Tags input
//

'use strict';

var Tags = (function() {

	//
	// Variables
	//

	var $tags = $('[data-toggle="tags"]');


	//
	// Methods
	//

	function init($this) {

		var options = {
			tagClass: 'badge badge-primary'
		};

		$this.tagsinput(options);
	}


	//
	// Events
	//

	if ($tags.length) {

		// Init selects
		$tags.each(function() {
			init($(this));
		});
	}

})();

//
// Tooltip
//

'use strict';

var Tooltip = (function() {

	// Variables

	var $tooltip = $('[data-toggle="tooltip"]');


	// Methods

	function init() {
		$tooltip.tooltip();
	}


	// Events

	if ($tooltip.length) {
		init();
	}

})();

//
// Typed
// text typing animation
//

'use strict';

var Typed = (function() {

	// Variables

	var typed = '.typed',
		$typed = $(typed);


	// Methods

	function init($this) {
		var el = '#' + $this.attr('id'),
        	strings = $this.data('type-this'),
			strings = strings.split(',');

		var options = {
			strings: strings,
            typeSpeed: 100,
            backSpeed: 70,
            loop: true
		};

        var animation = new Typed(el, options);

		inView(el).on('enter', function() {
			animation.start();
		}).on('exit', function() {
			animation.stop();
		});
	}


	// Events

	if ($typed.length) {
		$typed.each(function() {
			init($(this));
		});
	}

})();
