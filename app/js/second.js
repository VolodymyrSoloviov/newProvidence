$(function () {

	$('.customers__arrowRight').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
				container = $this.closest('.customers__wrap'),
				items = container.find('.customers__item'),
				active = items.filter('.customers__item_active'),
				reqItem = active.next(),
				items2 = container.find('.customers__listText-item'), //new
				active2 = items2.filter('.customers__listText-item_active'), //new
				reqItem2 = active2.next(), //new
				reqIndex = reqItem.index(),
				list = container.find('.customers__list');

				if (reqItem.length) {
					active.removeClass('customers__item_active');
					reqItem.addClass('customers__item_active');
					active2.removeClass('customers__listText-item_active');
					reqItem2.addClass('customers__listText-item_active');
				}
				
	});

	$('.customers__arrowLeft').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
				container = $this.closest('.customers__wrap'),
				items = container.find('.customers__item'),
				active = items.filter('.customers__item_active'),
				reqItem = active.prev(),
				items2 = container.find('.customers__listText-item'), //new
				active2 = items2.filter('.customers__listText-item_active'), //new
				reqItem2 = active2.prev(), //new
				reqIndex = reqItem.index(),
				list = container.find('.customers__list');

				if (reqItem.length) {
					active.removeClass('customers__item_active');
					reqItem.addClass('customers__item_active');
					active2.removeClass('customers__listText-item_active');
					reqItem2.addClass('customers__listText-item_active');
				}
					
	});

});