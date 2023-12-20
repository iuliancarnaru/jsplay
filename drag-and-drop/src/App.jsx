import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const TEAM_DATA = [
  { id: 1, name: "BARCELONA" },
  { id: 2, name: "PARIS" },
  { id: 3, name: "MANCHESTER" },
  { id: 4, name: "LONDON" },
  { id: 5, name: "MADRID" },
];

function App() {
  const [items, setItems] = useState(TEAM_DATA);

  const dataMap = items.map((el, i) => {
    return (
      <Draggable key={el.id} draggableId={el.id.toString()} index={i}>
        {(provided) => {
          return (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <div
                style={{
                  width: "100%",
                  padding: 50,
                  margin: 20,
                  border: "1px solid grey",
                }}
              >
                {el.name}
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  });

  const handleOnDragEnd = (res) => {
    const itemsCopy = [...items];
    const [reorderedItems] = itemsCopy.splice(res.source.index, 1);
    itemsCopy.splice(res.destination.index, 0, reorderedItems);
    setItems(itemsCopy);
  };

  return (
    <div className="App">
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="items">
            {(provided) => {
              return (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {dataMap}
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
