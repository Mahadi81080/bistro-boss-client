import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
    const {name,category,recipe,price,_id} =useLoaderData()
    const { register, handleSubmit } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          // now send menu item data to the server with the image
          const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url,
          };
          const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
          console.log(menuRes.data);
          if (menuRes.data.modifiedCount>0) {
            // reset()
            toast.success(`${name} is updated to the menu`);
          }
        }
        console.log("with image url", res.data);
      };
    return (
        <div>
            <SectionTitle heading='UPDATE ITEM' subHeading='refech menu'>

            </SectionTitle>
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#f3f3f3] w-[850px] p-20 mx-auto space-y-4"
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipe name*</span>
          </div>
          <input
            type="text"
            defaultValue={name}
            className="input input-bordered w-full max-w-full"
            {...register("name", { required: true })}
          />
        </label>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue={category}
              className="select select-bordered w-full"
              {...register("category", { required: true })}
            >
              <option disabled value="default">
                Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              type="text"
              defaultValue={price}
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-32"
            defaultValue={recipe}
            {...register("recipe", { required: true })}
          ></textarea>
        </label>
        <div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <button className="btn bg-[#8d6526] text-white">
        Update Recipe Details
        </button>
      </form>
      <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateItem;