import type { Event } from '../data/events';

interface EventRulesProps {
  event: Event;
}

export default function EventRules({ event }: EventRulesProps) {
  return (
    <div className="bg-zinc-800/30 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800/50 mb-16">
      <h2 className="text-2xl font-bold text-[#ff7f00] mb-6">Event Rules</h2>
      <ul className="space-y-4">
        {event.rules.map((rule, index) => (
          <li key={index} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff7f00]/20 text-[#ff7f00] flex items-center justify-center text-sm">
              {index + 1}
            </span>
            <span className="text-zinc-300">{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}