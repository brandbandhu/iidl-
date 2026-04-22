import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container-main flex flex-col items-center justify-center gap-1 py-3 px-4 sm:px-6 lg:px-8 text-center">
        <img src={logo} alt="IIDL Logo" className="h-14 w-auto sm:h-16 object-contain" />
        <p className="text-xs sm:text-sm text-muted-foreground">
          What we do: Leadership education & public affairs training
        </p>
      </div>
    </header>
  );
};

export default Header;
