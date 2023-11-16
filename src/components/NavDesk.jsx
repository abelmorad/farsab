function NavDesk() {
  return (
    <nav className="hidden gap-6 text-lg font-medium tablet:flex">
      {[
        ["1", "Home", "#"],
        ["2", "Services", "#services"],
        ["4", "About", "#about"],
        ["5", "Contact", "#contact"],
      ].map(([id, title, path]) => (
        <a className="text-slate-950 text-lg font-medium underline-link hover:text-yellow-500 focus:text-yellow-500" href={path} key={id}>
          {title}
        </a>
      ))}
    </nav>
  );
}

export default NavDesk;
