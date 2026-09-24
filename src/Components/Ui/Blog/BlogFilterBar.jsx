export default function BlogFilterBar({
  filterValue,
  setFilterValue,
  searchValue,
  setSearchValue,
}) {
  const categories = [
    { label: "جميع المقالات", value: "all" },
    { label: "إضاءة", value: "إضاءة" },
    { label: "بورتريه", value: "بورتريه" },
    { label: "مناظر طبيعية", value: "مناظر طبيعية" },
    { label: "تقنيات", value: "تقنيات" },
    { label: "معدات", value: "معدات" },
  ];
  return (
    <div className="sticky top-20 z-40 bg-base/90 backdrop-blur-xl border-b border-base-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="input-dark w-full px-5 py-3 pl-5 pr-12"
              type="text"
              value={searchValue}
              aria-label="ابحث في المقالات"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilterValue(category.value)}
                className={`px-4 py-2 rounded-xl cursor-pointer text-sm font-medium transition-all duration-300 ${
                  filterValue === category.value
                    ? "bg-orange-500 text-white"
                    : "bg-base-card text-neutral-400 border border-base-border hover:border-orange-500/30"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
