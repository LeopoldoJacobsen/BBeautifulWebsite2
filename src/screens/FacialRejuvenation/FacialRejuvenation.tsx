import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { HeroSection } from "../ElementLight/sections/HeroSection";
import { ServiceGallerySection } from "../ElementLight/sections/ServiceGallerySection";

export const FacialRejuvenation = (): JSX.Element => {
  const facialTreatments = [
    {
      title: "Botox",
      description: "Smooth away fine lines and wrinkles with precision injections",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Starting at $12/unit",
      duration: "15-30 minutes"
    },
    {
      title: "Fillers & Collagen",
      description: "Restore volume and enhance facial contours naturally",
      image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Starting at $650",
      duration: "30-45 minutes"
    },
    {
      title: "Microneedling",
      description: "Stimulate collagen production for smoother, firmer skin",
      image: "https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Starting at $250",
      duration: "60 minutes"
    },
    {
      title: "VI Peel",
      description: "Advanced chemical peel for skin renewal and rejuvenation",
      image: "https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "Starting at $300",
      duration: "45 minutes"
    }
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] relative">
        {/* Mobile-Optimized Header Section */}
        <header className="w-full bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mobile Header - Compact Design */}
            <div className="flex items-center justify-between py-3 lg:py-4">
              {/* Logo Section - Left Side */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
                  <div className="text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#c292a1] leading-tight">Bbeautiful</h1>
                    <p className="text-xs sm:text-sm text-[#a78351] font-medium tracking-wider hidden sm:block">Medical Spa</p>
                  </div>
                </a>
              </div>

              {/* Contact & Social - Right Side */}
              <div className="flex items-center space-x-3 lg:space-x-4">
                {/* Phone Number */}
                <a 
                  href="tel:(678) 404-5969" 
                  className="flex items-center space-x-2 bg-[#c292a1] hover:bg-[#b08291] text-white px-3 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="hidden sm:inline">(678) 404-5969</span>
                </a>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/bbeautifulmedicalspa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#c292a1] rounded-full flex items-center justify-center hover:bg-[#b08291] transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
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

        {/* Hero Banner */}
        <section className="relative w-full h-[600px] bg-gradient-to-br from-[#f8f5f0] via-[#f4f0ea] to-[#ead5c4]">
          <div className="absolute inset-0 bg-[url('/header.jpg')] bg-cover bg-center opacity-30" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <p className="font-bold text-[#a78351] text-sm tracking-[6px] mb-6 uppercase">
              Your Place For
            </p>
            <h1 className="font-['Imperial_Script'] text-[#a78351] text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight">
              Facial Rejuvenation
            </h1>
            <p className="text-[#5f2131] max-w-3xl mx-auto text-lg mb-10 leading-relaxed font-medium">
              Discover the art of facial rejuvenation at Bbeautiful Medical Spa. Our expert team 
              combines advanced techniques with personalized care to help you achieve natural, 
              radiant results that enhance your unique beauty.
            </p>
            <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[3px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              BOOK YOUR CONSULTATION
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
                <h2 className="text-4xl font-bold text-[#c292a1] mb-2">Bbeautiful</h2>
                <p className="text-lg text-[#a78351] font-medium tracking-wider">Medical Spa & Wellness Center</p>
              </div>
              <p className="font-bold text-[#874c62] text-lg mb-6">
                Located in Chamblee, GA
              </p>
              <p className="font-bold text-[#874c62] text-sm tracking-[2px] mb-10 uppercase">
                Where Science Meets Beauty
              </p>
              
              <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-12 text-lg">
                <p>
                  At Bbeautiful Medical Spa, we believe that true beauty comes from feeling confident 
                  in your own skin. Our facial rejuvenation treatments are designed to enhance your 
                  natural features while addressing your specific concerns with precision and artistry.
                </p>
                <p>
                  Our team of certified professionals uses the latest FDA-approved treatments and 
                  cutting-edge technology to deliver exceptional results. From subtle enhancements 
                  to comprehensive rejuvenation, we create personalized treatment plans that help 
                  you look and feel your absolute best.
                </p>
              </div>
              
              <Button className="bg-[#a87b96] hover:bg-[#96697f] text-white font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                DISCOVER OUR TREATMENTS
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
                Facial Rejuvenation Treatments
              </h2>
              <p className="text-[#5f2131] max-w-4xl mx-auto leading-relaxed text-lg">
                Experience our most popular facial rejuvenation treatments, each designed to 
                address specific concerns and deliver beautiful, natural-looking results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facialTreatments.map((treatment, index) => (
                <div key={`treatment-${index}`} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6 h-[300px]">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold mb-2">
                        {treatment.title}
                      </h3>
                      <div className="flex justify-between items-center text-white/90 text-sm">
                        <span>{treatment.duration}</span>
                        <span className="font-semibold">{treatment.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="font-bold text-[#c292a1] text-lg tracking-[2px] uppercase">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {treatment.description}
                    </p>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-2 border-[#c292a1] text-[#c292a1] hover:bg-[#c292a1] hover:text-white font-bold text-xs tracking-[2px] py-3 rounded-lg transition-all duration-300"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Our Process
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Your Rejuvenation Journey
              </h2>
              <p className="text-[#5f2131] max-w-3xl mx-auto leading-relaxed text-lg">
                We believe in a comprehensive approach to facial rejuvenation that begins with 
                understanding your unique goals and concerns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#c292a1] to-transparent"></div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Consultation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive assessment of your skin and discussion of your aesthetic goals 
                  with our expert team.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#c292a1] to-transparent"></div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Customization</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized treatment plan designed specifically for your skin type, 
                  concerns, and desired outcomes.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#c292a1] to-transparent"></div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Treatment</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional treatment performed with precision using the latest 
                  technology and premium products.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                </div>
                <h4 className="font-bold text-[#874c62] text-lg mb-3">Follow-Up</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ongoing support and maintenance recommendations to ensure 
                  long-lasting, beautiful results.
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
                  <span className="font-light"> your first facial rejuvenation treatment and discover the Bbeautiful difference.</span>
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Complimentary consultation ($150 value)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Personalized treatment plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Professional skincare recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                    <span className="text-gray-700 font-medium">Take-home skincare samples</span>
                  </div>
                </div>
                <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  CLAIM YOUR OFFER
                </Button>
              </div>

              <div className="relative flex justify-center">
                <div className="relative w-[400px] h-[280px]">
                  <img 
                    src="/bbcard.png" 
                    alt="$50 Off Gift Card"
                    className="w-full h-full object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
                Excellence & Safety
              </p>
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
                Why Choose Bbeautiful?
              </h2>
              <p className="text-[#5f2131] max-w-3xl mx-auto leading-relaxed text-lg">
                Our commitment to excellence, safety, and natural-looking results sets us apart 
                in the world of facial rejuvenation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-xl mb-4">Expert Practitioners</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team consists of board-certified professionals with extensive training 
                  in advanced facial rejuvenation techniques and aesthetic medicine.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-xl mb-4">Premium Products</h4>
                <p className="text-gray-600 leading-relaxed">
                  We exclusively use FDA-approved products and cutting-edge technology 
                  to ensure the highest standards of safety and efficacy.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-b from-[#f8f5f0] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-[#874c62] text-xl mb-4">Natural Results</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our artistic approach focuses on enhancing your natural beauty with 
                  subtle, sophisticated results that look refreshed, never overdone.
                </p>
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
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-[#c292a1]">MBR</h4>
                  <p className="text-sm text-gray-600">Medical Beauty Research</p>
                </div>
              </div>
              <div className="w-[240px] h-[120px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-[#c292a1]">Biologique Recherche</h4>
                  <p className="text-sm text-gray-600">Premium Skincare</p>
                </div>
              </div>
              <div className="w-[240px] h-[120px] bg-white rounded-lg flex items-center justify-center p-4 shadow-md">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-[#c292a1]">Valmont</h4>
                  <p className="text-sm text-gray-600">Swiss Skincare</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-[#c292a1] to-[#a87b96]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Take the first step towards a more confident, radiant you. Schedule your 
              complimentary consultation today and discover how facial rejuvenation can 
              enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK FREE CONSULTATION
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
