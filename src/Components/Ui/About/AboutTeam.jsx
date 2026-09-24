import {posts} from "../../../assets/postsData/posts.json";
import TeamMember from "./TeamMember";

export default function AboutTeam() {
  return ( 
    <section className="py-20 bg-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="text-center mb-16">
          <span className="section-label mb-4">فريقنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تعرف على كتابنا</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          

          <div className="group bg-base-card rounded-2xl p-6 text-center border border-base-border hover:border-orange-500/30 transition-all duration-300">
            
            
            <div className="relative inline-block mb-4">
              <img 
                alt="سالم أحمد" 
                className="w-24 h-24 rounded-full object-cover ring-4  ring-base-border group-hover:ring-orange-500/30 transition-all" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              /> 
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-base-card flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>

            
            <h3 className="font-bold text-white text-lg">سالم أحمد</h3>
            <p className="text-orange-500 text-sm font-medium mb-4">مصور محترف</p>

            
            <div className="flex justify-center gap-3">
              <a href="#" className="w-9 h-9 bg-base-border rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-base-border rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-base-border rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>

          </div>
          {posts.map((post) =>  <TeamMember author={post.author} /> )}
        </div>
      </div>
    </section>
  );
}

