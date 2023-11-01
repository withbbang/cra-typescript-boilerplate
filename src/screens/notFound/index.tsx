import React from 'react';
import { useNavigate } from 'react-router-dom';
import SVG from 'modules/SVG';
import styles from './NotFound.module.scss';

function NotFound(): React.JSX.Element {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.backBtn}>
        <span onClick={handleBack}>
          <SVG type="back" width="30px" height="30px" />
        </span>
      </div>
      <div className={styles.innerWrap}>
        <h1>Sorry This Page Is Not Found</h1>
        <span>
          <SVG type="notFound" width="500px" height="500px" />
        </span>
      </div>
    </div>
  );
}

export default NotFound;
