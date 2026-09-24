export default function BlogHero() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-base"></div>
      
      
      <div className="absolute inset-0 grid-bg"></div>
      
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        
        <span className="section-label inline-flex items-center gap-2 mb-6">
          مدونتنا
        </span>

        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          استكشف <span className="gradient-text">مقالاتنا</span>
        </h1>

        
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>

      </div>
    </div>
  )
}
