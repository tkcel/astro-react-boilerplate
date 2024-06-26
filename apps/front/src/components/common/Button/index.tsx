import { useState } from 'react';

import styles from './styles.module.scss';

export const Button = () => {
  const [cityResult, setCityResult] = useState<string>('未押下');

  const fetchData = () => {
    setCityResult('押下済');
  };

  return (
    <button className={styles.button} onClick={fetchData}>
      {cityResult}
    </button>
  );
};
