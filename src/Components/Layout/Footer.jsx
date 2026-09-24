import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="relative bg-base text-neutral-300 overflow-hidden border-t border-base-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-11 h-11 bg-linear-to-br  from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "rgba(249, 115, 22, 0.3) 0px 4px 20px",
                }}
              >
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <span className="text-xl font-bold text-white">عدسة</span>
            </Link>

            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex gap-2">
              <a
                href="https://twitter.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-base-card border  border-base-border hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>

              <a
                href="https://github.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-base-card border border-base-border hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="github"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.103-.253.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7.678 1.855.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com/company/adasah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-base-card border border-base-border hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="linkedin"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>

              <a
                href="https://youtube.com/@adasah"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-base-card border border-base-border hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="youtube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              استكشف
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  المدونة
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              التصنيفات
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/blog?category=إضاءة"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  إضاءة
                </Link>
              </li>

              <li>
                <Link
                  to="/blog?category=بورتريه"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  بورتريه
                </Link>
              </li>

              <li>
                <Link
                  to="/blog?category=مناظر طبيعية"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  مناظر طبيعية
                </Link>
              </li>

              <li>
                <Link
                  to="/blog?category=تقنيات"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  تقنيات
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              ابقى على اطلاع
            </h3>

            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="space-y-3">
              <div className="relative">
                <input
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 text-sm input-dark"
                  type="email"
                />
              </div>

              <button type="submit" className="w-full btn-primary text-sm">
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="relative border-t border-base-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © 2026 عدسة. صنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500"></i>{" "}
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                سياسة الخصوصية
              </Link>

              <Link
                to="/terms"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
