import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></Cover>
      {/* Main cover */}
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
      {/* Offerd menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desserts menu items */}
      <MenuCategory items={dessert} height={"450px"} title={"dessert"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} itemImg={dessertImg}></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory items={pizza} height={"450px"} title={"pizza"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} itemImg={pizzaImg}></MenuCategory>
      {/* Salad menu items */}
      <MenuCategory items={salad} height={"450px"} title={"salads"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} itemImg={saladImg}></MenuCategory>
      {/* Soup menu items */}
      <MenuCategory items={soup} height={"450px"} title={"soups"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} itemImg={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
