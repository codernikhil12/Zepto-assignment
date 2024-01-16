
import  { useState } from 'react';

const ChipComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [availableItems, setAvailableItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setAvailableItems(availableItems.filter((i) => i !== item));
    setInputValue('');
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter((c) => c !== chip));
    setAvailableItems([...availableItems, chip]);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <div key={chip} className="bg-blue-500 text-white p-2 rounded-full">
            {chip}
            <span className="ml-2 cursor-pointer" onClick={() => handleChipRemove(chip)}>
              X
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2 mt-2"
        placeholder="Type here..."
      />
      <div className="mt-2">
        {availableItems
          .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
          .map((item) => (
            <div
              key={item}
              className="cursor-pointer bg-gray-200 p-2 rounded-md"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChipComponent;
