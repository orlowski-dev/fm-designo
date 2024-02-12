import Navigation from "../navigation";

const AppHeader = () => {
  return (
    <header className="sticky top-0 left-0 z-10 bg-white max-w-1112 mx-auto p-6 flex items-center justify-between">
      <div>
        <a href="/">
          <img src="/logo-dark.svg" alt="logo dark" />
        </a>
      </div>
      <Navigation />
    </header>
  );
};

export default AppHeader;
