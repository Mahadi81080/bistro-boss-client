const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-7 top-6 px-2 py-1 rounded-sm bg-slate-900 text-white">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 border-[#bc8709] text-[#bc8709]">
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
