import React from "react";

function ButtonGroup({ setSelectedCategory }) {
  const categories = [
    { label: "General", value: "general" },
    { label: "Science", value: "science" },
    { label: "Technology", value: "technology" },
    { label: "Health", value: "health" },
    { label: "Sports", value: "sports" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Politics", value: "politics" },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.value);
  };

  return (
    <div className="flex flex-wrap justify-center mb-4">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => handleCategoryChange(category)}
          className="px-4 py-2 mx-2 font-semibold border rounded-xl dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-800"
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
