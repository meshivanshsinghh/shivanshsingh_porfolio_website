'use client';

import { useEffect, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(()=> {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  return (
    <main className='relative min-h-screen bg-black text-white overflow-hidden'>
      {/* <AnimatedBackground /> */}

      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Portfolio under <br />
            construction.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Currently building something special to showcase my ML projects, 
            from stock prediction engines to NLP translation systems. 
            Meanwhile, feel free to connect with me on{' '}
            <a 
              href="http://linkedin.com/in/shivanshsinghh" 
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or check out my work on{' '}
            <a 
              href="https://github.com/meshivanshsinghh" 
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>. 
            Full portfolio launching soon with detailed case studies and live demos.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                Deployment Progress
              </span>
              <span className="text-sm font-bold text-white">
                90%
              </span>
            </div>
            <ProgressBar progress = {90} />
          </div>

          <div className="flex gap-4 flex-wrap">
            <a 
              href="http://linkedin.com/in/shivanshsinghh"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 mt-8 overflow-hidden rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
                View LinkedIn
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="mailto:singh.shivan@northeastern.edu"
              className="group relative px-8 py-3 mt-8 overflow-hidden rounded-full border border-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <span className="relative z-10 text-sm font-medium uppercase tracking-wider">
                Get in Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}