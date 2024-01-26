// Inside the TabMenu component
import React, { useState } from "react";
import TabButton from "../Product/TabButton";
import Card from "../Content/Card";
import starPicture from "../../assets/star.png";
import Section from "./Section";
import Tabs from "./Tabs";

const TabMenu = () => {
  const [selectedProduct, setSelectedProduct] = useState("Product1");

  function handleSelect(selectedButton) {
    setSelectedProduct(selectedButton);
  }
  return (
    <div className="md:container md:mx-auto mt-8">
      <Section title={"Most sold products"}></Section>

      <Tabs>
        <TabButton
          onSelect={() => handleSelect("Product1")}
          isSelected={selectedProduct === "Product1"}
        >
          Product1
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("Product2")}
          isSelected={selectedProduct === "Product2"}
        >
          Product2
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("Product3")}
          isSelected={selectedProduct === "Product3"}
        >
          Product3
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("Product4")}
          isSelected={selectedProduct === "Product4"}
        >
          Product4
        </TabButton>
      </Tabs>
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
