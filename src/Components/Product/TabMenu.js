// Inside the TabMenu component
import React, { useState } from "react";
import TabButton from "../Product/TabButton";
import Card from "../Content/Card";
import starPicture from "../../assets/star.png";

const TabMenu = () => {
  const [selectedProduct, setSelectedProduct] = useState("Product1");

  function handleSelect(selectedButton) {
    setSelectedProduct(selectedButton);
  }

  const productTitles = ["Product1", "Product2", "Product3", "Product4"];

  return (
    <div className="md:container md:mx-auto mt-8">
      <div className="text-lg text-center font-semibold mb-3">
        <h3>Most sold products</h3>
      </div>
      <div className="flex justify-center flex-row space-x-4">
        {productTitles.map((title, index) => (
          <TabButton key={index} onSelect={() => handleSelect(title)}>
            {title}
          </TabButton>
        ))}
      </div>
      <div class="flex justify-center flex-row mt-5">
        <Card
          title={selectedProduct}
          description={"Description will be added later"}
          image={starPicture}
        />
      </div>
    </div>
  );
};

export default TabMenu;
