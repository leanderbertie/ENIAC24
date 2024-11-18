import ProjectCard from '../components/ProjectCard';
import { eventsData } from '../data/events';

export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#ff7f00]/5 rounded-full blur-[150px]" />
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,127,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,127,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#ff7f00] drop-shadow-[0_0_25px_rgba(255,127,0,0.3)]">
            EVENTS
          </h1>
          
          <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-6 sm:p-8 border border-[#ff7f00]/10">
            <p className="text-base sm:text-xl text-zinc-300 max-w-3xl text-center leading-relaxed">
              Step into the spotlight at ENIAC 2024 – the ultimate cultural event where creativity meets competition! Whether it's music, dance, drama, or more, this is your chance to shine.
              <b className="block mt-4 text-white">Register Now and Make Your Mark!</b>
            </p>
          </div>
        </div>

        {/* Onstage Events */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ff7f00] mb-8 drop-shadow-[0_0_15px_rgba(255,127,0,0.3)]">
            Onstage Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {eventsData.onstage.map((event) => (
              <ProjectCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        {/* Technical Events */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ff7f00] mb-8 drop-shadow-[0_0_15px_rgba(255,127,0,0.3)]">
            Technical Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {eventsData.technical.map((event) => (
              <ProjectCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        {/* Online Events */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#ff7f00] mb-8 drop-shadow-[0_0_15px_rgba(255,127,0,0.3)]">
            Online Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {eventsData.online.map((event) => (
              <ProjectCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}