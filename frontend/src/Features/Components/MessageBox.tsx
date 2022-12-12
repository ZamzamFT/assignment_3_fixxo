import React from 'react';
import Alert from 'react-bootstrap/Alert';

interface Props {
  prop?: any;
}
const MessageBox: React.FC<Props> = ({ prop }) => {
  return <Alert variant={prop.variant || 'info'}>{prop.children}</Alert>;
};

export default MessageBox;
