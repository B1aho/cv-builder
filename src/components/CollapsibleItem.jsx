import { useState } from "react";

export function CollapsibleItem({title, children, isMultiple = false, onAddFormClick = null}) {
  const [isCollapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    const newValue = isCollapse ? false : true;
    setCollapse(newValue);
  }
  return (
    <div>
      <header onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        <h1>{title}</h1>
        <button>▶️</button>
      </header>
      {isCollapse ? <div>{children}</div> : null}
      {isMultiple && <button onClick={onAddFormClick}>+ Add new item</button>}
    </div>
  );
}