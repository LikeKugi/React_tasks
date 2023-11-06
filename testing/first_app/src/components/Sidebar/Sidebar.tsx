import { FC, JSX } from 'react';

interface IItem {
  name: string,
  href: string,
}

interface ISidebarProps {
  items: IItem[];
}

const Sidebar: FC<ISidebarProps> = ({items}): JSX.Element => {
  return (
    <nav role="navigation">
      {items.map(item => <div key={item.href}><a href={item.href} role="link">{item.name}</a></div>)}
    </nav>
  );
};
export default Sidebar;
