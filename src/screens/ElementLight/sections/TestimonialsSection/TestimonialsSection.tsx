import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  const treatmentCategories = [
    {
      id: 1,
      title: "FACIAL\nREJUVENATION",
      description: "Advanced facial treatments for radiant, youthful skin",
      gradient: "from-pink-200 to-rose-300",
      image: "./facialrejuvenation copy.jpeg"
    },
    {
      id: 2,
      title: "MEDICAL\nAESTHETICS",
      description: "Professional cosmetic procedures with proven results",
      gradient: "from-purple-200 to-pink-300",
      image: "./Medical.webp"
    },
    {
      id: 3,
      title: "HEALTH &\nWELLNESS",
      description: "Holistic wellness treatments for mind and body",
      gradient: "from-amber-200 to-orange-300",
      image: "./healthandwellness.webp"
    },
  ];

  return (
    <section className="relative w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-[600px] bg-gradient-to-br from-[#c292a1]/30 via-[#e2cbd8]/20 to-[#f4f0ea]">
        <div className="absolute inset-0 bg-[url('./header.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className="font-bold text-[#874c62] text-lg tracking-[8px] mb-6 uppercase">
            Your Place For
          </p>
          <h1 className="font-['Imperial_Script'] text-[#874c62] text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight">
            Beauty & Wellness
          </h1>
          <Button className="bg-[#e2cbd8] hover:bg-[#d5b6c6] text-[#a87b96] font-bold text-sm tracking-[3px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            BOOK APPOINTMENT
          </Button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-6 uppercase">
              Welcome To
            </p>
            <div className="mb-6">
              <img 
                src="./bblogo.png" 
                alt="Bbeautiful Medical Spa & Wellness Center" 
                className="h-20 mx-auto mb-4"
              />
            </div>
            <p className="font-bold text-[#874c62] text-lg mb-4">
              Located in Chamblee, GA
            </p>
            <p className="font-bold text-[#874c62] text-xs tracking-[2px] mb-8 uppercase">
              Where Your Journey to Enhanced Beauty and Wellness Begins
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6 text-gray-700 leading-relaxed mb-10">
              <p>
                We are dedicated to providing you with the most advanced and effective
                treatments tailored to your unique needs. Our team of expert
                practitioners utilize cutting-edge technology and the highest quality products
                to ensure you achieve your desired results.
              </p>
              <p>
                Whether you're looking to rejuvenate your skin, sculpt your body, or simply
                feel good, <span className="italic text-[#5f2131] font-medium">Bbeautiful</span> offers a wide range of treatments designed to help you
                look and feel your best. Step into a serene and inviting
                environment, and let us elevate your beauty to new heights.
              </p>
            </div>
            
            <Button className="bg-[#a87b96] hover:bg-[#96697f] text-[#e2cbd8] font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              LEARN MORE ABOUT US
            </Button>
          </div>
        </div>
      </div>

      {/* First Visit Promotion */}
      <div className="w-full bg-[#f4f0ea] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-4">
                First Visit?
              </h2>
              <p className="text-[#6d6d6d] text-2xl lg:text-3xl mb-8 leading-relaxed">
                <span className="font-light">Receive a </span>
                <span className="font-semibold">
                  Complimentary<br />
                  $50 Gift Card!
                </span>
              </p>
              <Button className="bg-white hover:bg-gray-50 text-[#874c62] font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
                CLAIM YOUR GIFT CARD
              </Button>
            </div>
            <div className="relative">
              <div className="w-[400px] h-[230px] transform rotate-[-8deg] hover:rotate-[-4deg] transition-transform duration-300">
                <img 
                  src="./BBCARD.png" 
                  alt="$50 Gift Card" 
                  className="w-full h-full rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Banner */}
      <div className="w-full bg-gradient-to-r from-[#f8f5f0] to-[#f4f0ea] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <img 
            src="./bblogo.png" 
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-bold text-[#c292a1] text-sm tracking-[4px] mb-4 uppercase">
              Choose From A Wide Range Of
            </p>
            <h2 className="font-['Imperial_Script'] text-[#a78351] text-5xl lg:text-6xl mb-6">
              Medspa & Wellness Treatments
            </h2>
            <p className="text-[#5f2131] max-w-4xl mx-auto leading-relaxed text-lg">
              At Bbeautiful Medical Spa, we offer a variety of services to help you
              achieve the perfect look. From facials and chemical peels to microdermabrasion 
              and microneedling, our experts are here to provide you with a tailored
              experience for optimal results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentCategories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <div className="relative w-full h-[400px] transition-transform duration-500 group-hover:scale-105">
                    {/* Background Image */}
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay with 40% opacity */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-40`} />
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <div className="w-10 h-10 bg-white/30 rounded-full"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 whitespace-pre-line">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-[#c292a1] text-xl tracking-[3px] mb-2 whitespace-pre-line">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full bg-gradient-to-r from-[#f3eada] to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="text-center">
              <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-6 uppercase">
                Register To Win
              </p>
              <Button className="bg-[#ceab6b] hover:bg-[#b99a5d] text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                ENTER CONTEST
              </Button>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-[300px] h-[250px]">
                <img 
                  src="./giftcard.png" 
                  alt="Contest Prize Gift Card" 
                  className="w-[240px] h-[140px] absolute top-4 left-2 rounded-2xl transform rotate-[-8deg] shadow-xl transition-transform duration-300 hover:rotate-[-4deg] object-cover"
                />
                <img 
                  src="./giftcard.png" 
                  alt="Contest Prize Gift Card" 
                  className="w-[240px] h-[140px] absolute top-[100px] left-[45px] rounded-2xl transform rotate-[8deg] shadow-xl transition-transform duration-300 hover:rotate-[4deg] object-cover opacity-80"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="font-bold text-[#a78351] text-sm tracking-[4px] mb-6 uppercase">
                Purchase A<br />
                Gift Card
              </p>
              <Button
                variant="outline"
                className="border-2 border-[#a87b96] text-[#a87b96] hover:bg-[#a87b96] hover:text-white font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                SHOP GIFT CARDS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Wellness Experience Banner */}
      <div className="w-full bg-gradient-to-r from-[#c292a1] to-[#a87b96] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('./spa.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold text-white mb-4">Premium Wellness Experience</h2>
          <p className="text-xl text-white/90 mb-8">
            Discover the perfect blend of medical expertise and spa luxury
          </p>
          <Button className="bg-white text-[#c292a1] hover:bg-gray-100 font-bold text-sm tracking-[2px] px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            EXPLORE TREATMENTS
          </Button>
        </div>
      </div>

      {/* Brand Partners */}
      <div className="w-full py-16 bg-gray-50">
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
      </div>
    </section>
  );
};