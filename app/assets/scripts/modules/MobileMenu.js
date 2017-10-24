import $ from 'jquery';


class MobileMenu {

	constructor() {
		this.menu = $(".site-header__menu");
		this.menuIcon = $(".site-header__menu-icon");
		this.events();

	}
	events() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
		this.menu.toggleClass("site-header__menu--is-visible");
		

	}


}

export default MobileMenu;