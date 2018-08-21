import React from 'react';

import styles from 'styles/modules/header.module.scss';

const Header = props => {
  const { headerText } = props;
  return (
    <header className={styles.header}>
      {`welcome ${headerText}`}
    </header>
  );
};

Header.propTypes = {};

export default Header;
