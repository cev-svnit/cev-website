'use client';

import { useState, useEffect } from 'react';
import { Download, Eye, Calendar, Star, Users, ArrowLeft } from 'lucide-react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';

interface Magazine {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  date: string;
  pages: number;
  featured: boolean;
  pdfPath: string;
}

export default function Home() {
  const [currentTickerIndex, setCurrentTickerIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);

  // Continuous ticker messages for upcoming events
  const tickerMessages = [
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
    "🚀 Horizon Magazine Vol. 7 launching Soon",
  ];

  // Magazine data with PDF paths
  const magazines: Magazine[] = [
    {
      id: 1,
      title: 'Horizon Vol. 1',
      subtitle: 'For the Visionaries',
      description:"Up Close With A Prof An Interview With Dr. Vipul Kheraj", 
      image:"/images/Horizon-1.png",
      date: 'May 2020',
      pages: 13,
      featured: true,
      pdfPath: '/magazines/Horizon 1.pdf',
    },
    {
      id: 2,
      title: 'Horizon Vol. 2',
      subtitle: 'A visionaries view',
      description:"We All Live Under The Same Sky, But We Don't Have The Same Horizon",
      image:"/images/Horizon-2.png",
      date: 'February 2021',
      pages: 80,
      featured: true,
      pdfPath: '/magazines/Horizon 2.pdf',
    },
    {
      id: 3,
      title: 'Horizon Vol. 3',
      subtitle: 'A visionaries Digest',
      description:"If you path requires you to walk through hell Walk like you own hell the burnt horizon",
      image:"/images/Horizon-3.png",
      date: 'January 2024',
      pages: 90,
      featured: true,
      pdfPath: '/magazines/Horizon 2.pdf',
    },
  ];

  // Ticker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Visibility animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePreview = (magazine: Magazine) => {
    setSelectedMagazine(magazine);
    setShowPreview(true);
  };

  const handleDownload = (magazine: Magazine) => {
    const link = document.createElement('a');
    link.href = magazine.pdfPath;
    link.download = `${magazine.title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    link.click();
  };

  const closePreview = () => {
    setShowPreview(false);
    setSelectedMagazine(null);
  };

  if (showPreview && selectedMagazine) {
    return (
      <div className="min-h-screen bg-gray-100">
    
        {/* Preview Header */}
        <div className="bg-black text-white p-4 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <button
              onClick={closePreview}
              className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Gallery</span>
            </button>
            <h1 className="text-xl font-bold">{selectedMagazine.title} - Preview</h1>
            <button
              onClick={() => handleDownload(selectedMagazine)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="container mx-auto p-4">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src={`${selectedMagazine.pdfPath}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-screen"
              title={`${selectedMagazine.title} Preview`}
            />
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{selectedMagazine.title}</h3>
              <p className="text-gray-600 mb-6">{selectedMagazine.description}</p>
              <p className="text-sm text-gray-500">
                If the PDF preview doesn't load, please download the file directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-gray-100 overflow-hidden">

      {/* Continuous Ticker */}
      <div className="bg-black text-white py-3 relative overflow-hidden">
        <div className="flex animate-marquee-continuous whitespace-nowrap text-center">
          {[...tickerMessages, ...tickerMessages].map((msg, idx) => (
            <span key={idx} className="mx-8 text-sm font-medium flex-shrink-0">
              {msg}
            </span>
          ))}
        </div>
        
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-black mb-6 tracking-tight">
            Horizon Magazine
          </h1>
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-8">
            Unleash the Beauty 
          </h2>
          <div className="w-32 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        {/* Magazine Grid */}
        <div className="-space-y-0.5">
          {magazines.map((mag, i) => (
            <div
              key={mag.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <ContainerScroll
                titleComponent={
                  <div className="text-center mb-8">
                    {mag.featured && (
                      <div className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4">
                        <Star className="w-4 h-4 mr-2" />
                        Featured Edition
                      </div>
                    )}
                    <h3 className="text-4xl md:text-6xl font-bold text-black mb-2">
                      {mag.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4">
                      {mag.subtitle}
                    </p>
                    <div className="flex items-center justify-center space-x-6 text-gray-500 mb-6">
                      <span className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2" />
                        {mag.date}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        {mag.pages} pages
                      </span>
                    </div>
                  </div>
                }
              >
                <div className="relative h-full w-full">
                  <img
                    src={mag.image}
                    alt={mag.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg flex flex-col justify-end p-8">
                    <div className="text-white">
                      <p className="text-lg mb-6 leading-relaxed">
                        {mag.description}
                      </p>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => handlePreview(mag)}
                          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:scale-105"
                        >
                          <Eye className="w-5 h-5" />
                          <span>Preview PDF</span>
                        </button>
                        <button
                          onClick={() => handleDownload(mag)}
                          className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 hover:shadow-lg hover:scale-105 border border-gray-600"
                        >
                          <Download className="w-5 h-5" />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ContainerScroll>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes marquee-continuous {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-continuous {
          animation: marquee-continuous 60s linear infinite;
        }
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-continuous { animation: none; }
        }
      `}</style>
    </div>
  );
}
