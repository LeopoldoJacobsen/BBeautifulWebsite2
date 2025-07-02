import React from "react";

export const ServiceGallerySection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#a87b96] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Logo */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2">Bbeautiful</h2>
            <p className="text-lg text-white/80 font-medium">Medical Spa</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#c49cb4] text-sm leading-relaxed">
            <span className="font-normal">
              Copyright ©2025 Bbeautiful Medical Spa. All rights reserved.
            </span>
            <br className="sm:hidden" />
            <span className="font-normal">
              {" "}Designed by{" "}
              <span className="font-medium hover:text-white transition-colors duration-200 cursor-pointer">
                GoGlow Media
              </span>
            </span>
          </p>
        </div>
        
        {/* Additional Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-[#c49cb4]/30">
          <a href="#" className="text-[#c49cb4] hover:text-white text-sm transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="text-[#c49cb4] hover:text-white text-sm transition-colors duration-200">
            Terms of Service
          </a>
          <a href="#" className="text-[#c49cb4] hover:text-white text-sm transition-colors duration-200">
            Accessibility
          </a>
        </div>
      </div>
    </footer>
  );
};