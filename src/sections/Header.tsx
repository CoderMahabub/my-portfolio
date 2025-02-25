export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
      {/* <div className="flex justify-center items-center fixed top-3"> */}
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur  rounded-full">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="https://github.com/CoderMahabub"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          target="_blank"
        >
          Github Profile
        </a>
      </nav>
    </div>
  );
};
