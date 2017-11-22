(function($) {
	function Photo_Box(opts) {
		this.settings = $.extend({}, $.fn.PhotoBox.defaults, opts);
		this.bodyDimension = {width:0,height:0};
		this.bodyDimension.width = $('body').width();
		this.bodyDimension.height = $('body').height();
		this.container = $("." + this.settings.containerClassName);
		this.IsDisplayed = false;
		this.animateVelocity = 3;
		this.init();
	}
	Photo_Box.prototype = {
		init: function() {
			var $this = this;
			this.initDOM();
			this.initSettings();
			this.rightArrow = $(".right-arrow");
			this.leftArrow = $(".left-arrow");
			this.pMainImage = $(".photobox-main-image");
			this.pMainContainer = $(".photobox-main-container");
			this.pOverlay = $(".photobox-overlay");
			this.lazyLoadImage = new Image();
			this.lazyLoadImage.onload = function() { $this.refreshBoxSize(this); };
			this.pMainImage.bind("onBoxImageShow", this.settings.onImageShow);
			
			// Prev & Next btn hover animation
			$(".photobox-a").hover(function() {
				$(this).fadeTo("fast", 1);
			}, function() {
				$(this).fadeTo("fast", 0.5);
			});
			
			// Photobox Close Title
			$(".photobox-close-btn").attr('title','Close');

			// Photobox stage close
			$(".photobox-close-btn").click(function() {
				$this.hide();
				return false;
			});
			$(".photobox-cancel").click(function() {
				$this.hide();
				return false;
			});
			$(".photobox-overlay").click(function() {
				$this.hide();
				return false;
			});
			// Left side overlay hover animation
			$(".photobox-container-left").hover(function() {
				$(".photobox-image-stage-overlay").fadeIn($this.settings.imageOverlayFadeSpeed);
			}, function() {
				$(".photobox-image-stage-overlay").fadeOut($this.settings.imageOverlayFadeSpeed);
			});
			
			// Setup click trigger
			$('.' + this.settings.containerClassName).on("click", "." + this.settings.imageClassName, function() {
				$this.show($(this));
			});
			
			// Handle left right click event
			this.leftArrow.click(function() {
				var image = $('.' + $this.settings.containerClassName + ' .' + $this.settings.imageClassName).get($this.leftArrow.attr("data-prev-index"));
				if (image) $this.show($(image));
			});
			this.rightArrow.click(function() {
				var image = $('.' + $this.settings.containerClassName + ' .' + $this.settings.imageClassName).get($this.rightArrow.attr("data-next-index"));
				if (image) $this.show($(image));
			});
		},
		show: function(image) {
			var index = $('.' + this.settings.containerClassName + ' .' + this.settings.imageClassName).index(image);
			this.pMainImage.attr('p-index', index);
			this.leftArrow.attr("data-prev-index", index - 1);
			this.rightArrow.attr("data-next-index", index + 1);
			this.pMainImage.attr('alt', image.attr('alt'));
			this.pMainImage.posX = image.offset().left;
			this.pMainImage.posY = image.offset().top;
			this.pMainImage.widthSrc = image.width();
			this.pMainImage.heightSrc = image.height();
			if (image.attr("photoboxsrc")) {
				this.lazyLoadImage.src = image.attr("photoboxsrc");
			}
			else {
				this.lazyLoadImage.src = image.attr("src");
			}
		},
		hide: function() {
			this.IsDisplayed = false;
			this.lazyLoadImage.src = '';
			var from = { posX: this.pMainImage.offset().left, posY: this.pMainImage.offset().top, widthSrc: this.pMainImage.width(), heightSrc: this.pMainImage.height()};
			var to = { posX: this.pMainImage.posX, posY: this.pMainImage.posY, widthSrc: this.pMainImage.widthSrc, heightSrc:this.pMainImage.heightSrc};
			var tmpNode = $('<img src=""/>').attr("src", this.pMainImage.attr("src"));
			this.pMainContainer.fadeOut({easing:'easeOutQuint', queue:false, duration:200});
			this.pOverlay.hide({easing:'easeOutQuint', queue:false, duration:200});
			this.photoTransitionAnimation(tmpNode, from, to, function() { tmpNode.remove(); });
			this.displayScroll();
		},
		initDOM: function() {
			var html = ['<div class="photobox-main-container">',
							'<div class="photobox-container-left">',					
								'<table class="photobox-main-image-table"><tr><td>',
									'<div><img class="photobox-main-image" src=""/></div>',
								'</td></tr></table>',		
								'<div class="photobox-image-stage-overlay">',
									'<div data-prev-index="" class="left-arrow">',
										'<table style="height:100%"><tr><td style="vertical-align:middle;">',
											'<a class="photobox-a" title="Previous"></a>',
										'</td></tr></table>',
									'</div>',
									'<div data-next-index="" class="right-arrow">',
										'<table style="height:100%;"><tr><td style="vertical-align:middle;">',
											'<a class="photobox-a" title="Next"></a>',
										'</td></tr></table>',
									'</div>',
								'</div>',
							'</div>',
							'<div class="photobox-container-right">',
								'<div class="photobox-close-btn">',
									'<div style="clear:both"></div>',
								'</div>',
								'<div class="photobox-image-content"></div>',
								'<div id="map">',
									'<div style="clear:both"></div>',
								'</div>',
								'<div class="photobox-container-bottom">',
									'<button class="photobox-book">Book</button><button class="photobox-cancel">Cancel</button>',
									'<div style="clear:both"></div>',
								'</div>',
							'</div>',
							'<div style="clear:both"></div>',
						'</div>',
						/*
						'<div class="photobox-fc-main-container">',
							'<div class="photobox-fc-header">',
								'<div style="float:left">Dummy Header</div>',
								'<a class="photobox-fc-close-btn" href="">Exit</a>',
								'<div style="clear:both"></div>',
							'</div>',
							'<div style="position:fixed;top:0px;right:0px;left:0px;bottom:0px;margin:auto;">',
								'<table style="width:100%;height:100%;text-align:center;">',
									'<tr>',
										'<td class="fc-left-arrow" style="width:50px;text-align:center;">',
											'<a class="photobox-a" title="Previous"></a>',
										'</td>',
										'<td>',
											'<img class="photobox-fc-main-image" src=""/>',
										'</td>',
										'<td class="fc-right-arrow" style="width:50px;text-align:center;">',
											'<a class="photobox-a" title="Next"></a>',
										'</td>',
									'</tr>',
								'</table>',
							'</div>',
						'</div>',
						*/
						'<div class="photobox-overlay"></div>',
						'<div style="clear:both"></div>'];
			$("body").append(html.join(""));
			this.settings.afterInitDOM();
		},
		initSettings: function() {
			if (this.settings.rightWidth != "") {
				$(".photobox-container-right").css("width", this.settings.rightWidth);
			}
			
			if (this.settings.leftBgColor != "") {
				$(".photobox-container-left").css("backgroundColor", this.settings.leftBgColor);
			}
			
			if (this.settings.rightBgColor != "") {
				$(".photobox-container-right").css("backgroundColor", this.settings.rightBgColor);
			}
			
			if (this.settings.overlayBgColor != "") {
				$(".photobox-overlay").css("backgroundColor", this.settings.overlayBgColor);
			}
			
			if (this.settings.overlayBgOpacity != "") {
				$(".photobox-overlay").css("opacity", this.settings.overlayBgOpacity);
			}
		},
		hideScroll: function() {
			$('body').css({width:$(window).width(),height:$(window).height(), overflow:"hidden"});
		},
		displayScroll: function() {
			$('body').css({width:this.bodyDimension.width, height:this.bodyDimension.height, overflow:"scroll"});
		},
		refreshBoxSize: function(image) {
			var isShow = image == null? false : true;
			image = image == null? this.lazyLoadImage : image;
			var leftContainer = $(".photobox-container-left");
			var rightContainer = $(".photobox-container-right");
			var imageWidth = image.width;
			var imageHeight = image.height;
			var maxWidth = Math.max($(window).width() - this.settings.rightWidth - this.settings.normalModeMargin*2, this.settings.minLeftWidth);
			var maxHeight = Math.max($(window).height() - this.settings.normalModeMargin*2, this.settings.minHeight);
			
			if (imageHeight < maxHeight) {
				leftContainer.height(imageHeight);
				this.pMainImage.css("max-height",imageHeight);
			}
			else {
				leftContainer.height(maxHeight);
				this.pMainImage.css("max-height",maxHeight);
			}
			if (imageWidth < maxWidth) {
				leftContainer.width(imageWidth);
				this.pMainImage.css("max-width",imageWidth);
			}
			else {
				leftContainer.width(maxWidth);
				this.pMainImage.css("max-width",maxWidth);
			}
						
			rightContainer.css("height", leftContainer.height());
			$(".photobox-image-content").css("height", leftContainer.height() - $(".photobox-close-btn").height());
			
			this.pMainContainer.css({
				width: (leftContainer.width() + rightContainer.width()),
				height: leftContainer.height()
			});
			if (isShow) {
				this.pMainImage.attr("src", "").attr("src", image.src);
				$(".photobox-fc-main-image").attr("src","").attr("src", image.src);
				if (!this.IsDisplayed)
				{
					if (navigator.appVersion.indexOf("MSIE 7.") != -1) this.repositionBox();
					$(".photobox-overlay").css("opacity",0).show();
					$(".photobox-main-container").css("opacity",0).show();
					var from = { posX: this.pMainImage.posX, posY: this.pMainImage.posY, widthSrc: this.pMainImage.widthSrc, heightSrc: this.pMainImage.heightSrc};
					var to = { posX: this.pMainImage.offset().left, posY: this.pMainImage.offset().top, widthSrc: this.pMainImage.width(), heightSrc: this.pMainImage.height()};
					var tmpNode = $('<img src=""/>').attr("src", image.src);
					this.photoTransitionAnimation(tmpNode, from, to, function() {
						$(".photobox-overlay").animate({opacity: 0.9}, {easing: 'easeOutQuint', queue: false, duration: 500});
						$(".photobox-main-container").animate({opacity: 1}, {easing: 'easeOutQuint', queue: false, duration: 500,
						complete: function() {
							tmpNode.remove();
						}
						});
					});
					this.IsDisplayed = true;
				}
				
				this.pMainImage.show(10000, function() { $(this).trigger("onBoxImageShow"); });
				
				//handle left right arrow
				var index = parseInt(this.pMainImage.attr('p-index'));
				if (index - 1 < 0) {
					this.leftArrow.hide();
					$(".fc-left-arrow a").hide();
				}
				else {
					this.leftArrow.show();
					$(".fc-left-arrow a").show();
				}
				if (index + 1 >= $('.' + this.settings.containerClassName + ' .' + this.settings.imageClassName).length) {
					this.rightArrow.hide();
					$(".fc-right-arrow a").hide();
				}
				else {
					this.rightArrow.show();
					$(".fc-right-arrow a").show();
				}
			}
		},
		repositionBox: function() {
			var container = $(".photobox-main-container");
			var left = ($(window).width() - container.width())/2;
			var top = ($(window).height() - container.height())/2;
			$(".photobox-main-container").css({left: left, top: top});
		},
		photoTransitionAnimation: function(image, from, to, callbackFunc) {
			var leftFrom = from.posX - parseInt($("body").css("margin-left"));
			var topFrom = from.posY - parseInt($("body").css("margin-top"));
			var leftTo = to.posX - parseInt($("body").css("margin-left"));
			var topTo = to.posY - parseInt($("body").css("margin-top"));
			image.css({
				top: topFrom,
				left: leftFrom,
				width: from.widthSrc,
				height: from.heightSrc,
				position: 'absolute',
				zIndex:999
			});
			$("body").append(image);
			image.animate({
				top: topTo,
				left: leftTo,
				width: to.widthSrc,
				height: to.heightSrc
			}, {duration:500, easing:'easeInOutCubic', complete: function() {
				callbackFunc();
			}, queue:false});
		}
	};
		
	$.fn.PhotoBox = function(options) {
		var args = Array.prototype.slice.call(arguments, 1);
		var item = $("body");
		var instance = item.data('Photo_Box');
		
		if (typeof options === 'string') {
			instance[options].apply(instance, args);
		}
		else {
			item.data('Photo_Box', new Photo_Box(options));
		}
	};
	
	$.fn.PhotoBox.defaults = {
		rightWidth: 360,
		minLeftWidth: 520,
		minHeight: 520,
		leftBgColor: "black",
		rightBgColor: "white",
		overlayBgColor: "black",
		overlayBgOpacity: 0.5,
		onImageShow: function() {},
		afterInitDOM: function() {},
		imageOverlayFadeSpeed: 150,
		normalModeMargin: 40,
		containerClassName: 'photobox',
		imageClassName: 'photobox-target-img'
	};
}(jQuery));