
import { FaLocationDot } from "react-icons/fa6";

interface ICard {
  location: string;
  img: string;
  date: string;
  heading: string;
  content: string;
  alt: string;
  link: string;
}
const Card: React.FC<ICard> = ({
  location,
  img,
  alt,
  date,
  heading,
  content,
  link,
}) => {
  return (
    <div className="co flex justify-center mt-12 gap-10  ">
      <div className="left flex justify-center items-center  ">
        <div className="image overflow-hidden rounded-xl max-w-[210px]">
          <img src={img} className="object-cover aspect-[10/16] " alt={alt} />
        </div>
      </div>
      <div className="right flex-[0.4] p-3 ">
        <div className="flex flex-col justify-center ">
          <div className="maps flex  items-center mt-8  ">
            <div className="flex items-center justify-self-start gap-2 text-[1.3vw]">
              <span>
                <FaLocationDot className="text-[#F5595A]" />
              </span>{" "}
              {location}
            </div>
            <a
              className="hover:underline ml-14 text-[#928E9B]"
              href={link}
              target="_blank"
            >
              {" "}
              view on google maps
            </a>
          </div>
          <div>
            <h1 className="text-[2vw] font-[800] mt-4">{heading}</h1>
            <p className="mt-3 font-[700]">{date}</p>
            <p className="mt-8">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
