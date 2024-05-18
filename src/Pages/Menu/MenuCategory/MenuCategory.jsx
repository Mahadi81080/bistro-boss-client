import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, description, itemImg, height }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={itemImg}
          title={title}
          description={description}
          height={height}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-8 my-16 mx-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 border-black text-black">
          ORDER YOUR FABOURITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
