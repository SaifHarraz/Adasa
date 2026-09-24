import { Link } from "react-router-dom";
import FeaturedArticle from "./FeaturedArticle";
import {posts} from "../../../assets/postsData/posts.json";

export default function FeaturedArticles() {
  return (
    <section className="relative overflow-hidden bg-base py-24">
  
  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-orange-500/5 to-transparent" />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    
    <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">

      <div>
        <span className="section-label mb-4">
          مميز
        </span>

        <h2 className="section-title text-white">
          مقالات مختارة
        </h2>

        <p className="section-subtitle max-w-lg">
          محتوى منتقى لبدء رحلة تعلمك
        </p>
      </div>

      
      <Link
        to="/blog"
        className="btn-primary group inline-flex items-center gap-2"
      >
        عرض الكل

        <svg
          className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>

    
    <div className="space-y-8">
    
   {posts.filter(post => post.featured).map(post => (
  <FeaturedArticle key={post.id} post={post} />
))}
    </div>
  </div>
</section>
  )
}
