import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { PromoSection } from "./sections/PromoSection";
import { ServiceGallerySection } from "./sections/ServiceGallerySection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Header Section */}
        <Header />

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
};