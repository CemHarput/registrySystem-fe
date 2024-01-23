import React from "react";
import { PANEL_DATA } from "../../data/panelData";
import Card from "./Card";
const Panel = () => {
  return (
    <div class="md:container md:mx-auto mt-8">
      <div class="flex justify-center flex-row space-x-4">
        <div class="basis-1/4">
          <Card
            title={PANEL_DATA[0].title}
            description={PANEL_DATA[0].description}
            image={PANEL_DATA[0].image}
          />
        </div>
        <div class="basis-1/4">
          <Card
            title={PANEL_DATA[1].title}
            description={PANEL_DATA[1].description}
            image={PANEL_DATA[1].image}
          />
        </div>
        <div class="basis-1/4">
          <Card
            title={PANEL_DATA[1].title}
            description={PANEL_DATA[1].description}
            image={PANEL_DATA[1].image}
          />
        </div>
        <div class="basis-1/4">
          <Card
            title={PANEL_DATA[1].title}
            description={PANEL_DATA[1].description}
            image={PANEL_DATA[1].image}
          />
        </div>
      </div>
    </div>
  );
};

export default Panel;
