'use client';

import { africanCountries } from '../lib/countryCodes';

export default function ParticipatingCountries() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Participating Countries</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Leaders and defense representatives from across Africa will be in attendance, collaborating on strategies for a safer and more united continent.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {africanCountries.map((country) => (
            <div
              key={country.code}
              className="bg-white p-4 rounded-md shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                alt={country.name}
                className="w-10 h-auto mb-2 rounded-sm border"
              />
              <span className="text-sm font-medium text-gray-700">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
