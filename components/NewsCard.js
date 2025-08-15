import Image from "next/image";

export default function NewsCard({ title, excerpt, image }) {
  return (
    <article className="overflow-hidden transition bg-white rounded-lg shadow cursor-pointer hover:shadow-lg">
      <div className="relative w-full h-48 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
        <span className="inline-block mt-3 font-medium text-blue-600 hover:underline">
          Read More →
        </span>
      </div>
    </article>
  );
}
