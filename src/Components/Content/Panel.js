import React from "react";
import { PANEL_DATA } from "../../data/panelData";
import Card from "./Card";
const Panel = () => {
  return (
    <div class="md:container md:mx-auto mt-8">
      <div class="flex justify-center flex-row space-x-4">
        <div class="basis-1/4">
          <Card {...PANEL_DATA[0]} />
        </div>
        <div class="basis-1/4">
          <Card {...PANEL_DATA[1]} />
        </div>
        <div class="basis-1/4">
          <Card {...PANEL_DATA[2]} />
        </div>
        <div class="basis-1/4">
          <Card {...PANEL_DATA[3]} />
        </div>
      </div>
    </div>
  );
};

export default Panel;
