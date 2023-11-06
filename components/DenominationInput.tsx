import { ChangeEvent } from "react";

interface DenominationInputProps {
  denomination: number;
  onInputChange: (denomination: number, count: number) => void;
}

const DenominationInput: React.FC<DenominationInputProps> = ({
  denomination,
  onInputChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    onInputChange(denomination, value);
  };

  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          <span className="text-gray-500 sm:text-sm">
            ₹<span className="font-bold">{denomination}</span> x
          </span>
        </div>
        <input
          type="number"
          name="price"
          id={`d-${denomination}`}
          className="block w-full rounded-md border-0 py-1.5 pl-20 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0"
          onChange={handleInputChange}
        />
        {/* <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default DenominationInput;
