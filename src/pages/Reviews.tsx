import React from 'react';
import { REVIEWS } from '@/constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
       <h1 className="text-4xl font-bold text-white mb-12 tech-font text-center">
          <span className="text-cyan-400">04</span> // AFTER ACTION REPORTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
                <div key={review.id} className="glass-panel p-8 rounded-lg border border-slate-700 flex flex-col relative">
                    <Quote className="absolute top-4 right-4 text-cyan-900 w-12 h-12 rotate-180" />
                    
                    <div className="flex text-yellow-500 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>

                    <p className="text-slate-300 italic mb-6 flex-grow">
                        "{review.text}"
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-700">
                        <p className="font-bold text-white">{review.clientName}</p>
                        <p className="text-xs text-cyan-500 uppercase tracking-wider">{review.service}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
export default Reviews;