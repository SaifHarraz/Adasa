import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="bg-base">
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-base"></div>

        <div className="absolute inset-0 grid-bg"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link
              className="text-neutral-400 hover:text-white transition-colors"
              to="/"
            >
              الرئيسية
            </Link>

            <svg
              className="w-4 h-4 text-neutral-600 rotate-180"
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

            <span className="text-orange-500 font-medium">
              شروط الخدمة
            </span>
          </nav>

          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
            <svg
              className="w-8 h-8 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            شروط الخدمة
          </h1>

          <p className="text-neutral-400 text-lg">
            آخر تحديث: 15 يناير 2026
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
          <div className="flex gap-4">
            <div className="shrink-0">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <div>
              <h3 className="font-semibold text-yellow-500 mb-1">
                إشعار مهم
              </h3>

              <p className="text-yellow-300/80 text-sm">
                يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا.
                بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="1" />
              الموافقة على الشروط
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة
                هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي
                من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
              </p>
            </div>
          </section>

          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="2" />
              رخصة الاستخدام
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض
                الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
              </p>

              <p className="text-neutral-300 font-medium mb-3">
                بموجب هذا الترخيص لا يجوز لك:
              </p>

              <ul className="space-y-2">
                <TermsListItem>تعديل أو نسخ المواد</TermsListItem>
                <TermsListItem>
                  استخدام المواد لأي غرض تجاري أو للعرض العام
                </TermsListItem>
                <TermsListItem>
                  محاولة فك أو عكس هندسة أي برنامج على الموقع
                </TermsListItem>
                <TermsListItem>
                  إزالة أي حقوق نشر أو علامات ملكية من المواد
                </TermsListItem>
                <TermsListItem>
                  نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر
                </TermsListItem>
              </ul>
            </div>
          </section>

          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="3" />
              إخلاء المسؤولية
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا
                يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات
                الأخرى.
              </p>
            </div>
          </section>

          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="4" />
              القيود
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي
                أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على
                الموقع.
              </p>
            </div>
          </section>

          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="5" />
              محتوى المستخدم
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً
                غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه
                وتعديله وتوزيعه.
              </p>

              <p className="text-neutral-300 font-medium mb-3">
                يجب ألا يكون محتواك:
              </p>

              <ul className="space-y-2">
                <TermsListItem>
                  أن يكون تشهيرياً أو فاحشاً أو مسيئاً
                </TermsListItem>
                <TermsListItem>
                  انتهاك حقوق الملكية الفكرية للآخرين
                </TermsListItem>
                <TermsListItem>
                  احتواء فيروسات أو أكواد ضارة
                </TermsListItem>
                <TermsListItem>
                  انتهاك أي قوانين أو لوائح معمول بها
                </TermsListItem>
                <TermsListItem>
                  الإعلان عن منتجات أو خدمات غير مصرح بها
                </TermsListItem>
              </ul>
            </div>
          </section>

          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="6" />
              التعديلات
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا
                الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
              </p>
            </div>
          </section>

          
          <section className="group">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <SectionNumber number="7" />
              معلومات الاتصال
            </h2>

            <div className="pr-11">
              <p className="text-neutral-400 leading-relaxed mb-4">
                إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
              </p>

              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@adasah.com
              </a>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-base-border">
          <p className="text-neutral-500 text-sm text-center">
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
            <Link
              className="text-orange-500 hover:text-orange-400 font-medium"
              to="/privacy"
            >
              سياسة الخصوصية
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionNumber({ number }) {
  return (
    <span className="shrink-0 flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
      {number}
    </span>
  );
}

function TermsListItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-neutral-400">
      <svg
        className="w-5 h-5 text-red-400 shrink-0 mt-0.5"
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

      <span>{children}</span>
    </li>
  );
}