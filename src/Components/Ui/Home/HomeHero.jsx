import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-base">
      <div className="absolute inset-0 grid-bg"></div>

      <div className="absolute top-20 left-10 h-72 w-72 rounded-full glow-orange blob"></div>

      <div
        className="absolute right-10 bottom-20 h-96 w-96 rounded-full glow-yellow blob"
        style={{ animationDelay: "-2s" }}
      ></div>

      <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="section-label mb-8 inline-flex items-center gap-2 animate-fade-in">
            <span className="text-sm font-medium text-neutral-300">
              مرحباً بك في عدسة
            </span>
          </div>

          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              className="btn-primary group inline-flex items-center justify-center gap-2"
              to="/blog"
            >
              <span>استكشف المقالات</span>

              <svg
                className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>

            <Link
              className="btn-secondary inline-flex items-center justify-center gap-2"
              to="/about"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <div
              className="glass-card p-4 transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: "0ms" }}
            >
              <i className="fa-solid fa-newspaper mb-1 text-2xl text-orange-500"></i>
              <p className="gradient-text text-2xl font-bold md:text-3xl">
                +50
              </p>
              <p className="text-sm text-neutral-500">مقالة</p>
            </div>

            <div
              className="glass-card p-4 transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: "100ms" }}
            >
              <i className="fa-solid fa-users mb-1 text-2xl text-orange-500"></i>
              <p className="gradient-text text-2xl font-bold md:text-3xl">
                +10ألف
              </p>
              <p className="text-sm text-neutral-500">قارئ</p>
            </div>

            <div
              className="glass-card p-4 transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: "200ms" }}
            >
              <i className="fa-solid fa-folder-open mb-1 text-2xl text-orange-500"></i>
              <p className="gradient-text text-2xl font-bold md:text-3xl">
                4
              </p>
              <p className="text-sm text-neutral-500">تصنيفات</p>
            </div>

            <div
              className="glass-card p-4 transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: "300ms" }}
            >
              <i className="fa-solid fa-pen-nib mb-1 text-2xl text-orange-500"></i>
              <p className="gradient-text text-2xl font-bold md:text-3xl">
                6
              </p>
              <p className="text-sm text-neutral-500">كاتب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

