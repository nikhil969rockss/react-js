const Header = () => {
  return (
    <header className="bg-[#F55A5A] w-full flex justify-center items-center p-3 ">
      <nav className="flex items-center gap-3">
        <img src="/Globe.png" alt="globe-logo" />
        <p className="capitalize text-[3vw] lg:text-[2vw] font-[700] text-white">my travel journal.</p>
      </nav>
    </header>
  );
};
export default Header;
