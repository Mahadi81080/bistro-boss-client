import useMenu from "../Hooks/useMenu";
import OrderTab from "../Pages/Order/OrderTab/OrderTab";

 
const ChefRecomment = () => {
    const [menu]=useMenu()
    const popular = menu.filter(item => item.category === "popular").slice(0, 3);
    return (
        <div className="my-14">
            <OrderTab items={popular}></OrderTab>
        </div>
    );
};

export default ChefRecomment;