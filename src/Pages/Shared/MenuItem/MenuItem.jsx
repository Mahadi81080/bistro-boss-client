const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img style={{borderRadius:"0 150px 200px 150px"}} className="w-[90px] h-[80px]" src={image} alt="" />
      <div>
        <h3 className="uppercase text-lg">{name}---------</h3>
        <p className="text-[#a3a3a3] text-base">{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
