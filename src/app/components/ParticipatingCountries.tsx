'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { africanCountries } from '../lib/countryCodes';

export default function ParticipatingCountries() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (row1Ref.current && row2Ref.current) {
      gsap.to(row1Ref.current, {
        xPercent: -50,
        ease: 'linear',
        repeat: -1,
        duration: 80, 
      });

      gsap.to(row2Ref.current, {
        xPercent: -50,
        ease: 'linear',
        repeat: -1,
        duration: 80, 
      });
    }
  }, []);

  const mid = Math.ceil(africanCountries.length / 2);
  const firstHalf = africanCountries.slice(0, mid);
  const secondHalf = africanCountries.slice(mid);

  // Duplicate for infinite loop
  const duplicatedRow1 = [...firstHalf, ...firstHalf];
  const duplicatedRow2 = [...secondHalf, ...secondHalf];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Participating Countries
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Leaders and defence representatives from across Africa will be in attendance, collaborating on strategies for a safer and more united continent.
        </p>

        <div className="overflow-hidden mb-6">
          <div ref={row1Ref} className="flex w-max gap-6">
            {duplicatedRow1.map((country, i) => (
              <div
                key={`row1-${country.code}-${i}`}
                className="bg-white min-w-[150px] p-4 rounded shadow flex flex-col items-center"
              >
                <img
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-10 h-auto mb-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: right → left */}
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex flex-row-reverse w-max gap-6">
            {duplicatedRow2.map((country, i) => (
              <div
                key={`row2-${country.code}-${i}`}
                className="bg-white min-w-[150px] p-4 rounded shadow flex flex-col items-center"
              >
                <img
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-10 h-auto mb-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
