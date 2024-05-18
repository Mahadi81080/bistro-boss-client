
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PoularMenu = () => {
  const [menu]=useMenu()
  const popular=menu.filter(item=>item.category === "popular")
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const populerItems = data.filter((item) => item.category === "popular");
  //       setMenu(populerItems);
  //     });
  // }, []);
  return (
    <section className="my-20">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 mt-2">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PoularMenu;
