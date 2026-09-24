import { Link } from "react-router-dom";

export default function NoPageError() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-base">

      <div className="absolute inset-0 grid-bg"></div>

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]"></div>

        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]"></div>
      </div>

      <div className="relative text-center px-4 max-w-lg mx-auto">

        <div className="relative mb-6">
          <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
            404
          </h1>

          <div className="absolute inset-0 text-[140px] md:text-[180px] font-black text-orange-500/20 blur-2xl leading-none select-none pointer-events-none">
            404
          </div>
        </div>

        <div className="relative w-28 h-28 mx-auto mb-8">

          <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-orange-500"
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

          <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce"></div>

          <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          عفواً! الصفحة غير موجودة
        </h2>

        <p className="text-neutral-400 mb-8 text-lg">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">

          <Link
            className="btn-primary inline-flex items-center justify-center gap-2"
            to="/"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            الذهاب للرئيسية
          </Link>

          <Link
            className="btn-secondary inline-flex items-center justify-center gap-2"
            to="/blog"
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>

            تصفح المقالات
          </Link>

        </div>

        <div className="pt-8 border-t border-base-border">

          <p className="text-sm text-neutral-500 mb-4">
            قد تجد هذه مفيدة:
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">

            <Link
              className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              to="/blog"
            >
              المدونة
            </Link>

            <span className="text-neutral-600">•</span>

            <Link
              className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              to="/about"
            >
              من نحن
            </Link>

            <span className="text-neutral-600">•</span>

            <Link
              className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              to="/privacy"
            >
              الخصوصية
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}