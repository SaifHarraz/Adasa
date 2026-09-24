import BlogFilterBar from "../Components/Ui/Blog/BlogFilterBar";
import BlogHero from "../Components/Ui/Blog/BlogHero";
import BlogGrid from "../Components/Ui/Blog/BlogGrid";
import { posts } from "../assets/postsData/posts.json";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("category") || "all";
  const [searchValue, setSearchValue] = useState("");
  const activeFiltering =
    filterValue !== "all" || searchValue.trim() !== "";
    
  const clearFilters = () => {
    setSearchValue("");
    setSearchParams({});
  };

  const handleFilterChange = (value) => {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  const filteredPosts = posts
    .filter((post) => {
      return filterValue === "all" || post.category === filterValue;
    })
    .filter((post) => {
      const search = searchValue.toLowerCase().trim();

      return (
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search)
      );
    });

  return (
    <div className="min-h-screen bg-base">
      <BlogHero />

      <BlogFilterBar
        filterValue={filterValue}
        setFilterValue={handleFilterChange}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <BlogGrid
        posts={filteredPosts}
        activeFiltering={activeFiltering}
        clearFilters={clearFilters}
      />
    </div>
  );
}