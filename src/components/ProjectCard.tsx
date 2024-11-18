import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Event } from '../data/events';

type ProjectCardProps = Event;

export default function ProjectCard({ id, title, image }: ProjectCardProps) {
  return (
    <Link 
      to={`/event/${id}`}
      className="bg-zinc-800/30 backdrop-blur-sm rounded-3xl overflow-hidden group cursor-pointer card-hover border border-zinc-800/50"
    >
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="w-8 h-8 rounded-full bg-zinc-700/50 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}