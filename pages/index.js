import { Inter } from "@next/font/google";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";

const inter = Inter({ subsets: ["latin"] });

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production. - it makes builgin fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production. - it makes builgin fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production. - it makes builgin fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React Framework for Production. - it makes builgin fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
    date: "2022-02-10",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
