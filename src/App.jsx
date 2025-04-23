import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')

  const NavButton = ({ children, section }) => (
    <button 
      onClick={() => setCurrentSection(section)}
      className={`nav-button px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95 ${
        currentSection === section ? 'font-bold text-tiktok active' : ''
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

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="logo-tiktok.svg" 
              alt="TikTok Logo" 
              className="h-8" 
            />
            
            <span className="text-xl font-bold dark:text-white">TikTok</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <nav className="flex gap-2">
              <NavButton section="home">Beranda</NavButton>
              <NavButton section="about">Tentang Kami</NavButton>
              <NavButton section="products">Produk/Layanan</NavButton>
              <NavButton section="content">Konten Kami</NavButton>
              <NavButton section="contact">Hubungi Kami</NavButton>
            </nav>
            
            {/* Toggle Dark Mode */}
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {currentSection === 'home' && (
          <section className="text-gray-900 dark:text-white animate-fadeIn">
            <h1 className="text-4xl font-bold mb-6">Selamat Datang di TikTok Indonesia</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Platform terdepan untuk kreasi konten digital dan koneksi sosial di Indonesia.
                </p>
                <button className="bg-tiktok text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
                  Hubungi Kami
                </button>
              </div>
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg">
                <iframe 
                  className="w-full h-full rounded-lg"
                  src="https://www.tiktok.com/embed/v2/7328701c9106d454b96ed0e6a2f9baff"
                  title="TikTok Video"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        //* About Section */
        {currentSection === 'about' && (
          <section className="text-gray-900 dark:text-white animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tiktok mb-2">Visi</h3>
                <p>Menginspirasi kreativitas dan membawa kebahagiaan melalui konten digital</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-tiktok mb-2">Misi</h3>
                <p>Membangun platform yang aman dan inovatif untuk seluruh kreator Indonesia</p>
              </div>
            </div>
          </section>
        )}


        //* Content Section */
        {currentSection === 'products' && (
          <section className="text-gray-900 dark:text-white animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Produk & Layanan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">Layanan {item}</h3>
                  <p className="mb-4">Deskripsi layanan dan keunggulan produk</p>
                  <button className="text-tiktok hover:underline">Selengkapnya</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {currentSection === 'contact' && (
          <section className="text-gray-900 dark:text-white animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 focus:ring-2 focus:ring-tiktok"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 focus:ring-2 focus:ring-tiktok"
                />
                <textarea
                  placeholder="Pesan"
                  rows="5"
                  className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 focus:ring-2 focus:ring-tiktok"
                />
                <button className="bg-tiktok text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
                  Kirim Pesan
                </button>
              </form>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-tiktok">Kantor Pusat</h3>
                  <p>Jl. Sudirman No. 123, Jakarta</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-tiktok">Email</h3>
                  <p>contact@tiktok-indonesia.co.id</p>
                </div>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                  WhatsApp Kami
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