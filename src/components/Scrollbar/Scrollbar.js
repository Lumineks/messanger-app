import { Scrollbars } from 'react-custom-scrollbars-2';

const Scrollbar = (props) => {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#D1D5DB'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Scrollbars renderThumbHorizontal={renderThumb} renderThumbVertical={renderThumb} {...props}>{props.children}</Scrollbars>
  );
};

export default Scrollbar;


