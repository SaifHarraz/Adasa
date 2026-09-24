export default function AboutHaveQuestions() {
  return (
    <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
      
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
      </div>

      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
        </p>

        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <a 
            href="mailto:hello@adasah.com" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-base text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            تواصل معنا
          </a>

          <a 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-base transition-all duration-300" 
            href="/blog" 
            data-discover="true"
          >
            تصفح المقالات
          </a>

        </div>
      </div>

    </section>
  )
}
