import './Container.css'
const Container = (props) => {
  const containerClasses = props.parent ? `${props.parent}__container container` : 'container';
  return (
      <div className={containerClasses}>
          {props.children}
      </div>
  );
}
export default Container;