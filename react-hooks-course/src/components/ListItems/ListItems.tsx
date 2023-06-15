import {FC, JSX, useEffect, useState} from "react";

interface IListItemsProps {
  getItems: () => string[],
}


const ListItems: FC<IListItemsProps> = ({getItems}): JSX.Element => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems()
    setItems(JSON.parse(JSON.stringify(newItems)));
  }, [getItems])

  return (
    <ul>
      { items.map((el, i) => <li key={i}>{el}</li>) }
    </ul>
  );
}
export default ListItems;
