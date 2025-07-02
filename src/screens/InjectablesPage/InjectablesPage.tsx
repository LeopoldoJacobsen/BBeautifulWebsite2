import React from "react";
import { Button } from "../../components/ui/button";

export const InjectablesPage = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Facial Rejuvenation Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 font-medium mb-8 drop-shadow-md">
              Expert Injectables & Advanced Treatments in Chamblee, GA
            </p>
            <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              SCHEDULE CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 bg-gradient-to-b from-[#f8f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#a78351] mb-8">
              Our Injectable Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Transform your appearance with our expert injectable treatments, performed with precision and artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Botox */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Botox Injections Chamblee GA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#874c62] mb-4">Botox Injections</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Smooth away fine lines and wrinkles with FDA-approved Botox treatments. Our expert technique ensures natural-looking results.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-[#c292a1]">Starting at $12/unit</span>
                  <span className="text-sm text-gray-500">Results last 3-4 months</span>
                </div>
                <Button className="w-full bg-[#c292a1] hover:bg-[#b08291] text-white font-bold py-3 rounded-lg transition-all duration-300">
                  BOOK BOTOX APPOINTMENT
                </Button>
              </div>
            </div>

            {/* Fillers */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fillers and Collagen Boosters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#874c62] mb-4">Fillers & Collagen Boosters</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Restore volume and enhance facial contours with premium dermal fillers and collagen-stimulating treatments.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-[#c292a1]">Custom Pricing</span>
                  <span className="text-sm text-gray-500">Results last 6-18 months</span>
                </div>
                <Button className="w-full bg-[#c292a1] hover:bg-[#b08291] text-white font-bold py-3 rounded-lg transition-all duration-300">
                  SCHEDULE CONSULTATION
                </Button>
              </div>
            </div>

            {/* VI Peel */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="VI Peel Treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#874c62] mb-4">VI Peel</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced chemical peel that improves skin tone, texture, and clarity while reducing signs of aging and sun damage.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-[#c292a1]">$300-$500</span>
                  <span className="text-sm text-gray-500">Minimal downtime</span>
                </div>
                <Button className="w-full bg-[#c292a1] hover:bg-[#b08291] text-white font-bold py-3 rounded-lg transition-all duration-300">
                  BOOK VI PEEL
                </Button>
              </div>
            </div>

            {/* Microneedling */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src="https://images.pexels.com/photos/3985328/pexels-photo-3985328.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Microneedling Treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#874c62] mb-4">Microneedling</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Stimulate natural collagen production to improve skin texture, reduce scars, and enhance overall skin quality.
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-[#c292a1]">$250-$400</span>
                  <span className="text-sm text-gray-500">Series recommended</span>
                </div>
                <Button className="w-full bg-[#c292a1] hover:bg-[#b08291] text-white font-bold py-3 rounded-lg transition-all duration-300">
                  BOOK MICRONEEDLING
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#c292a1] to-[#a87b96]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-white/95 mb-8">
            Schedule your consultation today and discover the perfect treatment plan for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105">
              SCHEDULE CONSULTATION
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#c292a1] font-bold text-sm tracking-[2px] px-8 py-4 rounded-lg transition-all duration-300"
            >
              CALL (678) 404-5969
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
