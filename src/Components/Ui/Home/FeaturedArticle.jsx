import { Link } from "react-router-dom";

export default function FeaturedArticle({post}) {
  return (
<article className="group relative overflow-hidden card">

  <Link to={`/blog/${post.slug}`} className="block">

    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">

      
      <div className="relative h-72 overflow-hidden md:h-100">

        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-xs font-semibold text-white">

              <svg
                className="h-3.5 w-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034c-.784-.57-1.838-.57-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              مميز
            </span>
          </div>
        )}

      </div>

      
      <div className="flex flex-col justify-center bg-base-card p-8 md:p-10">

        
        <div className="mb-4 flex items-center gap-3">

          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
            {post.category}
          </span>

          <span className="flex items-center gap-1 text-sm text-neutral-500">

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {post.readTime}

          </span>

        </div>

        
        <h2 className="mb-4 text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
          {post.title}
        </h2>

        
        <p className="mb-6 line-clamp-3 leading-relaxed text-neutral-400">
          {post.excerpt}
        </p>

        
        <div className="mt-auto flex items-center justify-between">

          
          <div className="flex items-center gap-3">

            <div className="relative">

              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-base-border"
              />

              <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-2 border-base-card bg-orange-500" />

            </div>

            <div>

              <p className="text-sm font-semibold text-white">
                {post.author.name}
              </p>

              <p className="text-xs text-neutral-500">
                {new Date(post.date).toLocaleDateString("ar-EG", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

            </div>

          </div>

          
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3">

            اقرأ المقال

            <svg
              className="h-5 w-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>

          </span>

        </div>

      </div>

    </div>

  </Link>

</article>


  )
}
