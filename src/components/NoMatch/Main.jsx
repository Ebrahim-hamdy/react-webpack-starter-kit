import React from 'react';
import { Icon } from 'semantic-ui-react';

const NoMatch = () => {
  return (
    <div>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </div>
  );
};

export default NoMatch;
