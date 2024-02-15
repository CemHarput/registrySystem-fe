// Inside the TabMenu component
import React, { useState } from "react";
import TabButton from "../Product/TabButton";
import Card from "../Content/Card";
import starPicture from "../../assets/star.png";
import Section from "./Section";
import Tabs from "./Tabs";
import StudentTable from "../Content/StudentTable";
import InstructorTable from "../Content/InstructorTable";

const TabMenu = () => {
  const [selectedProduct, setSelectedProduct] = useState("Instructor Table");

  function handleSelect(selectedButton) {
    setSelectedProduct(selectedButton);
  }
  return (
    <div className="md:container md:mx-auto mt-8">
      <Section title={"Most sold products"}></Section>

      <Tabs>
        <TabButton
          onSelect={() => handleSelect("Student Table")}
          isSelected={selectedProduct === "Student Table"}
        >
          Student Table
        </TabButton>
        <TabButton
          onSelect={() => handleSelect("Instructor Table")}
          isSelected={selectedProduct === "Instructor Table"}
        >
          Instructor Table
        </TabButton>
      </Tabs>
      <div class="flex justify-center flex-row mt-5">
        <Card
          title={selectedProduct}
          description={"You can show the all records in the table"}
          image={starPicture}
        />
      </div>

      {selectedProduct === "Student Table" ? (
        <StudentTable />
      ) : (
        <InstructorTable />
      )}
    </div>
  );
};

export default TabMenu;
