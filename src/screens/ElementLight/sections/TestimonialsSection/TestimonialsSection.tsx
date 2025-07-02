import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <>
      {/* SEO-Optimized Hero Section */}
      <section className="relative w-full h-[800px] lg:h-[900px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/header.jpg')`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Exclusive Medical Spa in Chamblee, GA
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 font-medium mb-6 drop-shadow-md">
              Premium Botox & LED Therapy
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Chamblee's Premier Boutique Medical Spa
              </h2>
              <p className="text-lg lg:text-xl text-white/95 mb-6 leading-relaxed">
                Specializing in Expert Botox, Red LED Light Therapy & Medical Facials
              </p>
              <p className="text-base lg:text-lg text-white/90 mb-6">
                Serving discerning women throughout Atlanta & North Georgia
              </p>
              <p className="text-sm lg:text-base text-[#ead5c4] font-semibold tracking-wider">
                Limited Wednesday & Friday Appointments - Book 2-3 Weeks Ahead
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK WEDNESDAY
              </Button>
              <Button className="bg-[#a87b96] hover:bg-[#96697f] text-white font-bold text-sm tracking-[2px] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK FRIDAY
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#c292a1] font-bold text-sm tracking-[2px] px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                CALL (678) 404-5969
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Women Drive Up to 50 Minutes Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#f8f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#a78351] mb-8">
              Why Women Drive Up to 50 Minutes to Visit Bbeautiful
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                Located at <strong>5488 Peachtree Rd in Chamblee, GA</strong>, Bbeautiful Medical Spa has earned a reputation for excellence that draws clients from across Atlanta and North Georgia. Our exclusive focus on three signature treatments ensures unparalleled expertise and results:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#874c62] mb-4">Expert Botox Injections</h3>
                  <p className="text-gray-600 mb-4">(starting at $12/unit)</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#874c62] mb-4">Advanced Red LED Light Therapy Facials</h3>
                  <p className="text-gray-600 mb-4">Exclusive technology available</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c292a1] to-[#a87b96] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3.09 8.26L4 21L12 17L20 21L20.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#874c62] mb-4">Medical-Grade Facial Treatments</h3>
                  <p className="text-gray-600 mb-4">Premium skincare products</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike high-volume clinics, our limited Wednesday and Friday schedule allows for personalized attention and premium care that busy women ages 25-60 deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Three Signature Treatments Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#a78351] mb-12">
              Our Three Signature Treatments in Chamblee, GA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8 h-[400px]">
                <img 
                  src="/spa.jpg" 
                  alt="Expert Botox Injections Chamblee GA"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Expert Botox Injections Chamblee GA</h3>
                  <p className="text-white/90 mb-2">Natural-looking wrinkle reduction with precision technique</p>
                  <p className="text-[#ead5c4] font-semibold">Starting at $12/unit | FDA-approved treatments</p>
                </div>
              </div>
              <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK BOTOX APPOINTMENT
              </Button>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8 h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Red LED Light Therapy Facials"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Red LED Light Therapy Facials</h3>
                  <p className="text-white/90 mb-2">Advanced phototherapy for skin rejuvenation and anti-aging</p>
                  <p className="text-[#ead5c4] font-semibold">Exclusive technology available Wednesdays & Fridays</p>
                </div>
              </div>
              <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK LED THERAPY
              </Button>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8 h-[400px]">
                <img 
                  src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Medical-Grade Facials Chamblee GA"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Medical-Grade Facials Chamblee GA</h3>
                  <p className="text-white/90 mb-2">Customized treatments using premium skincare products</p>
                  <p className="text-[#ead5c4] font-semibold">Professional results in boutique setting</p>
                </div>
              </div>
              <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                BOOK MEDICAL FACIAL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#f3eada] to-[#f8f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#a78351] mb-8">
              Limited Availability - Plan Your Visit to Chamblee
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#874c62] mb-6 flex items-center">
                  <svg className="w-8 h-8 text-[#c292a1] mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                  </svg>
                  Operating Schedule:
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center p-4 bg-[#f8f5f0] rounded-lg">
                    <span className="font-semibold text-[#874c62]">Wednesday:</span>
                    <span className="text-gray-700">9 AM - 5 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#f8f5f0] rounded-lg">
                    <span className="font-semibold text-[#874c62]">Friday:</span>
                    <span className="text-gray-700">9 AM - 5 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#874c62] mb-6 flex items-center">
                  <svg className="w-8 h-8 text-[#c292a1] mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                  </svg>
                  Location & Contact:
                </h3>
                <div className="space-y-3 text-lg">
                  <p className="text-gray-700">📍 5488 Peachtree Rd, Chamblee, GA 30341</p>
                  <p className="text-gray-700">📞 (678) 404-5969</p>
                </div>
              </div>

              <div className="bg-[#c292a1] p-8 rounded-2xl text-white">
                <p className="text-lg mb-6 leading-relaxed">
                  Due to our personalized approach, appointments book 2-3 weeks in advance. Call today to secure your preferred appointment time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    CHECK WEDNESDAY AVAILABILITY
                  </Button>
                  <Button className="bg-[#a87b96] hover:bg-[#96697f] text-white font-bold text-sm tracking-[2px] px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    CHECK FRIDAY AVAILABILITY
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/spa.jpg" 
                  alt="Bbeautiful Medical Spa Chamblee Location"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< Updated upstream
      {/* Target Audience Section */}
      <section className="w-full py-20 bg-white">
=======
      {/* Brand Banner */}
      <div className="w-full bg-gradient-to-r from-[#f8f5f0] to-[#f4f0ea] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <img 
            src="./bbeautiful-logo.png" 
            alt="Bbeautiful Medical Spa & Wellness Center" 
            className="h-20 mx-auto mb-8"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience luxury treatments in our state-of-the-art facility, where beauty meets wellness
          </p>
        </div>
      </div>

      {/* Treatments Section */}
      <div className="w-full py-20 bg-white">
>>>>>>> Stashed changes
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#a78351] mb-8">
              Trusted by Professional Women Across Atlanta Metro
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-12">
                Whether you're a busy professional in your 30s seeking preventative Botox treatments, or a discerning woman in your 50s looking for advanced LED facial therapy, Bbeautiful Medical Spa delivers exceptional results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#874c62] mb-8">Our clients travel from:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-[#f8f5f0] rounded-lg">
                  <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Atlanta & Buckhead</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-[#f8f5f0] rounded-lg">
                  <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Brookhaven & Sandy Springs</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-[#f8f5f0] rounded-lg">
                  <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Doraville & Dunwoody</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-[#f8f5f0] rounded-lg">
                  <div className="w-3 h-3 bg-[#c292a1] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Throughout North Georgia</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                Experience the difference of specialized care at Chamblee's most exclusive medical spa.
              </p>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional Women Atlanta Medical Spa"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Client Special Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#c292a1] to-[#a87b96]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              New Client Special - Chamblee Medical Spa
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-8">First-Time Clients Receive:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-[#ead5c4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#874c62]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Complimentary $50 Gift Card</h4>
                    <p className="text-white/90">Use towards any treatment or service</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-[#ead5c4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#874c62]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">FREE Skincare Consultation</h4>
                    <p className="text-white/90">(valued at $150)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-[#ead5c4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#874c62]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Personalized Treatment Plan</h4>
                    <p className="text-white/90">Customized for your unique needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-6 h-6 bg-[#ead5c4] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#874c62]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Expert Recommendations</h4>
                    <p className="text-white/90">For Botox, LED therapy, or medical facials</p>
                  </div>
                </div>
              </div>

              <p className="text-white/90 mt-8 mb-8 text-lg">
                Valid for new clients at our Chamblee location. Limited Wednesday & Friday availability.
              </p>

              <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                CLAIM YOUR OFFER
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-[400px] h-[280px]">
                <img 
<<<<<<< Updated upstream
                  src="/bbcard.png" 
                  alt="$50 Gift Card New Client Special"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
=======
                  src="./BBCARD.png" 
                  alt="Contest Prize Gift Card" 
                  className="w-[240px] h-[140px] absolute top-4 left-2 rounded-2xl transform rotate-[-8deg] shadow-xl transition-transform duration-300 hover:rotate-[-4deg] object-cover"
                />
                <img 
                  src="./BBCARD.png" 
                  alt="Contest Prize Gift Card" 
                  className="w-[240px] h-[140px] absolute top-[100px] left-[45px] rounded-2xl transform rotate-[8deg] shadow-xl transition-transform duration-300 hover:rotate-[4deg] object-cover opacity-80"
>>>>>>> Stashed changes
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#f8f5f0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#a78351] mb-8">
              Visit Our Chamblee Medical Spa Location
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#874c62] mb-6">Bbeautiful Medical Spa & Wellness Center</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#c292a1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
                    </svg>
                    <span className="text-gray-700">5488 Peachtree Rd, Chamblee, GA 30341</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#c292a1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-gray-700">(678) 404-5969</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#c292a1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                    </svg>
                    <span className="text-gray-700">Wednesday & Friday: 9 AM - 5 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-[#c292a1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
                    </svg>
                    <span className="text-gray-700">Convenient Peachtree Road location with parking</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f5f0] p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-[#874c62] mb-6">Proudly serving women throughout:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <span className="text-gray-700">Chamblee</span>
                  <span className="text-gray-700">Atlanta</span>
                  <span className="text-gray-700">Brookhaven</span>
                  <span className="text-gray-700">Doraville</span>
                  <span className="text-gray-700">Sandy Springs</span>
                  <span className="text-gray-700">Dunwoody</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#c292a1] hover:bg-[#b08291] text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  GET DIRECTIONS
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-[#c292a1] text-[#c292a1] hover:bg-[#c292a1] hover:text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300"
                >
                  CALL NOW
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/spa.jpg" 
                  alt="Bbeautiful Medical Spa Chamblee GA Location"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
