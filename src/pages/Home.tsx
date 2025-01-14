import { ArrowRight, Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff7f00]/5 rounded-full blur-[150px]" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,127,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,127,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-10 mb-24">
        <img 
            src="/images/Organizes.png" 
            alt="Organizes" 
            className="w-full h-auto max-w-[700px] drop-shadow-[0_0_25px_rgba(255,127,0,0.3)]" 
          />
          <img 
            src="/images/logo final .png" 
            alt="ENIAC'24" 
            className="w-48 h-48 drop-shadow-[0_0_25px_rgba(255,127,0,0.3)]" 
          />
          
        
          
          <p className="text-xl text-zinc-300 max-w-3xl text-center leading-relaxed">
            ENIAC'24: Celebrating Innovation and Creativity
            An electrifying tech fest blending innovation, creativity, and technology. Showcase your talent through coding, and workshops, and explore the future of tech. Join us for a celebration of technology and camaraderie!
          </p>
          <Link to="/Schedule">          
            <button className="relative inline-flex h-14 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none hover:shadow-[0_0_35px_rgba(255,127,0,0.5)]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7f00_0%,#000000_50%,#ff7f00_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-8 py-3 text-base font-semibold text-white backdrop-blur-3xl gap-2 hover:bg-zinc-900">
               Schedule
                <ArrowRight className="w-5 h-5 text-[#ff7f00]" />
              </span>
            </button>
          </Link>
        </div>

       

        {/* Event Details Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {  value: "13 December", icon: <Calendar className="text-[#ff7f00] w-6 h-6" /> },
              {  value: "Sauliere hall", icon: <MapPin className="text-[#ff7f00] w-6 h-6" /> },
              {  value: "9:00 AM", icon: <Clock className="text-[#ff7f00] w-6 h-6" /> }
            ].map((item) => (
              <div key={item.value} className="relative">
                <div className="py-6 flex flex-col items-center justify-center gap-3">
                  {item.icon}
                  <p className="text-2xl font-bold bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">{item.value}</p>
                </div>
                {/* Vertical line on the right */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-[#ff7f00]/20 to-transparent last:hidden" />
                {/* Horizontal line for mobile */}
                <div className="md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff7f00]/20 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* General Rules Section */}
        <section className="mb-16">
          <div className="bg-zinc-800/20 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800/50">
            <h2 className="text-2xl font-bold text-[#ff7f00] mb-6 drop-shadow-[0_0_15px_rgba(255,127,0,0.3)]">
              General Rules
            </h2>
            <ul className="space-y-4">
              {[
                "There are a total of 9 events: 4-onstage and 5-offstage.",
                "Multiple teams can participate from a college, but One participant/team shall represent the department.",
                "Departments with two shifts may send one representation each.",
                "ID cards and bonafide certificates are mandatory for campus entry.",
                "Timings for the on-spot registration starts from 8 am to 9 am.",
                "Vulgarity or Humiliation of any person, will lead to disqualification of the participants.",
                "Participants are requested to arrive at the venue 30 minutes prior to the event",
                "Volunteers will be there to assist the Participants",
                "Participants should note down the venue and timings",
                "Maintaining discipline is also a criteria for the final judgement",
                "The decision of the judges will be final and binding.",



              ].map((rule, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff7f00]/20 text-[#ff7f00] flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span className="text-zinc-300">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
           {/* Contact Information Section */}
        <section className="mt-24 mb-10">
          <h2 className="text-2xl font-bold text-[#ff7f00] mb-4 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-zinc-300">
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>Dr. J. Jerald Inico</p>
              <p>Head of Department</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>Dr. I. Justin Sophia</p>
              <p>Co-ordinator</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>Dr. A. Jasmine Jinitha</p>
              <p>President FIT</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>Dr. E. Gangadevi</p>
              <p>Vice - President FIT</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>R. Saran Babu</p>
              <p>Joint Secretary</p>
              <p>Phone: 88254 07585</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>S. Joshwa Maria Joseph</p>
              <p>Cultural Secretary</p>
              <p>Phone: 63808 05183</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>D. L. Ruban Raj</p>
              <p>Event Secretary</p>
              <p>Phone: 97916 12747</p>
            </div>
            <div className="p-4 border border-zinc-700 rounded-lg">
              <p>U. Lalith Chandran</p>
              <p>Secretary</p>
              <p>Phone: 89395 82686</p>
            </div>
          </div>
        </section>
        </section>
      </div>
    </div>
  );
}

