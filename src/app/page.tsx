// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Content from "./content";
import Comments from "./comments";
import BlogPosts from "./blog-posts";
import Banner from "./banner";


export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Banner />
     
    
      <Footer />
    </>
  );
}
