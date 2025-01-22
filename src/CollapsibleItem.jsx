import { useState } from "react";

export function CollapsibleItem({title, content}) {
  const [isCollapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    const newValue = isCollapse ? false : true;
    setCollapse(newValue);
  }
  return (
    <div>
      <header onClick={toggleCollapse}>
        <h1>{title}</h1>
        <button>▶️</button>
      </header>
      {isCollapse ? <div>{content}</div> : null}
    </div>
  );
}