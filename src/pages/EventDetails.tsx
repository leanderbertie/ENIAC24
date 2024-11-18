import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { eventsData } from '../data/events';
import EventInfo from '../components/EventInfo';
import EventRules from '../components/EventRules';


// Update the image path to point to public folder
const EVENT_BANNER_IMAGE = '/images/eventdetailsimage.jpg';

export default function EventDetails() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Find the event in all categories
  const event = Object.values(eventsData)
    .flat()
    .find(e => e.id === eventId);

  if (!event) {
    navigate('/events');
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#ff7f00]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#ff7f00]/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,127,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,127,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Link to="/events" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8">
          <ArrowLeft size={20} />
          Back to Events
        </Link>

        {/* Centered Content Container */}
        <div className="flex flex-col items-center">
          {/* Project Card style image */}
          <div className="mb-12 w-full">
            <div className="bg-zinc-800/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-zinc-800/30 w-full">
              <div className="h-[300px] relative overflow-hidden">
                <img 
                  src={EVENT_BANNER_IMAGE}
                  alt={event.title}
                  className="object-cover w-full h-full opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-[0_0_25px_rgba(255,127,0,0.3)]">
                    {event.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Info Section */}
          <div className="max-w-3xl w-full text-center mb-16">
            <p className="text-xl text-zinc-300 mb-8">{event.description}</p>
            
            <EventInfo event={event} />

            <a 
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff7f00] text-white rounded-full hover:bg-[#ff4d00] transition-colors"
            >
              Register Now <ArrowRight size={20} />
            </a>
          </div>

          {/* Rules Section */}
          <div className="w-full max-w-3xl">
            <EventRules event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}