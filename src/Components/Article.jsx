import React from "react";

const Article = ({id,title,description,img}) => {
  return (
    <div>
      <article className="flex gap-4 ">
        <img src={img} className="w-40" alt={`image of article titled ${title}`}/>
        <div className="flex flex-col justify-between">
          <h2 className="text-slate-300 font-bold text-3xl">{id}</h2>
          <h3 className="transition text-2xl font-bold duration-300 hover:text-softRed">{title}</h3>
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
};

export default Article
