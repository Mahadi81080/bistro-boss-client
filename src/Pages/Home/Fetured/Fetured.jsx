import SectionTitle from "../../../Components/SectionTitle";
import feturedImg from "../../../assets/home/featured.jpg";

const Fetured = () => {
  return (
    <div className="fetured-img bg-fixed py-8 text-white ">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="flex justify-center items-center gap-8 pb-16 pt-8 px-32">
        <div>
          <img src={feturedImg} alt="" />
        </div>
        <div>
          <h3 className="text-xl">March 20, 2023</h3>
          <h2 className="text-xl"> WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-white mt-4 text-white">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
