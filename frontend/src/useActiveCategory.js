import { useState } from 'react';

function useActiveCategory(initialCategory = 'Ban') {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const isCategoryActive = (category) => activeCategory === category;

  const setCategory = (category) => {
    setActiveCategory(category);
  };

  return {
    activeCategory,
    isCategoryActive,
    setCategory,
  };
}

export default useActiveCategory;
