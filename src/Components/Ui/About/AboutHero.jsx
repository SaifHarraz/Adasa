export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">

  
  <div className="absolute inset-0 bg-base" />

  
  <div className="absolute inset-0 grid-bg" />

  
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />

    <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
  </div>

  
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

    
    <span className="section-label inline-flex items-center gap-2 mb-6">
      من نحن
    </span>

    
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
      مهمتنا هي{" "}
      <span className="gradient-text">
        الإعلام والإلهام
      </span>
    </h1>

    
    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
      مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
      ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
      المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
    </p>

    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

      
      <div className="glass-card p-6">
        <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block" />

        <div className="text-3xl font-bold gradient-text mb-1">
          +2مليون
        </div>

        <div className="text-sm text-neutral-500">
          قارئ شهرياً
        </div>
      </div>

      
      <div className="glass-card p-6">
        <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block" />

        <div className="text-3xl font-bold gradient-text mb-1">
          +500
        </div>

        <div className="text-sm text-neutral-500">
          مقالة منشورة
        </div>
      </div>

      
      <div className="glass-card p-6">
        <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block" />

        <div className="text-3xl font-bold gradient-text mb-1">
          +50
        </div>

        <div className="text-sm text-neutral-500">
          كاتب خبير
        </div>
      </div>

      
      <div className="glass-card p-6">
        <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block" />

        <div className="text-3xl font-bold gradient-text mb-1">
          +15
        </div>

        <div className="text-sm text-neutral-500">
          تصنيف
        </div>
      </div>

    </div>

  </div>
</section>
  )
}
