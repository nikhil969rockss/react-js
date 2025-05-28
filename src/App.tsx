const App = () => {
  return (
    <main className="min-h-screen bg-[#282D35]  text-white">
      <nav className="flex items-center gap-2 w-full h-28 bg-[#222222] p-3">
        <img className="w-24 pb-2" src="/logo.png" alt="react-logo" />
        <p className="text-[4vw] text-[#88D0E8] lg:text-[2vw]">React Facts</p>
      </nav>
      <div className="w-full h-[calc(100vh-112px)]   ">
        <div className="max-w-xl p-4 flex flex-col  gap-2 mt-16 mx-auto ">
          <h1 className="text-[5vw] font-[900]  lg:text-[3vw]">
            Fun Facts About React
          </h1>
          {[
            "was first released in 2013",
            "was originally created by jordan walke",
            "well over 100k star on github",
            "is maintained by meta",
            "Powers thousands of enterprise apps including mobile apps",
          ].map((item, index) => (
            <ul className="capitalize " key={index}>
              <li className="flex items-center gap-2 ">
                <span className="w-2 h-2 inline-block bg-white rounded-full"></span>
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
};
export default App;
