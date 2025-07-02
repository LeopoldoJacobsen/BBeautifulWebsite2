import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const navItems = [
    { text: "HOME", path: "/", active: location.pathname === "/" },
    { 
      text: "INJECTABLES", 
      hasDropdown: true,
      active: location.pathname.includes("/injectables"),
      dropdownItems: [
        { text: "Botox", path: "/injectables/botox-chamblee-ga" },
        { text: "Fillers & Collagen", path: "/injectables/fillers-collagen-chamblee" },
        { text: "VI Peel", path: "/injectables/vi-peel-chamblee" },
        { text: "Microneedling", path: "/injectables/microneedling-chamblee" },
      ]
    },
    { 
      text: "FACIALS", 
      hasDropdown: true,
      active: location.pathname.includes("/facials"),
      dropdownItems: [
        { text: "Classic Facial", path: "/facials/classic-facial-chamblee" },
        { text: "LED Light Therapy Facial", path: "/facials/led-light-therapy-facial" },
        { text: "Microdermabrasion Facial", path: "/facials/microdermabrasion-facial" },
        { text: "Everything Beautiful Facial", path: "/facials/everything-beautiful-facial" },
      ]
    },
    { 
      text: "WELLNESS", 
      hasDropdown: true,
      active: location.pathname.includes("/wellness"),
      dropdownItems: [
        { text: "Weight Loss Programs", path: "/wellness/weight-loss-semaglutide-chamblee" },
        { text: "IV Hydration", path: "/wellness/iv-hydration-therapy" },
      ]
    },
    { text: "MEMBERSHIP", path: "/vip-membership", active: location.pathname === "/vip-membership" },
    { text: "GIFT CARDS", path: "/gift-cards", active: location.pathname === "/gift-cards" },
    { text: "ABOUT", path: "/about", active: location.pathname === "/about" },
    { text: "CONTACT", path: "/contact", active: location.pathname === "/contact" },
  ];

  return (
    <>
      {/* Top Bar with Hours */}
      <div className="w-full bg-[#874c62] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center text-sm font-medium">
            <span className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
              </svg>
              <span>Operating Hours: Wednesday & Friday 9 AM - 5 PM</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-[#c292a1] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex justify-center w-full py-4 space-x-2">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={`nav-${index}`} className="relative">
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-sm tracking-[1px] hover:bg-white/15 hover:scale-105 ${
                          item.active 
                            ? "text-white bg-[#874c62] shadow-md" 
                            : "text-white/95 hover:text-white"
                        }`}>
                          {item.text}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                              <NavigationMenuLink key={`dropdown-${index}-${dropdownIndex}`} asChild>
                                <Link
                                  to={dropdownItem.path}
                                  className="block px-4 py-3 text-gray-700 hover:bg-[#f8f5f0] hover:text-[#874c62] rounded-lg transition-all duration-200 font-medium text-sm"
                                >
                                  {dropdownItem.text}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-sm tracking-[1px] hover:bg-white/15 hover:scale-105 ${
                            item.active 
                              ? "text-white bg-[#874c62] shadow-md" 
                              : "text-white/95 hover:text-white"
                          }`}
                        >
                          {item.text}
                        </Link>
                      </NavigationMenuLink>
                    )}
                    {item.active && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#ead5c4] rounded-t-md" />
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between py-4">
              {/* Left side - empty for balance */}
              <div className="w-10"></div>
              
              {/* Center - Menu text */}
              <span className="text-white font-semibold text-base tracking-[1px]">MENU</span>
              
              {/* Right side - Hamburger menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/15 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-[#c292a1] border-t border-[#874c62] shadow-xl z-50">
                <div className="max-w-7xl mx-auto px-4 py-6">
                  <div className="grid grid-cols-1 gap-2">
                    {navItems.map((item, index) => (
                      <div key={`mobile-nav-${index}`}>
                        {item.hasDropdown ? (
                          <>
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.text ? null : item.text)}
                              className={`w-full flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-200 font-semibold text-base ${
                                item.active 
                                  ? "text-white bg-[#874c62] shadow-md" 
                                  : "text-white/95 hover:text-white hover:bg-white/15"
                              }`}
                            >
                              <span>{item.text}</span>
                              <ChevronDownIcon 
                                className={`w-5 h-5 transition-transform duration-200 ${
                                  activeDropdown === item.text ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                            {activeDropdown === item.text && (
                              <div className="ml-4 mt-2 space-y-2">
                                {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                  <Link
                                    key={`mobile-dropdown-${index}-${dropdownIndex}`}
                                    to={dropdownItem.path}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                    className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium text-sm"
                                  >
                                    {dropdownItem.text}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center px-6 py-4 rounded-xl transition-all duration-200 font-semibold text-base ${
                              item.active 
                                ? "text-white bg-[#874c62] shadow-md" 
                                : "text-white/95 hover:text-white hover:bg-white/15"
                            }`}
                          >
                            <span>{item.text}</span>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
