import { Calendar, MapPin, Clock } from 'lucide-react';

const scheduleData = [
    {
      time: "9:00 AM - 10:00 AM",
      event: "Inauguration",
      venue: "Sauliere Hall"
    },
    {
      time: "10:00 AM",
      event: "Mr and Mrs ENIAC",
      venue: "Sauliere Hall"
    },
    {
      time: "10:30 AM",
      event: "Bug Hunter Arena",
      venue: "Lab"
    },
    {
      time: "10:30 AM",
      event: "Pixel Craft",
      venue: "Lab"
    },
    {
      time: "10:30 AM",
      event: "Electrocode",
      venue: "Lab"
    },
    {
      time: "10:30 AM",
      event: "Team Hunt",
      venue: "Smart Room"
    },
    {
      time: "10:30 AM",
      event: "Think Tank",
      venue: "Class Room"
    },
    {
      time: "12:00 PM",
      event: "Quiztopia",
      venue: "Sauliere Hall"
    },
    {
      time: "1:00 PM",
      event: "Ad Mavericks",
      venue: "Sauliere Hall"
    },
    {
      time: "2:00 PM",
      event: "Remote Chaos",
      venue: "Sauliere Hall"
    },
    {
      time: "3:00 PM - 4:00 PM",
      event: "Valedictory",
      venue: "Sauliere Hall"
    }
];

export default function Schedule() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Glowing orbs - adjusted sizes for mobile */}
        <div className="absolute top-20 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#ff7f00]/5 rounded-full blur-[150px]" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,127,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,127,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-8 mb-8 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#ff7f00] drop-shadow-[0_0_25px_rgba(255,127,0,0.3)]">
            SCHEDULE
          </h1>
          <p className="text-base sm:text-xl text-zinc-300 max-w-3xl text-center px-2 sm:px-4">
            Join us for an action-packed day of creativity, innovation, and celebration at ENIAC 2024.
          </p>
        </div>

        {/* Schedule Section */}
        <div className="mb-8 sm:mb-16">
          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-[#ff7f00]/10 backdrop-blur-xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ff7f00]/20">
                  <th className="py-3 px-4 text-left text-[#ff7f00] bg-black/50">Time</th>
                  <th className="py-3 px-4 text-left text-[#ff7f00] bg-black/50">Event</th>
                  <th className="py-3 px-4 text-left text-[#ff7f00] bg-black/50">Venue</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((item, index) => (
                  <tr key={index} className="border-b border-[#ff7f00]/10 hover:bg-[#ff7f00]/5 transition-colors duration-200">
                    <td className="py-3 px-4 text-[#ff7f00] font-semibold">{item.time}</td>
                    <td className="py-3 px-4 font-semibold text-white">{item.event}</td>
                    <td className="py-3 px-4 text-zinc-300">{item.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden space-y-3">
            {scheduleData.map((item, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-[#ff7f00]/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-[#ff7f00] w-4 h-4" />
                  <div className="text-[#ff7f00] font-semibold">{item.time}</div>
                </div>
                <div className="font-semibold text-white mb-1">{item.event}</div>
                <div className="flex items-center gap-2 text-zinc-300 text-sm mb-1">
                  <MapPin className="text-[#ff7f00] w-4 h-4" />
                  {item.venue}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-4 sm:py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#ff7f00]/20"></div>
          </div>
        </div>

        {/* Event Details Section */}
        <div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 sm:p-8 border border-[#ff7f00]/10">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-[#ff7f00]">
            Event Details
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-[#ff7f00] w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="text-zinc-400 text-xs sm:text-sm mb-0.5">Date</h3>
                <p className="text-base sm:text-lg font-semibold">13 December 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#ff7f00] w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="text-zinc-400 text-xs sm:text-sm mb-0.5">Venue</h3>
                <p className="text-base sm:text-lg font-semibold">Sauliere  Hall</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#ff7f00] w-5 h-5 sm:w-6 sm:h-6" />
              <div>
                <h3 className="text-zinc-400 text-xs sm:text-sm mb-0.5">Time</h3>
                <p className="text-base sm:text-lg font-semibold">9:00 A.M Onwards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}