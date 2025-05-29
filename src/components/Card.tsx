import { FaLocationDot } from "react-icons/fa6";

interface ICard {
  id?: number;
  img: {
    src: string;
    alt: string;
  };
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
}

const Card: React.FC<ICard> = ({
  country,
  img,
  dates,
  title,
  text,
  googleMapsLink,
}) => {
  return (
    <div className="co flex md:flex-row flex-col-reverse justify-center mt-12 gap-10  ">
      <div className="left flex justify-center items-center  ">
        <div className="image overflow-hidden rounded-xl max-w-[95%] p-2 md:max-w-[210px] shrink-0">
          <img
            src={img.src}
            className="object-cover w-full h-full rounded-xl md:w-auto md:h-auto md:aspect-[10/16]  "
            alt={img.alt}
          />
        </div>
      </div>
      <div className="right flex-[0.4] p-3 ">
        <div className="flex flex-col justify-center ">
          <div className="maps flex  items-center mt-8  ">
            <div className="flex items-center justify-self-start gap-2 text-[3.5vh] md:text-[1.3vw]">
              <span>
                <FaLocationDot className="text-[#F5595A]" />
              </span>{" "}
              {country}
            </div>
            <a
              className="hover:underline ml-14 text-[#928E9B]"
              href={googleMapsLink}
              target="_blank"
            >
              {" "}
              view on google maps
            </a>
          </div>
          <div>
            <h1 className="text-[5vh] md:text-[2vw] font-[800] mt-4">
              {title}
            </h1>
            <p className="mt-3 font-[700]">{dates}</p>
            <p className="mt-8">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
