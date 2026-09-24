import { Link, NavLink } from "react-router-dom";
import  icon from "../../assets/icon.png"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(Math.min(window.scrollY, 80));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
        : "text-neutral-400 hover:text-white"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
        : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white"
    }`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        background:
          scrollAmount === 0
            ? "#161616"
            : scrollAmount >= 80
              ? "#0a0a0a"
              : `linear-gradient(
                  to bottom,
                  #161616 ${Math.max(0, 80 - scrollAmount - 20)}px,
                  #0a0a0a ${Math.min(80, 80 - scrollAmount + 20)}px
                )`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            className="flex items-center gap-3 group"
            to="/"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                alt="Photography Logo"
                className="w-full h-full object-cover"
                src={icon}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                عدسة
              </span>

              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-base-card rounded-full p-1.5 border border-base-border">
              <NavLink className={navLinkClass} to="/">
                الرئيسية
              </NavLink>

              <NavLink className={navLinkClass} to="/blog">
                المدونة
              </NavLink>

              <NavLink className={navLinkClass} to="/about">
                من نحن
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button aria-label="البحث" className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-base-card rounded-xl transition-all duration-300 border border-transparent hover:border-base-border">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            
            <Link className="btn-primary text-sm" to="/blog">
              ابدأ القراءة
            </Link>
          </div>

          <button 
            aria-label="القائمة"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-base-card rounded-xl transition-all duration-300 border border-transparent hover:border-base-border"
          >
            <svg
              className="w-6 h-6"
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

        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="bg-base-card backdrop-blur-xl rounded-2xl p-4 border border-base-border mb-4">
            <div className="flex flex-col space-y-1">
              <NavLink onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass} to="/">
                الرئيسية
              </NavLink>

              <NavLink onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass} to="/blog">
                المدونة
              </NavLink>

              <NavLink onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass} to="/about">
                من نحن
              </NavLink>

              <NavLink
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-sm text-center mt-2"
                to="/blog"
              >
                ابدأ القراءة
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

