import Link from "next/link";

export const Header = () => {
  return (
    <div 
      className="flex justify-center items-center fixed top-3 w-full z-10 scroll-smooth"
    >
      <nav 
        className="flex gap-1 p-0.5 border border-white/15 
        rounded-full bg-white/10 backdrop-blur"
      >
        <Link 
          href="#home"
          className="nav-item"
        >
          Home
        </Link>
        <Link 
          href="#project"
          className="nav-item"
        >
          Projects
        </Link>
        <Link 
          href="#about"
          className="nav-item"
        >
          About
        </Link>
        <Link 
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
};
