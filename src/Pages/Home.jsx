import FeaturedArticles from "../Components/Ui/Home/FeaturedArticles";
import HomeHero from "../Components/Ui/Home/HomeHero";
import Subscribe from './../Components/Ui/Home/Subscribe';
import RecentArticles from './../Components/Ui/Home/RecentArticles';
import HomeDiscover from './../Components/Ui/Home/HomeDiscover';

export default function Home() {
  return (
    <>
      <HomeHero/>
      <FeaturedArticles/>
      <HomeDiscover />
      <RecentArticles/>
      <Subscribe/>
    </>
  )
}
