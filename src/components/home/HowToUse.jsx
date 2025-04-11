import HowToUseCarousel from "./HowToUseCarousel";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import img9 from "../../assets/images/img9.png";
import img10 from "../../assets/images/img10.png";

const slides = [
  {
    img: img1,
    text: "Mountain apple juices for cocktails",
  },
  {
    img: img2,
    text: "Mountain apple juices for breakfast",
  },
  {
    img: img3,
    text: "Mountain apple juice in the spa area",
  },
  {
    img: img4,
    text: "Mountain apple juices in a long-stemmed glass with or without water glass",
  },
  {
    img: img5,
    text: "Mountain apple juices at the bar",
  },
  {
    img: img6,
    text: "Mountain apple juices finely cooled in the champagne bucket ",
  },
  {
    img: img7,
    text: "Mountain apple juices as an  elegant accompaniment to a meal",
  },
  {
    img: img8,
    text: " Mountain apple juices for meetings",
  },
  {
    img: img9,
    text: "Mountain apple juices for celebrations",
  },
  {
    img: img10,
    text: "Mountain apple juices as presents",
  },
];
const options = { loop: true };

function HowToUse() {
  return (
    <section className="border-secondary/30 mt-8 flex w-full flex-col border-b md:p-8 lg:px-8 lg:py-12">
      <h1 className="font-secondary text-secondary text-center text-2xl font-normal uppercase md:text-3xl lg:text-4xl">
        How you can use our juices
      </h1>
      <p className="font-secondary text-secondary mx-auto max-w-3xl px-6 py-4 text-center text-xs font-light md:mt-4 md:text-lg lg:mt-6 2xl:max-w-5xl">
        You can use our juices in a variety of different environments and
        settings. Pure and clear, distinctive and surprising, light and
        challenging, much of it in combination and not simply sweet. For people
        who have an open heart, and who delight in authentic experiences.
        Knowledge guides the senses.{" "}
        <span className="text-primary">
          Each of our juices has a unique profile.
        </span>
      </p>
      <div className="mx-auto mt-8 h-[340px] min-h-80 w-full max-w-4xl md:h-full">
        <HowToUseCarousel slides={slides} options={options} />
      </div>
    </section>
  );
}

export default HowToUse;
