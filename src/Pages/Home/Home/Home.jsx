import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Fetured from "../Fetured/Fetured";
import PoularMenu from "../PopularMenu/PoularMenu";
import Testmonials from "../Testmonials/Testmonials";
import Cover from "../../Shared/Cover/Cover";
import chefService from "../../../assets/home/chef-service.jpg";
import Contact from "../../../Components/Contact";
import ChefRecomment from "../../../Components/ChefRecomment";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Minu | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="mx-10">
        <Category></Category>
        <Cover
          img={chefService}
          height={"450px"}
          title={"Bistro Boss"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
        ></Cover>
        <PoularMenu></PoularMenu>
        <Contact></Contact>
        <ChefRecomment></ChefRecomment>
      </div>
      <Fetured></Fetured>
      <Testmonials></Testmonials>
    </div>
  );
};

export default Home;
