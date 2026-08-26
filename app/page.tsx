import Image from "next/image";
import { CheckCircle2, MapPin, Phone, ArrowRight } from "lucide-react";

export default function RealEstateLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans">
      {/* HERO SECTION */}
      <main className="relative flex-1 flex items-center justify-center min-h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/apartment/1920/1080"
            alt="Premium Apartments in India"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold tracking-wide mb-8">
              <MapPin className="w-4 h-4" />
              <span>Prime Location: Whitefield, Bengaluru</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Luxury 2 & 3 BHK <br />
              <span className="text-emerald-400">Vastu-Compliant Homes</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-2xl leading-relaxed">
              Elevate your lifestyle in a premium gated community. Thoughtfully designed spacious residences featuring world-class amenities, starting at just <span className="font-bold text-white text-2xl">₹85 Lakhs*</span>.
            </p>

            {/* Bullet Points Container */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 sm:p-8 mb-10 max-w-2xl">
              <ul className="space-y-4 sm:space-y-5">
                {[
                  "100% Vastu-compliant architecture and floor plans",
                  "Over 40+ world-class amenities including a 20,000 sq.ft clubhouse",
                  "24/7 Multi-tier security & uninterrupted power backup",
                  "Excellent connectivity to major IT Tech Parks and Metro stations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-neutral-100 text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Actions (Mobile friendly flex-col to flex-row) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#enquiry-form" className="group relative w-full sm:w-auto bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ring-1 ring-emerald-300/50">
                Book a Free Site Visit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 font-semibold text-lg px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER & ENQUIRY FORM */}
      <footer id="enquiry-form" className="bg-slate-950 border-t border-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Footer Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Interested in this property?
              </h2>
              <p className="text-neutral-300 text-lg mb-8 leading-relaxed max-w-lg">
                Register your interest today to get exclusive pre-launch offers, detailed floor plans, and a complete pricing brochure. Our property expert will get back to you within 15 minutes.
              </p>
              
              <div className="flex items-center gap-4 text-emerald-400">
                <Phone className="w-6 h-6" />
                <span className="text-xl font-semibold">+91 98765 43210</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Register Your Interest</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-400 mb-2">Mobile Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-800 bg-slate-950 text-neutral-400 sm:text-sm">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="98765 43210" 
                      className="flex-1 min-w-0 w-full bg-slate-950 border border-slate-800 text-white rounded-r-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com" 
                    className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-colors"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="group w-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-300 hover:to-emerald-500 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.7)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-4 ring-1 ring-emerald-300/50"
                >
                  Get Detailed Brochure
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                
                <p className="text-xs text-neutral-500 text-center mt-4">
                  By submitting, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
