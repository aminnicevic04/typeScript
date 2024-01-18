import { ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
};

function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */} {/* first way */}
      <img {...image} /> {/* second way */}
      {children}
    </header>
  );
}

export default Header;
