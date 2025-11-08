import { selections } from "../data";

const Selections = ({ activeSelection, handleDisplayedProducts }) => {
  const baseClass = "first-letter:text-5xl pr-10 cursor-pointer";
  return (
    <div className="basis-1/4 flex flex-col items-end text-3xl font-marcellus leading-[72px] py-16 sticky top-[90px] self-start">
      {selections.map((selection) => {
        return (
          <button
            className={
              activeSelection === selection
                ? `${baseClass} text-brownAccent shadow-[0_-2px_0_var(--color-brownAccent),0_2px_0_var(--color-brownAccent)] `
                : `${baseClass} text-gray-500`
            }
            onClick={() => handleDisplayedProducts(selection)}
            key={selection}
          >
            {selection}
          </button>
        );
      })}
    </div>
  );
};
export default Selections;
