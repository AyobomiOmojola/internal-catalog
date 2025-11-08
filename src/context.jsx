import { createContext, useState, useContext } from "react";
import { productCatalogue } from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedProduct, setdisplayedProduct] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleProductDetail = (id) => {
    const productDetail = productCatalogue.find((product) => product.id === id);
    setdisplayedProduct(productDetail);
    openModal();
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        displayedProduct,
        handleProductDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
