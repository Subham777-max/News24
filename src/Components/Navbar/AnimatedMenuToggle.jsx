function AnimatedMenuToggle({ isOpen, setIsOpen }) {
    
  function handleClick() {
    setIsOpen(!isOpen);
  }

  const commonLineClasses =  'block h-1 w-8 bg-gray-800 transition-all duration-300 ease-in-out origin-center';

  return (
    <button
      onClick={handleClick}
      className="z-[60] relative flex flex-col justify-around w-10 h-10 p-1 cursor-pointer focus:outline-none"
      aria-label="Toggle Menu"
      aria-expanded={isOpen}
    >
      <span
        className={`${commonLineClasses} 
          ${
            isOpen
              ? 'translate-y-2 rotate-45' 
              : 'translate-y-0 rotate-0'
          }`}
      ></span>
      <span
        className={`${commonLineClasses} 
          ${
            isOpen
              ? '-translate-y-2 -rotate-45' 
              : 'translate-y-0 rotate-0'
          }`}
      ></span>
    </button>
  );
}

export default AnimatedMenuToggle;