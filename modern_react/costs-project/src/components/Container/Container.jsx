import './Container.css'
const Container = (props) => {
  const containerClasses = props.parent ? `${props.parent}__container container` : 'container';
  console.log(props);
  return (
      <div className={containerClasses}>
          {props.children}
      </div>
  );
}
export default Container;