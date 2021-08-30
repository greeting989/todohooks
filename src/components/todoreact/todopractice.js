import React, { useState } from "react";
import "./todopract.css";
const Todopractice = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isEditItem, setEditItem] = useState("");
  const [togglebutton, setToggleButton] = useState(false);

  const addItem = () => {
    if (!inputData) {
      alert("Add items");
    } else if (inputData && togglebutton) {
      setItems(
        items.map((curElement) => {
          if (curElement.id === isEditItem) {
            return { ...items, name: inputData };
          }
          return curElement;
        })
      );
      setInputData("");
      setEditItem(null);
      setToggleButton(false);
    } else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
        completed: false,
      };
      setItems([...items, myNewData]);
      setInputData("");
    }
  };
  const deleteItem = (index) => {
    const updatedList = items.filter((curElement) => {
      return curElement.id !== index;
    });
    setItems(updatedList);
  };
  const deleteAll = () => {
    setItems([]);
  };
  const editItem = (index) => {
    const todo_edited = items.find((curElement) => {
      return curElement.id === index;
    });
    setInputData(todo_edited.name);
    setEditItem(index);
    setToggleButton(true);
  };
  const completedTask = (index) => {
    const todo_comp = items.findIndex((elem) => elem.id == index);
    console.log(todo_comp);
    const list = [...items];
    console.log(list[todo_comp]);
    list[todo_comp] = {
      ...list[todo_comp],
      completed: true,
    };
    setItems(list);
  };
  // console.log(items);
  return (
    <>
      <h2 className="titlehead">TodoList : React</h2>
      <div className="todobody">
        <div className="todoform">
          <input
            type="text"
            placeholder="Add item"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {togglebutton ? (
            <button type="button" onClick={addItem} className="editbtn">
              Edit
            </button>
          ) : (
            <button type="button" onClick={addItem} className="addbtn">
              Add
            </button>
          )}
          <button onClick={deleteAll} className="addbtn">
            removeAll
          </button>
        </div>
        <div className="listtodo">
          {items.map((curElement) => {
            console.log(curElement);
            return (
              <div
                className={curElement.completed ? "crosstext" : "displaydiv"}
              >
                <p>{curElement.name}</p>
                <span className="action buttons">
                  <button onClick={() => deleteItem(curElement.id)}>
                    delete
                  </button>
                  <button onClick={() => editItem(curElement.id)}>Edit</button>
                  <button onClick={() => completedTask(curElement.id)}>
                    Completed
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todopractice;
