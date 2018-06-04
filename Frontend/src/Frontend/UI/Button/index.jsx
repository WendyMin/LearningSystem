import React from 'react';
import { Button } from 'react-bootstrap';
import style from 'style';

type Props = {
  className?: string,
  text: string,
  onClick: () => any
};

class MyButton extends React.PureComponent<Props> {
  constructor( props ){
    super( props );
  }

  render(){
      const { className , text , onClick } = this.props;
      return (
        <button type="button"
                className="btn btn-primary btn-trans waves-effect waves-primary w-md m-b-5"
                onClick={onClick}
        >
        {text}
        </button>
      );
  }
};

export default MyButton;
