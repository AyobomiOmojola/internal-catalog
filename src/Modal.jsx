import { SlClose } from "react-icons/sl";
import { useGlobalContext } from "./context";
import { useEffect, useRef } from "react";
import { dimension } from "./data";

const Modal = () => {
  const { isModalOpen, closeModal, displayedProduct } = useGlobalContext();

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  const modalOverlay = `fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] grid place-items-center -z-10
    invisible opacity-0`;
  const showModal = `opacity-100 visible z-10 transition-opacity duration-[350ms]`;

  return (
    <div
      className={isModalOpen ? `${modalOverlay} ${showModal}` : modalOverlay}
    >
      <div
        ref={modalRef}
        className="bg-imageBackground w-full max-w-[950px] h-[75vh] rounded flex relative"
      >
        <div className="basis-6/10">
          <img
            src={displayedProduct?.image}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="basis-4/10 min-h-0 overflow-y-auto pl-6 bg-mainBody pr-6">
          <button
            className="absolute top-6 right-6 text-4xl bg-mainBody border-transparent cursor-pointer rounded-full text-brownAccent"
            onClick={closeModal}
          >
            <SlClose />
          </button>
          {/* product name */}
          <h1 className="font-marcellus text-2xl mt-16 mb-4">
            {displayedProduct?.name}
          </h1>

          {/* description */}
          <p className="font-inter leading-6 text-gray-600 text-sm border-b-2 border-lightBrown pb-4">
            {displayedProduct?.description}
          </p>

          {/* dimensions */}
          <h3 className="font-marcellus text-xl my-4">Dimensions</h3>

          <ul className="grid grid-cols-2 text-sm gap-1 border-b-2 border-lightBrown pb-4 font-inter text-gray-600">
            {dimension.map((d) => {
              return (
                displayedProduct?.dimensions?.[d.tag] && (
                  <li key={d.property}>
                    {d.property} - {displayedProduct.dimensions[d.tag]}
                  </li>
                )
              );
            })}
          </ul>

          {/* materials  */}
          <h3 className="font-marcellus text-xl my-4">Materials Used</h3>
          <div
            className={`flex gap-8 pb-4 text-sm font-inter text-gray-600 ${
              displayedProduct?.colors?.length > 0 &&
              "border-b-2 border-lightBrown"
            }`}
          >
            {displayedProduct?.materials?.map((material) => {
              return <p key={material}> {material} </p>;
            })}
          </div>

          {/* color */}
          {displayedProduct?.colors?.length > 0 && (
            <h3 className="font-marcellus text-xl my-4">Color Variations</h3>
          )}
          <div className="mt-2 mb-10">
            {displayedProduct?.colors?.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`rounded-full w-6 h-6 mr-2 border-3 border-lightBrown`}
                  style={{ backgroundColor: color }}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
