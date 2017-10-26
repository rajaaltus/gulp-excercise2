import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

//Javascript Mobile Menu
var mobileMenu = new MobileMenu();

//javascript reveal on scoll for sections
new RevealOnScroll($(".icon-section__section-block"), "55%");
new RevealOnScroll($(".two-column-section"), "55%");
new RevealOnScroll($(".newsletter"), "55%");
