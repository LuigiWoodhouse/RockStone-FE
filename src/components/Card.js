import {
  ChatAlt2Icon,
} from "@heroicons/react/outline";
import { Draggable } from "react-beautiful-dnd";


function CardItem({ data, index }) {
  return (
    data && <div key={index}>
    <Draggable index={index} draggableId={index.toString()} >
      {(provided) => (
        <div
          className="bg-gray-100 rounded-sm shadow-sm p-2 m-2"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <label
            className={`capitalize py-1 px-2 text-xs text-white  rounded-full ${
              data.status === "Open"
                ? "bg-green-600"
                : data.status === "Closed"
                ? "bg-yellow-400"
                : "bg-red-600"
            }`}
          >
            {data.status === "Open"
              ? "Low priority"
              : data.status === "Closed"
              ? "Medium Priority"
              : "High Priority"}
          </label>
          <h2 className="text-gray-800 pt-2 text-sm pb-2 mb-2 font-semibold">
            {data.message}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex space-x-3 text-gray-600 items-center justify-between">
              {data.resolution > 0 && (
                <span className="flex items-center justify-between space-x-1 text-sm cursor-pointer">
                  <span>{data.resolution}</span>
                  <span>{data.agentAssigned}</span>
                </span>
              )}

            </div>
          </div>
        </div>
      )}
    </Draggable></div>
  );
}

export default CardItem;
