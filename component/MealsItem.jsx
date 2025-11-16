import Link from 'next/link';
import Image from 'next/image';

export default function MealsItem({ title, slug, image, summary, creator }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <header className="flex gap-4 p-4">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">by {creator}</p>
        </div>
      </header>

      <div className="px-4 pb-4">
        <p className="text-gray-700 mb-4 leading-relaxed">{summary}</p>

        <div>
          <Link
            href={`/meals/${slug}`}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
