import BlogArticleCardView from "./BlogArticleCardView";
import BlogArticleListView from "./BlogArticleListView";
import { useState } from "react";

export default function BlogGrid({ posts = [], activeFiltering, clearFilters }) {
  const [cardView, setCardView] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPosts, setPrevPosts] = useState(posts);

  if (posts !== prevPosts) {
    setPrevPosts(posts);
    setCurrentPage(0);
  }

  function articleView(CardViewValue) {
    setCardView(CardViewValue);
  }

  const cardsPerPage = 6;
  const totalPages = Math.ceil(posts.length / cardsPerPage);

  const visiblePosts = posts.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage,
  );

  function nextPage() {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const pageButtons = [];

  for (let i = 0; i < totalPages; i++) {
    pageButtons.push(
      <button
        key={i}
        aria-label={`صفحة ${i + 1}`}
        onClick={() => setCurrentPage(i)}
        className={`min-w-11 h-11 cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 ${
          currentPage === i
            ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
            : "bg-base-card text-neutral-400 border border-base-border hover:border-orange-500/50 hover:text-white"
        }`}
      >
        {i + 1}
      </button>,
    );
  }

  return (
   posts.length===0 ?( 
     <div className="text-center py-20">
  <div className="w-24 h-24 bg-base-card border border-base-border rounded-full flex items-center justify-center mx-auto mb-6">
    <svg
      className="w-12 h-12 text-neutral-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>

  <h3 className="text-2xl font-bold text-white mb-3">
    لا توجد مقالات
  </h3>

  <p className="text-neutral-400 mb-6">
    حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
  </p>

  <button
    onClick={clearFilters}
    className="btn-primary inline-flex items-center gap-2"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
    إعادة تعيين الفلاتر
  </button>
</div>):( 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
      
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-neutral-400">
          عرض <span className="font-bold text-white">{posts.length}</span> مقال
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center bg-base-card border border-base-border rounded-xl p-1">
            
            <button
              onClick={() => articleView(true)}
              className={`blog-view p-2 cursor-pointer rounded-lg transition-all duration-300 ${
                cardView
                  ? "bg-orange-500 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
              data-view="cards"
              title="عرض شبكي"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>

            
            <button
              onClick={() => articleView(false)}
              className={`blog-view p-2 rounded-lg cursor-pointer transition-all duration-300 ${
                !cardView
                  ? "bg-orange-500 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
              data-view="list"
              title="عرض قائمة"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {activeFiltering && (
            <button
              onClick={() => clearFilters()}
              className="text-sm cursor-pointer text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              مسح الفلاتر
            </button>
          )}
        </div>
      </div>

      
      <div
        className={`${
          cardView
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex flex-col gap-6"
        }`}
      >
        {cardView
          ? visiblePosts.map((post) => (
              <BlogArticleCardView post={post} key={post.id} />
            ))
          : visiblePosts.map((post) => (
              <BlogArticleListView post={post} key={post.id} />
            ))}
      </div>

      
      <div className="flex flex-wrap justify-center items-center gap-2 mt-12">
        <button
          aria-label="الصفحة السابقة"
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`p-3 rounded-xl border transition-all duration-300 ${
            currentPage === 0
              ? "bg-base border-base-border text-neutral-600 cursor-not-allowed"
              : "bg-base-card border-base-border text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          }`}
        >
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex flex-wrap justify-center items-center gap-1">{pageButtons}</div>

        <button
          aria-label="الصفحة التالية"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`p-3 rounded-xl border transition-all duration-300 ${
            currentPage === totalPages - 1
              ? "bg-base border-base-border text-neutral-600 cursor-not-allowed"
              : "bg-base-card border-base-border text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          }`}
        >
          <svg
            className="w-5 h-5 rotate-180"
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
        </button>
      </div>

      <p className="text-center text-neutral-500 mt-4 text-sm">
        صفحة {currentPage + 1} من {totalPages}
      </p>
    </div>)
);
}
