import React, {JSX} from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>): JSX.Element {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
};
