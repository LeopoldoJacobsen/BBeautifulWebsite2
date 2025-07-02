import { PhoneIcon, MapPinIcon, ClockIcon, Facebook, Instagram } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const PromoSection = (): JSX.Element => {
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5 text-[#c292a1]" />,
      text: "1 (678) 404-5969",
      label: "Call Us"
    },
    {
      icon: <MapPinIcon className="w-5 h-5 text-[#c292a1]" />,
      text: "Chamblee, GA",
      label: "Visit Us"
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-[#c292a1]" />,
      text: "Mon-Sat: 9AM-7PM",
      label: "Hours"
    },
  ];

  const socialMedia = [
    { 
      icon: <Facebook className="w-6 h-6" />, 
      label: "Facebook" 
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      label: "Instagram" 
    },
  ];

  const treatmentCategories = [
    {
      title: "Facial Treatments",
      treatments: ["Botox", "Fillers & Collagen", "Microneedling", "VI Peel"]
    },
    {
      title: "Skin Care",
      treatments: ["Classic Facial", "LED Light Therapy", "Microdermabrasion", "Chemical Peels"]
    },
    {
      title: "Wellness",
      treatments: ["Weight Loss Programs", "IV Therapy", "PRP Treatments", "Hormone Therapy"]
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#f8f5f0] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-[#a78351] text-lg tracking-[4px] mb-8 uppercase">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={`contact-${index}`} className="group">
                    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#a78351] mb-1">
                          {item.label}
                        </p>
                        <p className="text-[#3b2129] font-medium">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="border-[#dabcc6]" />

            <div>
              <h4 className="font-bold text-[#a78351] text-sm tracking-[3px] mb-6 uppercase">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialMedia.map((item, index) => (
                  <button
                    key={`social-${index}`}
                    className="w-12 h-12 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-all duration-300 hover:scale-110 group text-white"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold text-[#a78351] text-lg tracking-[4px] mb-8 uppercase">
              Our Services
            </h3>

            <div className="space-y-8">
              {treatmentCategories.map((category, categoryIndex) => (
                <div key={`category-${categoryIndex}`}>
                  <h4 className="font-semibold text-[#874c62] text-base mb-4">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.treatments.map((treatment, index) => (
                      <div
                        key={`treatment-${categoryIndex}-${index}`}
                        className="flex items-center space-x-3 p-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200"
                      >
                        <div className="w-3 h-3 bg-[#c292a1] rounded-full flex-shrink-0"></div>
                        <span className="text-[#3b2129] font-medium text-sm">
                          {treatment}
                        </span>
                      </div>
                    ))}
                  </div>
                  {categoryIndex < treatmentCategories.length - 1 && (
                    <Separator className="mt-6 border-[#dabcc6]/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};