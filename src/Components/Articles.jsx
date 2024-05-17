import React, { useEffect } from "react";
import Article from "./Article";

const Articles = () => {

  return(
  <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3  my-4 ">
    <Article id="01" title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades?" img="../assets/images/image-retro-pcs.jpg" />
    <Article id="02" title="Top 10 Laptops of 2022" description="Our best picks for various needs and budgets." img="../assets/images/image-top-laptops.jpg" />
    <Article id="03" title="The Growth of Gaming" description="How the pandemic has sparked fresh opportunities." img="../assets/images/image-gaming-growth.jpg" />
  </section>
  )
};

export default Articles;
