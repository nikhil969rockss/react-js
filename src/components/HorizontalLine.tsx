type HorizontalLineProps = {
  className: string;
};
const HorizontalLine: React.FC<HorizontalLineProps> = ({ className }) => {
  return <div className={`w-full h-[1px] bg-[#F5F5F5] ${className}`}></div>;
};
export default HorizontalLine;
