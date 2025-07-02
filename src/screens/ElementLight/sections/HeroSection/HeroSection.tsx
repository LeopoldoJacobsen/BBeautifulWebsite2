import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const location = useLocation();
  
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

  return (
    <nav className="w-full bg-[#c292a1] shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-wrap justify-center lg:justify-between w-full py-4">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={`nav-${index}`} className="relative">
                <NavigationMenuLink asChild>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 font-medium text-xs tracking-wider hover:bg-white/10 ${
                      item.active 
                        ? "text-white bg-[#874c62]" 
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.text}
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>
                </NavigationMenuLink>
                {item.active && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#ead5c4] rounded-t-md" />
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};