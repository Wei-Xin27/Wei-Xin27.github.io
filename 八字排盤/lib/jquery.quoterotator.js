/*
	Author: http://codecanyon.net/user/sike?ref=sike
*/
var easeInTypeArr = ['rollIn', 'fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'fadeInLeftBig', 'fadeInRightBig', 'fadeInUpBig', 'fadeInDownBig', 'flipInX', 'flipInY', 'lightSpeedIn', 'tada', 'swing', 'shake', 'wobble', 'wiggle', 'pulse'];
var easeOutTypeArr = ['rollOut', 'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'bounceOut', 'bounceOutDown', 'bounceOutUp', 'bounceOutLeft', 'bounceOutRight', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'fadeOutLeftBig', 'fadeOutRightBig', 'fadeOutUpBig', 'fadeOutDownBig', 'flipOutX', 'flipOutY', 'lightSpeedOut'];
(function($) {
    $.fn.quoteRotator = function(options) {
		var settings = {
			container: '.word-container',
			// the default ease in animation
			easeIn: 'fadeInLeft',
			// the default ease out animation
			easeOut: 'fadeOutLeft',
			// the optional ease in array, set it to null if you want to use all the available animation
			easeInTypeArr: ['fadeIn', 'fadeInDown', 'fadeInUp', 'fadeInLeft', 'fadeInRight', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight'],
			// the optional ease out array, set it to null if you want to use all the available animation
			easeOutTypeArr: ['fadeOutLeft', 'fadeOutRight', 'fadeOutUp', 'fadeOutDown', 'rollOut', 'bounceOut', 'lightSpeedOut'],
			slideshow: true,
			//slideshowDelay: 3000,
			slideshowDelay: 4000,
			//hoverToPause: false,
			hoverToPause: true,
			clickToNext: true
		};

        if (options) {
			$.extend(settings, options);
		}

		var _this = this;
		var _textArr = [];
		var _authorArr = [];
		var _easeinArr = [];
		var _easeoutArr = [];
		var _linkArr = [];
		var _linkindexArr = [];
		var _authorLinkindexArr = [];
		$(settings.container, _this).find('li').each(function(index) {
			_textArr[index] = $(this).text();
			_authorArr[index] = $(this).data('author');
			_easeinArr[index] = $(this).data('easein');
			_easeoutArr[index] = $(this).data('easeout');
			_linkArr[index] = $(this).data('link');
			_linkindexArr[index] = $(this).data('linkword');
			_authorLinkindexArr[index] = $(this).data('authorlink');
		});

		var _quote = $('.quote', _this);
		var _quoteContent = $('.quote-content', _this);
		var _author = $('.quote-author', _this);

		var _currentIndex = 0;
		_this.data('_currentIndex', _currentIndex);
		var _easeInTypeArr = settings.easeInTypeArr || easeInTypeArr;
		var _easeOutTypeArr = settings.easeOutTypeArr || easeOutTypeArr;
		var _easeInTypeNum = _easeInTypeArr.length;
		var _easeOutTypeNum = _easeOutTypeArr.length;
		if(settings.clickToNext) _this.on('click', quoteOut);
		if(settings.hoverToPause){
			if(settings.slideshow){
				_this.on('mouseover', function(event) {
					clearTimeout(_this.data('_timerID'));
				}).on('mouseleave', function(event) {
					clearTimeout(_timerID);
					_timerID = setTimeout(function() {
						quoteOut(null);
					}, settings.slideshowDelay);
					_this.data('_timerID', _timerID);
				});
			}
		}

		function quoteLink() {
			if(_authorLinkindexArr[_currentIndex]&&_author){
				_author.css('cursor', 'pointer').addClass('link').on('click', {url: _authorLinkindexArr[_currentIndex]}, _openLink);
			}else{
				_author.css('cursor', 'default').removeClass('link').off('click');
			}
			if(_linkindexArr[_currentIndex]=='all'&&_quoteContent){
				_quoteContent.css('cursor', 'pointer').addClass('link').on('click', {url: _linkArr[_currentIndex]}, _openLink);
			}else{
				_quoteContent.css('cursor', 'default').removeClass('link').off('click');
			}

		}

		function _openLink(event) {
			window.location = event.data.url;
		}


		var _timerID = 0;
		var _tweenID = 0;
		function quoteOut(event){
			clearTimeout(_this.data('_timerID'));
			var _quoteTextLen = _textArr[_currentIndex].split(' ').length;
			var _easeOut = _easeoutArr[_currentIndex] || settings.easeOut;
			_quoteContent.find('span').each(function(index) {
				if(_easeoutArr[_currentIndex]){
					$(this).removeClass().addClass('quick animate'+ Math.floor(Math.random()*_easeOutTypeNum/2) + ' '+_easeOut);
				}else{
					var _easeOutType = _easeOutTypeArr[Math.floor(Math.random()*_easeOutTypeNum)];
					$(this).removeClass().addClass('quick animate'+ Math.floor(Math.random()*_easeOutTypeNum/2) + ' '+_easeOutType);
				}
			});
			_author.find('span').each(function(index) {
				if(_easeoutArr[_currentIndex]){
					$(this).removeClass().addClass('quick animate'+ Math.floor(Math.random()*_easeOutTypeNum/2) + ' '+_easeOut);
				}else{
					var _easeOutType = _easeOutTypeArr[Math.floor(Math.random()*_easeOutTypeNum)];
					$(this).removeClass().addClass('quick animate'+ Math.floor(Math.random()*_easeOutTypeNum/2) + ' '+_easeOutType);
				}
			});
			clearTimeout(_tweenID);
			_tweenID = setTimeout(function() {
				_currentIndex++;
				if(_currentIndex>_textArr.length-1) _currentIndex = 0;
				_this.data('_currentIndex', _currentIndex);
				quoteIn();
			}, _quoteTextLen*.5*100);

		}

		quoteIn();
		var _preTextArr = [];
		var _preAuthorArr = [];
		function quoteIn(){
			_quoteContent.empty();
			_author.empty();
			quoteLink();
			var _quoteTextLen = _textArr[_currentIndex].split(' ').length;
			var _easeIn = _easeinArr[_currentIndex] || settings.easeIn;
			var _n = 0;
			$.each(_textArr[_currentIndex].split(' '), function (k, v) {
				// has the link
				if(_linkArr[_currentIndex]){
					// has the link index, which word is the link
					if(parseInt(_linkindexArr[_currentIndex])==k){
						if(_easeinArr[_currentIndex]){
							_quoteContent.append('<span class="animate' + k + ' ' + _easeIn + '" data-easein="'+_easeIn+'">' + '<a href="' + _linkArr[_currentIndex] + '">' + v + '</a></span>' + ' ');
						}else{
							var _easeType = _easeInTypeArr[Math.floor(Math.random()*_easeInTypeNum)];
						    _quoteContent.append('<span class="animate' + k + ' ' + _easeType + '" data-easein="'+ _easeType+'">' + '<a href="' + _linkArr[_currentIndex] + '">' + v + '</a></span>' + ' ');
						}
					// other word without link, works as normal
					}else{
						if(_easeinArr[_currentIndex]){
							_quoteContent.append('<span class="animate' + k + ' ' + _easeIn + '" data-easein="'+_easeIn+'">' + v + '</span>' + ' ');
						}else{
							var _easeType = _easeInTypeArr[Math.floor(Math.random()*_easeInTypeNum)];
						    _quoteContent.append('<span class="animate' + k + ' ' + _easeType + '" data-easein="'+ _easeType+'">' + v + '</span>' + ' ');
						}

					}
				// without the link, works as the first verstion
				}else{
					if(_easeinArr[_currentIndex]){
						_quoteContent.append('<span class="animate' + k + ' ' + _easeIn + '" data-easein="'+_easeIn+'">' + v + '</span>' + ' ');
					}else{
						var _easeType = _easeInTypeArr[Math.floor(Math.random()*_easeInTypeNum)];
					    _quoteContent.append('<span class="animate' + k + ' ' + _easeType + '" data-easein="'+ _easeType+'">' + v + '</span>' + ' ');
					}
				}

			});

			$.each(_authorArr[_currentIndex].split(' '), function (k, v) {
				_n++;
				// if(settings.random){
				if(_easeinArr[_currentIndex]){
				    _author.append('<span class="animate' + (_quoteTextLen + k) + ' ' + _easeIn + '" data-easein="' + _easeIn+'">' + v + '</span>' + ' ');
				}else{
					var _easeType = _easeInTypeArr[Math.floor(Math.random()*_easeInTypeNum)];
				    _author.append('<span class="animate' + (_quoteTextLen + k) + ' ' + _easeType + '" data-easein="'+ _easeType +'">' + v + '</span>' + ' ');
				}
			});


			if(settings.slideshow){
				clearTimeout(_timerID);
				_timerID = setTimeout(function() {
					quoteOut(null);
				}, (_quoteTextLen + _n + 1)*200 + settings.slideshowDelay);
				_this.data('_timerID', _timerID);
			}

		}

		return this;

	};

})(jQuery);
