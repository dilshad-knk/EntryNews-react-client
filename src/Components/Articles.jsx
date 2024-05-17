import React from "react";
import Article from "./Article";
import retroPCs from '../assets/images/image-retro-pcs.jpg';
import topLaptops from '../assets/images/image-top-laptops.jpg';
import gamingGrowth from '../assets/images/image-gaming-growth.jpg';

const Articles = () => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
      <Article 
        id="01" 
        title="Reviving Retro PCs" 
        description="What happens when old PCs are given modern upgrades?" 
        img={retroPCs} 
      />
      <Article 
        id="02" 
        title="Top 10 Laptops of 2022" 
        description="Our best picks for various needs and budgets." 
        img={topLaptops} 
      />
      <Article 
        id="03" 
        title="The Growth of Gaming" 
        description="How the pandemic has sparked fresh opportunities." 
        img={gamingGrowth} 
      />
    </section>
  );
};

export default Articles;
