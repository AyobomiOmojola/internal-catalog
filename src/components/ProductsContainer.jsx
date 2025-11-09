import { BsArrowRight } from "react-icons/bs";
import { useGlobalContext } from "../context";

const ProductsContainer = ({ displayedProducts }) => {
  const { handleProductDetail } = useGlobalContext();

  return (
    <div className="basis-3/4 px-4 grid grid-cols-1 md:grid-cols-3 gap-4 shadow-[-2px_0_0_var(--color-brownAccent)]">
      {displayedProducts.map((product) => {
        const { id, image, name } = product;
        return (
          <div
            className="h-[400px] rounded-t-xl bg-white cursor-pointer"
            key={id}
            onClick={() => handleProductDetail(id)}
          >
            <div className="h-[300px] overflow-hidden">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover  rounded-xl hover:scale-105 transition-transform duration-600"
              />
            </div>
            <div className="flex h-[100px] justify-between items-center px-6 border-t-2 border-b-2 border-lightBrown ">
              {/* <p>{id}</p> */}
              <p className="font-marcellus text-xl tracking-wide">{name}</p>
              <button className="text-2xl cursor-pointer">
                <BsArrowRight />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductsContainer;
