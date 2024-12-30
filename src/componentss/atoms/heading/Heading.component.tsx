import { PropsWithChildren } from "react";
import Headline from "../head_line/Headline.component";

const Heading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Headline as="h1" color="base-black" size="text-3xl">
      {children}
    </Headline>
  );
};

export default Heading;
