import AppOutlet from "../app_outlet/AppOutlet.component";
import Header from "../header/Header.component";

const HomeLayout: React.FC = () => {
  return (
    <>
      <Header />
      <AppOutlet />
    </>
  );
};

export default HomeLayout;
