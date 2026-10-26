import { siteConfig } from "@/lib/site-config";
import Logo from "./Logo";
import { LineIcon } from "./Icons";

export default function LandingHeader() {
  return (
    <header className="site-head">
      <div className="wrap justify-between">
        <Logo />
        <a className="head-call !inline-flex" href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}>
          <LineIcon name="phone" />
          {siteConfig.hotline}
        </a>
      </div>
    </header>
  );
}
