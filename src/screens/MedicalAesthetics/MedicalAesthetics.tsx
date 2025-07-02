import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Header } from "../../components/ui/header";
import { ServiceGallerySection } from "../ElementLight/sections/ServiceGallerySection";

export const MedicalAesthetics = (): JSX.Element => {

  const facialTreatments = [
    {
      title: "Bbeautiful Classic Facial",
      subtitle: "Elevate Your Radiance with the Classic Facial",
      description: "Indulge in the seven-step luxury of the Classic Facial. Cleanse, exfoliate, extract, tone, mask, serum, and moisturize for a rejuvenated glow. Unwind and embrace your inner beauty with this timeless ritual that leaves your skin feeling refreshed and radiant.",
      image: "./Medical.webp",
      steps: ["Cleanse", "Exfoliate", "Extract", "Tone", "Mask", "Serum", "Moisturize"]
    },
    {
      title: "Bbeautiful Lift with LED Facial",
      subtitle: "Ultimate Rejuvenation with the Lift with LED Facial",
      description: "Experience the ultimate rejuvenation with the Lift with LED Facial. Indulge in a transformative nine-step journey, from a purifying cleanse to a skin-renewing lift, enhanced by the illuminating power of LED therapy. Each step is meticulously crafted to enhance your natural beauty, unveiling a radiant, lifted glow.",
      image: "./Medical.webp",
      steps: ["Purifying Cleanse", "Exfoliation", "Extraction", "Toning", "LED Therapy", "Lifting Treatment", "Serum Application", "Mask", "Moisturization"]
    },
    {
      title: "Bbeautiful Microdermabrasion Facial",
      subtitle: "Transform Your Skin with Microdermabrasion",
      description: "Discover the allure Microdermabrasion treatment. Each stage, from a purifying cleanse to the precision of microdermabrasion, is meticulously curated for your skin's renewal. Revel in the radiant results as your skin undergoes a journey of cleansing, exfoliation, extraction, toning, masking, serum infusion, and ultimate moisturization.",
      image: "./Medical.webp",
      steps: ["Purifying Cleanse", "Microdermabrasion", "Extraction", "Toning", "Masking", "Serum Infusion", "Moisturization"]
    }
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Header Section */}
        <Header />

        {/* Hero Banner */}
        <section className="relative w-full h-[600px] bg-gradient-to-br from-[#f8f5f0] via-[#f4f0ea] to-[#ead5c4]">
          <div className="absolute inset-0 bg-[url('./header.jpg')] bg-cover bg-center opacity-30" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <p className="font-bold text-[#a78351] text-sm tracking-[6px] mb-6 uppercase">
              Your Place For
            </p>
            <h1 className="font-['Imperial_Script'] text-[#a78351] text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight">
              Medical Aesthetics
            </h1>
            <p className="text-[#5f2131] max-w-3xl mx-auto text-lg mb-10 leading-relaxed font-medium">
              Experience the pinnacle of medical aesthetics at Bbeautiful Medical Spa. Our advanced 
              facial treatments combine cutting-edge technology with luxurious care to reveal your 
              most radiant, youthful complexion.
            </p>
            <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[3px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              BOOK YOUR TREATMENT
            </Button>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-6 uppercase">
                Welcome To
              </p>
              <div className="mb-8">
                <img 
                  src="./bblogo.png" 
                  alt="Bbeautiful Medical Spa & Wellness Center" 
                  className="h-20 mx-auto mb-4"
                />
              </div>
              <p className="font-bold text-[#874c62] text-lg mb-6">
                Located in Chamblee, GA
              </p>
              <p className="font-bold text-[#874c62] text-sm tracking-[2px] mb-10 uppercase">
                Where Advanced Technology Meets Luxurious Care
              </p>
              
              <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-12 text-lg">
                <p>
                  At Bbeautiful Medical Spa, we specialize in advanced medical aesthetic treatments 
                  that deliver exceptional results. Our signature facial treatments are designed to 
                  address your unique skin concerns while providing a luxurious, relaxing experience.
                </p>
                <p>
                  Each treatment is performed by our skilled aestheticians using premium products 
                  and state-of-the-art technology. From our classic seven-step facial to our 
                  innovative LED therapy treatments, we offer comprehensive solutions for all your 
                  skincare needs.
                </p>
              </div>
              
              <Button className="bg-[#a87b96] hover:bg-[#96697f] text-white font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                EXPLORE OUR TREATMENTS
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Treatments Section */}
        <section className="w-full py-20 bg-gradient-to-b from-[#f8f5f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Signature
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Medical Aesthetic Treatments
              </h2>
              <p className="text-[#5f2131] max-w-4xl mx-auto leading-relaxed text-lg">
                Discover our three signature facial treatments, each meticulously designed to 
                provide transformative results through advanced techniques and premium care.
              </p>
            </div>

            <div className="space-y-20">
              {facialTreatments.map((treatment, index) => (
                <div key={`treatment-${index}`} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px] lg:h-[500px]">
                      <img 
                        src={treatment.image} 
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-[#c292a1] mb-3">
                        {treatment.title}
                      </h3>
                      <h4 className="text-xl lg:text-2xl font-semibold text-[#a78351] mb-6">
                        {treatment.subtitle}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg mb-8">
                        {treatment.description}
                      </p>
                    </div>

                    {/* Treatment Steps */}
                    <div className="space-y-4">
                      <h5 className="font-bold text-[#874c62] text-lg uppercase tracking-[2px]">
                        Treatment Steps:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {treatment.steps.map((step, stepIndex) => (
                          <div key={`step-${index}-${stepIndex}`} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
                            </div>
                            <span className="text-[#3b2129] font-medium text-sm">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button 
                        className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        BOOK THIS TREATMENT
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Treatment Benefits
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Why Choose Our Facials?
              </h2>
              <p className="text-[#5f2131] max-w-3xl mx-auto leading-relaxed text-lg">
                Our medical aesthetic treatments offer comprehensive benefits that go beyond 
                traditional skincare, delivering visible results and lasting improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Deep Cleansing</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Thorough removal of impurities, excess oil, and environmental pollutants 
                  for a fresh, clean complexion.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Skin Renewal</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced exfoliation techniques promote cellular turnover for 
                  smoother, more radiant skin texture.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Anti-Aging</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Stimulate collagen production and reduce fine lines for a 
                  more youthful, lifted appearance.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Hydration</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deep moisturization and nourishment to restore skin's natural 
                  moisture barrier and healthy glow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="w-full py-20 bg-gradient-to-r from-[#f3eada] to-[#f8f5f0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-4 uppercase">
                  Special Offer
                </p>
                <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                  First Time Client?
                </h2>
                <p className="text-[#6d6d6d] text-xl mb-8 leading-relaxed">
                  <span className="font-light">Enjoy </span>
                  <span className="font-bold text-[#c292a1] text-2xl">$50 OFF</span>
                  <span className="font-light"> your first medical aesthetic treatment and experience the Bbeautiful difference.</span>
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Complimentary skin consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Personalized treatment recommendation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Professional skincare guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Premium product samples</span>
                  </div>
                </div>
                <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  CLAIM YOUR OFFER
                </Button>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-[400px] h-[280px]">
                  <img 
                    src="./BBCARD.png" 
                    alt="$50 Gift Card" 
                    className="w-[350px] h-[200px] absolute top-4 left-2 rounded-3xl transform rotate-[-8deg] shadow-2xl transition-transform duration-300 hover:rotate-[-4deg] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Partners Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="font-bold text-[#a78351] text-sm tracking-[4px] mb-4 uppercase">
                Trusted Brand Partners
              </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
              <div className="w-[200px] h-[120px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md">
                <img 
                  src="./MBR.png" 
                  alt="MBR Medical Beauty Research" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-[240px] h-[120px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md">
                <img 
                  src="./biologique-recherche-vector-logo.png" 
                  alt="Biologique Recherche" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="w-[240px] h-[120px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md">
                <img 
                  src="./Valmont.png" 
                  alt="Valmont" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-[#c292a1] to-[#a87b96]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Skin?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Experience the luxury and effectiveness of our medical aesthetic treatments. 
              Schedule your consultation today and discover which treatment is perfect for 
              your unique skin needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK CONSULTATION
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#c292a1] font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                VIEW TREATMENT MENU
              </Button>
            </div>
          </div>
        </section>

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