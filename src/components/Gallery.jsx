import React from 'react';
import { Zap } from 'lucide-react';

export const Gallery = ({ pictorialRef, isVisible }) => {
  return (
    <section ref={pictorialRef} id="pictorial" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible.pictorial ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Training Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-video border border-gray-200 hover:border-blue-500 transition-all duration-500 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-12 h-12 mx-auto text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        Training Session {index + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
