type TPositionStyles={
  top:any;
  left?:any;
  right?:any;
  width:any;
  height:any;
  zIndex:number;
}
const ShinyEffect = ({ left, right, top, size = 500 }: any) => {
  const positionStyles:TPositionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }

  if (right !== undefined) {
    positionStyles.right = `${right}px`;
  }

  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
