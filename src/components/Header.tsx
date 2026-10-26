import Logo from "./Logo";
import { DesktopNav, HeadScrollState, MobileNav } from "./SiteNav";

export default function Header() {
  return (
    <header className="site-head">
      <div className="wrap">
        <Logo switchable />
        <DesktopNav />
        <MobileNav />
      </div>
      <HeadScrollState />
    </header>
  );
}
