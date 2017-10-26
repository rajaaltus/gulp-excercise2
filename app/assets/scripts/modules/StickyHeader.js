import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.triggerElement = $(".large-hero__content");
		this.stickyHeader = $(".sticky-header");
		this.showOnScroll();
	}

	showOnScroll() {
		var that = this;
		
		new Waypoint({
			element: this.triggerElement[0],
			handler: function(direction) {
				if (direction=='down') {
					that.stickyHeader.addClass("sticky-header--is-visible");
					console.log(that.stickyHeader.attr('class'));	
				}
				else {
					that.stickyHeader.removeClass("sticky-header--is-visible");
					console.log(that.stickyHeader.attr('class'));
				}
				
			}
			
		});
	}

}

export default StickyHeader;