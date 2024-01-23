import React from "react";

const Card = (props) => {
  return (
    <li class="flex flex-col bg-purple-200 p-4 mb-4 items-center rounded-lg">
      <div class="flow-root">
        <img
          class="w-20 h-20 object-cover rounded-full mr-4"
          src={props.image}
          alt="..."
        />
      </div>

      <div className="text-center">
        <h3 class="text-lg font-semibold">{props.title}</h3>
        <p class="text-gray-600">{props.description}</p>
      </div>
    </li>
  );
};

export default Card;
