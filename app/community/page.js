import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <div className="text-white pt-32 px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]">
          One shared passion: <span className="text-purple-300">Food</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Join our community and share your favorite recipes!
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="space-y-12">

        <h2 className="text-3xl font-semibold text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Community Perks
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          
          {/* PERK 1 */}
          <li className="flex flex-col items-center text-center 
            bg-[rgba(255,255,255,0.1)] backdrop-blur-xl 
            p-6 rounded-2xl border border-white/20
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            hover:bg-[rgba(255,255,255,0.15)]
            transition">
            
            <Image src={mealIcon} alt="A delicious meal" className="w-20 h-20 mb-4" />
            <p className="text-lg font-medium">Share & discover recipes</p>
          </li>

          {/* PERK 2 */}
          <li className="flex flex-col items-center text-center
            bg-[rgba(255,255,255,0.1)] backdrop-blur-xl 
            p-6 rounded-2xl border border-white/20
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            hover:bg-[rgba(255,255,255,0.15)]
            transition">
            
            <Image src={communityIcon} alt="A crowd of people cooking" className="w-20 h-20 mb-4" />
            <p className="text-lg font-medium">Find new friends & like-minded people</p>
          </li>

          {/* PERK 3 */}
          <li className="flex flex-col items-center text-center 
            bg-[rgba(255,255,255,0.1)] backdrop-blur-xl 
            p-6 rounded-2xl border border-white/20
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            hover:bg-[rgba(255,255,255,0.15)]
            transition">
            
            <Image src={eventsIcon} alt="A cooking event crowd" className="w-20 h-20 mb-4" />
            <p className="text-lg font-medium">Participate in exclusive events</p>
          </li>

        </ul>
      </main>
    </div>
  );
}
