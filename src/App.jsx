import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  const NavButton = ({ children, section }) => (
    <button 
      onClick={() => setCurrentSection(section)}
      className={`px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95 ${
        currentSection === section ? 'font-bold text-tiktok' : 'text-gray-600 dark:text-gray-300'
      }`}
    >
      {children}
    </button>
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="logo-tiktok.svg" 
              alt="TikTok Logo" 
              className="h-8" 
            />
            <span className="text-xl font-bold dark:text-white">TikTok Indonesia</span>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-2">
              <NavButton section="home">Home</NavButton>
              <NavButton section="about">About Us</NavButton>
              <NavButton section="products">Products/Services</NavButton>
              <NavButton section="content">Our Content</NavButton>
              <NavButton section="contact">Contact Us</NavButton>
            </nav>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-600 p-1 transition-all duration-300"
            >
              <div className={`bg-white w-4 h-4 rounded-full transform transition-transform duration-300 ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {currentSection === 'home' && (
          <section className="text-gray-900 dark:text-white animate-fadeIn">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-float">
                <span className="bg-gradient-to-r from-tiktok to-[#25F4EE] bg-clip-text text-transparent">
                  Welcome to TikTok Indonesia
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-500 hover:scale-105">
                🎉 The fun place to express yourself and share unlimited creativity, together with creators from anywhere 🌎
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <h2 className="text-3xl font-bold mb-6 text-tiktok animate-pulse">
                    TikTok Indonesia
                  </h2>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    The leading platform for expression and sharing creativity with a wide community.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl text-center transition-all hover:scale-105">
                      <div className="text-3xl font-bold text-tiktok mb-2">10M+</div>
                      <p className="text-sm">Active Creators</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl text-center transition-all hover:scale-105">
                      <div className="text-3xl font-bold text-tiktok mb-2">500M+</div>
                      <p className="text-sm">Daily Interactions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Video Section */}
              <div className="relative group w-full max-w-md mx-auto">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Video Container */}
                  <div className="relative h-full w-full">
                    <iframe 
                      className="absolute inset-0 w-full h-full rounded-2xl"
                      src="https://www.tiktok.com/embed/v2/7475565383961906433?hide_caption=1&hide_cover=1"
                      title="TikTok Viral"
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                    />
                    
                    {/* Interactive Elements */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm hover:bg-[#FE2C55] transition-colors">
                        ❤️
                      </button>
                      <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm hover:bg-gray-100/20 transition-colors">
                        💬
                      </button>
                      <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm hover:bg-gray-100/20 transition-colors">
                        🔗
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Tag */}
                <span className="absolute -top-3 -right-3 bg-tiktok text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  LIVE
                </span>
              </div>
            </div>
          </section>
        )}

{currentSection === 'about' && (
  <section className="text-gray-900 dark:text-white animate-fadeIn">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-tiktok to-[#25F4EE] bg-clip-text text-transparent">
          About TikTok Indonesia
        </span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Company Info */}
        <div className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-tiktok flex items-center">
              <span className="mr-3">🏢</span> About Us
            </h3>
            <p className="text-lg mb-6">
              TikTok is the leading short video platform that aims to inspire creativity and bring joy.
            </p>
            <p className="text-lg">
              Developed by ByteDance, TikTok is present in Indonesia with millions of active users and various positive initiatives, from digital education to MSME empowerment.
            </p>
          </div>

          {/* Office Location */}
          <div className="bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] p-0.5 rounded-3xl shadow-lg">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">📍</span> Our Office
              </h3>
              <address className="not-italic space-y-4">
                <p className="text-lg">
                  Gandaria Office Tower, 22nd Floor Unit C<br />
                  Jl. Sultan Iskandar Muda No.10<br />
                  South Jakarta 12240
                </p>
                <div className="pt-4">
                  <a 
                    href="https://www.tiktok.com/about?lang=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-tiktok hover:underline font-medium"
                  >
                    Visit Official Site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.78425631529419!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6825a3f3e0f%3A0x301e8f1fc28b8d0!2sGandaria%20Office%20Tower!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md">
            <a 
              href="https://maps.google.com/?q=TikTok+Indonesia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center text-tiktok"
            >
              Open in Google Maps
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "💡",
            title: "Vision",
            content: "To inspire creativity and bring joy through digital content"
          },
          {
            icon: "🎯",
            title: "Mission",
            content: "Building a safe, inspiring and empowering content ecosystem"
          },
          {
            icon: "❤️",
            title: "Our Values",
            content: "Innovation, Diversity, Social Responsibility"
          }
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl transition-all hover:scale-[1.02]">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-tiktok mb-4">{item.title}</h3>
            <p className="text-lg">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}


{currentSection === 'products' && (
  <section className="text-gray-900 dark:text-white animate-fadeIn">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-tiktok to-[#25F4EE] bg-clip-text text-transparent">
          🚀 TikTok Products & Services
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Creative Ads */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl transition-all hover:scale-[1.02] hover:shadow-xl group">
          <div className="text-5xl mb-6 text-tiktok">🎯</div>
          <h3 className="text-2xl font-bold mb-4">Creative Ads</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Digital marketing solutions for brands and MSMEs. Deliver authentic campaigns through short videos, special effects, and hashtag challenges directly connected to the TikTok community.
          </p>
          
          {/* Expanded Guide (hidden by default) */}
          <div className="hidden group-hover:block mt-6 space-y-4 text-sm">
            <h4 className="font-bold text-tiktok">Getting Started:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create a business account on TikTok Ads Manager</li>
              <li>Determine campaign objectives (awareness, traffic, conversion)</li>
              <li>Upload engaging video content (15-60 seconds)</li>
              <li>Set target audience and budget</li>
              <li>Launch campaign and monitor performance</li>
            </ol>
            <a 
              href="https://ads.tiktok.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-tiktok text-sm font-medium mt-4"
            >
              Access TikTok Ads Manager
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="mt-auto">
            <button 
              className="text-tiktok hover:underline font-medium flex items-center group-hover:translate-x-2 transition-transform"
              onClick={() => document.getElementById('iklan-modal').showModal()}
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* TikTok Shop */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl transition-all hover:scale-[1.02] hover:shadow-xl group">
          <div className="text-5xl mb-6 text-tiktok">🛍️</div>
          <h3 className="text-2xl font-bold mb-4">TikTok Shop</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Shop and sell directly in the app! Users can discover products through videos & live streaming, while sellers can easily manage stores and transactions.
          </p>
          
          {/* Expanded Guide (hidden by default) */}
          <div className="hidden group-hover:block mt-6 space-y-4 text-sm">
            <h4 className="font-bold text-tiktok">Steps to Open a Store:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Download TikTok Shop Seller app</li>
              <li>Register as a seller with ID and tax number</li>
              <li>Verify account and fill store profile</li>
              <li>Upload products with attractive photos/videos</li>
              <li>Promote through content and live streaming</li>
            </ol>
            <div className="flex gap-2 mt-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tiktok text-sm font-medium"
              >
                Download App
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="https://seller-id.tiktok.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tiktok text-sm font-medium"
              >
                Seller Center
              </a>
            </div>
          </div>
          
          <div className="mt-auto">
            <button 
              className="text-tiktok hover:underline font-medium flex items-center group-hover:translate-x-2 transition-transform"
              onClick={() => document.getElementById('shop-modal').showModal()}
            >
              Start Selling
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* LIVE Studio */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl transition-all hover:scale-[1.02] hover:shadow-xl group">
          <div className="text-5xl mb-6 text-tiktok">📺</div>
          <h3 className="text-2xl font-bold mb-4">LIVE Studio</h3>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Official live streaming platform from PC. Perfect for creative content like gaming, education, or events. Interactive, professional, and supports real-time monetization.
          </p>
          
          {/* Expanded Guide (hidden by default) */}
          <div className="hidden group-hover:block mt-6 space-y-4 text-sm">
            <h4 className="font-bold text-tiktok">Installation Guide:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Download TikTok LIVE Studio for Windows/Mac</li>
              <li>Login with TikTok creator account</li>
              <li>Connect streaming equipment (camera, mic)</li>
              <li>Set up scenes and overlays as needed</li>
              <li>Start streaming and interact with viewers</li>
            </ol>
            <a 
              href="https://www.tiktok.com/live-studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-tiktok text-sm font-medium mt-4"
            >
              Download LIVE Studio
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="mt-auto">
            <button 
              className="text-tiktok hover:underline font-medium flex items-center group-hover:translate-x-2 transition-transform"
              onClick={() => document.getElementById('live-modal').showModal()}
            >
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      
{/* Additional CTA */}
<div className="mt-16 text-center">
  <h3 className="text-2xl font-bold mb-6">Interested in our products?</h3>
  <button 
    className="bg-gradient-to-r from-tiktok to-[#25F4EE] text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all"
    onClick={() => document.getElementById('contact-modal').showModal()}
  >
    Contact Our Marketing Team
  </button>
</div>

<dialog id="contact-modal" className="modal">
  <div className="modal-box bg-white dark:bg-gray-800 max-w-md">
    <h3 className="font-bold text-2xl mb-4 text-tiktok">Marketing Contact</h3>
    <div className="prose dark:prose-invert">
      <p><strong>Name:</strong> Tri Yoga Arsyad</p>
      <p><strong>Phone:</strong> <a href="tel:+6287765527489" className="text-tiktok hover:underline">+62 877-6552-7489</a></p>
    </div>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

      {/* Modal Windows */}
      <dialog id="iklan-modal" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 max-w-2xl">
          <h3 className="font-bold text-2xl mb-4 text-tiktok">Creative Ads Guide</h3>
          <div className="prose dark:prose-invert">
            <h4>Campaign Creation Steps:</h4>
            <ol>
              <li>Open <a href="https://ads.tiktok.com/" target="_blank" className="text-tiktok">TikTok Ads Manager</a></li>
              <li>Select campaign type (Brand Awareness, Conversions, etc)</li>
              <li>Upload 3-5 ad videos (9:16 ratio, 15-60 seconds duration)</li>
              <li>Set targeting based on demographics and interests</li>
              <li>Set daily/total budget and schedule</li>
              <li>Monitor performance on analytics dashboard</li>
            </ol>
            <div className="mt-6">
              <a href="https://ads.tiktok.com/" target="_blank" className="btn bg-tiktok text-white border-0">
                Start Advertising Now
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="shop-modal" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 max-w-2xl">
          <h3 className="font-bold text-2xl mb-4 text-tiktok">TikTok Shop Guide</h3>
          <div className="prose dark:prose-invert">
            <h4>How to Open an Online Store:</h4>
            <ol>
              <li>Download TikTok Shop Seller app</li>
              <li>Register as seller (prepare ID and tax number)</li>
              <li>Verify account via email/SMS</li>
              <li>Fill store profile (name, logo, description)</li>
              <li>Add products with quality photos/videos</li>
              <li>Promote through organic content and live streaming</li>
            </ol>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a href="https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically" target="_blank" className="btn bg-tiktok text-white border-0">
                Download App
              </a>
              <a href="https://seller-id.tiktok.com/" target="_blank" className="btn bg-tiktok text-white border-0">
                Seller Center
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="live-modal" className="modal">
        <div className="modal-box bg-white dark:bg-gray-800 max-w-2xl">
          <h3 className="font-bold text-2xl mb-4 text-tiktok">LIVE Studio Guide</h3>
          <div className="prose dark:prose-invert">
            <h4>Requirements and Installation:</h4>
            <ul>
              <li>PC with Windows 10/11 or macOS 10.15+</li>
              <li>Minimum 8GB RAM, Intel i5 CPU or equivalent</li>
              <li>Stable internet connection (minimum 10Mbps upload)</li>
            </ul>
            <h4 className="mt-4">How to Use:</h4>
            <ol>
              <li>Download and install TikTok LIVE Studio</li>
              <li>Login with TikTok creator account</li>
              <li>Connect camera, mic, and capture card (if needed)</li>
              <li>Set up scenes and graphic overlays</li>
              <li>Start streaming and interact with viewers</li>
            </ol>
            <div className="mt-6">
              <a href="https://www.tiktok.com/live-studio" target="_blank" className="btn bg-tiktok text-white border-0">
                Download LIVE Studio
              </a>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </section>
)}

{currentSection === 'content' && (
  <section className="text-gray-900 dark:text-white animate-fadeIn">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-tiktok to-[#25F4EE] bg-clip-text text-transparent">
          🎥 Our Content
        </span>
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Unlimited Entertainment */}
      <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all hover:scale-105">
        <iframe
          src="https://www.tiktok.com/embed/v2/7388713432465378566"
          className="w-full h-3/4"
          allowFullScreen
        />
        <p className="text-center mt-2">✨ Unlimited Entertainment</p>
        <p className="text-center px-2">Viral dances, lip-sync, and fun challenges that make you have fun!</p>
      </div>

      {/* Education & Tips */}
      <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all hover:scale-105">
        <iframe
          src="https://www.tiktok.com/embed/v2/7458157316102311174"
          className="w-full h-3/4"
          allowFullScreen
        />
        <p className="text-center mt-2">📚 Education & Tips</p>
        <p className="text-center px-2">Find tutorials, study tips, and interesting facts for you!</p>
      </div>

      {/* Local Cultural Diversity */}
      <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all hover:scale-105">
        <iframe
          src="https://www.tiktok.com/embed/v2/7453080051949604101"
          className="w-full h-3/4"
          allowFullScreen
        />
        <p className="text-center mt-2">🇮🇩 Local Cultural Diversity</p>
        <p className="text-center px-2">Indonesian creators introduce regional culture and culinary specialties.</p>
      </div>
    </div>
  </section>
)}




        {currentSection === 'contact' && (
          <section className="text-gray-900 dark:text-white animate-fadeIn">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-xl border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-tiktok"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-xl border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-tiktok"
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full p-4 rounded-xl border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-tiktok"
                />
                <button className="w-full bg-tiktok text-white px-8 py-4 rounded-xl hover:bg-[#FE2C55] transition">
                  Send Message
                </button>
              </form>
              <div className="space-y-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-tiktok mb-4">Head Office</h3>
                  <p className="mb-2">Jl. Sudirman No. 123</p>
                  <p>Central Jakarta, Indonesia</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-tiktok mb-4">Contact</h3>
                  <p className="mb-2">Email: contact@tiktok-indonesia.co.id</p>
                  <p>Phone: (021) 1234-5678</p>
                </div>
                <button className="w-full bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition">
                  WhatsApp Us
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App