import { Calendar, Clock, MapPin } from 'lucide-react';
import type { Event } from '../data/events';

interface EventInfoProps {
  event: Event;
}

export default function EventInfo({ event }: EventInfoProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex items-center gap-4">
        <Calendar className="text-[#ff7f00]" size={24} />
        <div>
          <h3 className="text-zinc-400 text-sm">Date</h3>
          <p className="font-semibold">{event.date}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Clock className="text-[#ff7f00]" size={24} />
        <div>
          <h3 className="text-zinc-400 text-sm">Time</h3>
          <p className="font-semibold">{event.time}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MapPin className="text-[#ff7f00]" size={24} />
        <div>
          <h3 className="text-zinc-400 text-sm">Venue</h3>
          <p className="font-semibold">{event.venue}</p>
        </div>
      </div>
    </div>
  );
}