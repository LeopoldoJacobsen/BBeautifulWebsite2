import { ChevronDownIcon, MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const navItems = [
    { text: "HOME", path: "/", active: location.pathname === "/", hasDropdown: false },
    { text: "FACIAL REJUVENATION", path: "/facial-rejuvenation", active: location.pathname === "/facial-rejuvenation", hasDropdown: true },
    { text: "MEDICAL AESTHETICS", path: "/medical-aesthetics", active: location.pathname === "/medical-aesthetics", hasDropdown: false },
    { text: "HEALTH & WELLNESS", path: "/health-wellness", active: location.pathname === "/health-wellness", hasDropdown: true },
    { text: "VIP MEMBERSHIP", path: "/vip-membership", active: location.pathname === "/vip-membership", hasDropdown: false },
    { text: "GIFT CARDS", path: "/gift-cards", active: location.pathname === "/gift-cards", hasDropdown: false },
    { text: "ABOUT", path: "/about", active: location.pathname === "/about", hasDropdown: true },
    { text: "CONTACT", path: "/contact", active: location.pathname === "/contact", hasDropdown: false },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-4 w-4 text-[#c292a1]" />,
      text: "1 (678) 404-5969",
      alt: "Phone",
    },
  ];

  return (
    <header className="w-full bg-white shadow-lg relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#f8f5f0] border-b border-[#e6d5c3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              {contactInfo.map((item, index) => (
                <div key={`contact-${index}`} className="flex items-center space-x-2">
                  {item.icon}
                  <a 
                    href={`tel:${item.text.replace(/\D/g, '')}`}
                    className="text-sm text-gray-700 font-medium hover:text-[#c292a1] transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
              <div className="hidden sm:block text-sm text-gray-600">
                Hours: Mon-Sat 9AM-7PM
              </div>
            </div>
            
            {/* Social Media & CTA */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-3.832 9.405c-2.5 0-4.531-2.031-4.531-4.531s2.031-4.531 4.531-4.531 4.531 2.031 4.531 4.531-2.031 4.531-4.531 4.531z"/>
                  </svg>
                </a>
              </div>
              <Button 
                size="sm" 
                className="bg-[#c292a1] hover:bg-[#b08291] text-white font-semibold text-xs tracking-wider px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="./bbeautiful-logo.png" 
                alt="Bbeautiful Medical Spa & Wellness Center" 
                className="h-12 sm:h-16 lg:h-20 transition-all duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                {navItems.slice(0, 4).map((item, index) => (
                  <Link
                    key={`nav-${index}`}
                    to={item.path}
                    className={`flex items-center text-sm font-medium tracking-wide transition-all duration-200 hover:text-[#c292a1] ${
                      item.active 
                        ? "text-[#c292a1] border-b-2 border-[#c292a1] pb-1" 
                        : "text-gray-700 hover:border-b-2 hover:border-[#c292a1]/30 pb-1"
                    }`}
                  >
                    {item.text}
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-3 h-3 ml-1 transition-transform duration-200 hover:rotate-180" />
                    )}
                  </Link>
                ))}
              </nav>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#c292a1] to-[#a87b96] hover:from-[#b08291] hover:to-[#96697f] text-white font-bold text-sm tracking-wider px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                BOOK CONSULTATION
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#c292a1] hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <nav className="bg-[#c292a1] shadow-md sticky top-0 z-40 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex justify-center w-full py-3">
              {navItems.slice(4).map((item, index) => (
                <NavigationMenuItem key={`nav-sticky-${index}`} className="relative">
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className={`flex items-center px-6 py-2 rounded-lg transition-all duration-200 font-medium text-xs tracking-wider hover:bg-white/15 ${
                        item.active 
                          ? "text-white bg-[#874c62] shadow-md" 
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {item.text}
                      {item.hasDropdown && (
                        <ChevronDownIcon className="w-3 h-3 ml-2 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={`mobile-nav-${index}`}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active 
                    ? "bg-[#c292a1]/10 text-[#c292a1] font-semibold" 
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#c292a1]"
                }`}
              >
                <span className="font-medium text-sm tracking-wide">
                  {item.text}
                </span>
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-4 h-4" />
                )}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-200">
              <Button 
                className="w-full bg-gradient-to-r from-[#c292a1] to-[#a87b96] hover:from-[#b08291] hover:to-[#96697f] text-white font-bold text-sm tracking-wider py-3 rounded-lg transition-all duration-300 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK CONSULTATION
              </Button>
            </div>
            
            <div className="pt-4 flex justify-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-3.832 9.405c-2.5 0-4.531-2.031-4.531-4.531s2.031-4.531 4.531-4.531 4.531 2.031 4.531 4.531-2.031 4.531-4.531 4.531z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}; 