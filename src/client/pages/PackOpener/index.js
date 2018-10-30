import React from 'react';
import { number, func } from 'prop-types';

import { Container, PackOpenerInner, PacksStartingPoint } from './styles';
import { HOME } from '../../constants/router';
import Pack from '../../components/Pack';

const propTypes = {
  top: number.isRequired,
  modifyLocation: func.isRequired,
};

const PackOpener = ({ top, modifyLocation }) => (
  <Container top={top} onClick={() => modifyLocation(HOME)}>
    <PackOpenerInner onClick={e => e.stopPropagation()}>
      <PacksStartingPoint>
        <Pack />
      </PacksStartingPoint>
    </PackOpenerInner>
  </Container>
);

PackOpener.propTypes = propTypes;

export default PackOpener;
