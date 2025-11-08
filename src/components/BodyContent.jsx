import ProductsContainer from "./ProductsContainer";
import Selections from "./Selections";
import { useState, useEffect } from "react";
import { productCatalogue } from "../data";

const BodyContent = () => {
  const [displayedProducts, setDisplayedProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSelection, setActive] = useState("sofas");

  const handleDisplayedProducts = (selection) => {
    const filteredProducts = productCatalogue.filter(
      (product) => product.type === selection
    );
    setDisplayedProducts(filteredProducts);
    setActive(selection);
  };

  useEffect(() => {
    const sofas = productCatalogue.filter(
      (product) => product.type === "sofas"
    );
    setDisplayedProducts(sofas);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="w-24 h-24 border-[5px] border-grey-100 rounded-full border-t-brownAccent animate-spin mx-auto mt-16"></div>
    );
  }

  return (
    <div>
      <div className="bg-mainBody min-h-screen ">
        <h1 className="pt-14 text-center uppercase font-marcellus text-4xl leading-[60px] tracking-widest text-brownAccent">
          <span className="inline-block mr-2 first-letter:text-5xl ">
            Furniture
          </span>
          <span className="inline-block mr-2 first-letter:text-5xl ">
            Catalogue
          </span>
          <span className="inline-block first-letter:text-5xl ">Draft</span>
        </h1>
        <p className="text-base text-center font-inter text-brownAccent">
          A curated list of our furniture design models for internal use only
        </p>

        <div className="flex px-12 justify-between py-12">
          <Selections
            handleDisplayedProducts={handleDisplayedProducts}
            activeSelection={activeSelection}
          />
          <ProductsContainer displayedProducts={displayedProducts} />
        </div>
      </div>
    </div>
  );
};
export default BodyContent;
