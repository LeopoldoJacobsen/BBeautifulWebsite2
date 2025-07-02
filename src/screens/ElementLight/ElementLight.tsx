import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { HeroSection } from "./sections/HeroSection";
import { PromoSection } from "./sections/PromoSection";
import { ServiceGallerySection } from "./sections/ServiceGallerySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Fixed Header Section */}
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              {/* Logo Section - Left Aligned */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
                  <div className="text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#c292a1] leading-none mb-1">
                      Bbeautiful
                    </h1>
                    <p className="text-base sm:text-lg text-[#a78351] font-medium tracking-[2px] uppercase">
                      Medical Spa
                    </p>
                  </div>
                </a>
              </div>

              {/* Contact Information - Right Side */}
              <div className="flex items-center space-x-4">
                {/* Book Now Button */}
                <Button className="hidden sm:flex bg-gradient-to-r from-[#c292a1] to-[#a87b96] hover:from-[#b08291] hover:to-[#96697f] text-white font-bold text-sm tracking-[2px] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  BOOK NOW
                </Button>

                {/* Phone Number */}
                <a 
                  href="tel:(678) 404-5969" 
                  className="flex items-center space-x-2 bg-[#874c62] hover:bg-[#6d3a4f] text-white px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-bold shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="hidden sm:inline">(678) 404-5969</span>
                </a>

                {/* Social Media Icons */}
                <div className="hidden md:flex items-center space-x-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-colors duration-200 shadow-md"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bbeautifulmedicalspa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-colors duration-200 shadow-md"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <HeroSection />

        {/* Main Content Sections */}
        <main>
          <TestimonialsSection />
          <PromoSection />
        </main>

        {/* Footer */}
        <ServiceGallerySection />

        {/* Back to Top Button */}
        <Button
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#c292a1] hover:bg-[#b08291] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpIcon className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
}
