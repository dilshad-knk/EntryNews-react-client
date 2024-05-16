import React from "react";
import heroImg from '../assets/images/image-web-3-desktop.jpg'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      
      <main className="grid md:grid-cols-3  gap-5">
        <section className="hero_description md:col-span-2 ">
          <img
           className="h-auto md:h-96 object-cover lg:h-auto"
            src={heroImg}
            alt="Entri news hero image"
          />
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
            <h1 className="text-4xl font-bold p-2"> The Bright Future of Web 3.0?</h1>
            <div className="">
              <p className="mb-4">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Link to="#" className="button bg-red-500">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <aside className="bg-veryDarkBlue p-4 text-white flex flex-col justify-around">
          <p className="font-bold pt-2 text-softOrange text-3xl">New</p>
          <article className="my-5 border-b pb-3">
            <a href=""  className="text-xl font-bold hover:text-softOrange transition duration-300"> Hydrogen VS Electric Cars</a>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article className="my-5 border-b pb-3">
            <a href="" className="text-xl font-bold hover:text-softOrange transition duration-300"> The Downsides of AI Artistry</a>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article className="my-5 border-b pb-3">
            <a href="" className="text-xl font-bold hover:text-softOrange transition duration-300"> Is VC Funding Drying Up?</a>
            <p>
              {" "}
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </aside>
      </main>
    </div>
  );
};

export default Hero;
