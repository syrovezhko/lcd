import React from 'react';
import styles from './LCD.module.scss';

const LCD = () => {
  return (
    <div className={styles.board}>
      <div className={styles.mounting_line}>
        <div className={styles.mounting}>
          <div className={styles.mounting_hole}></div>
        </div>
        <div className={styles.mounting}>
          <div className={styles.mounting_hole}></div>
        </div>
      </div>
      <div className={styles.screen}>
        <div className={styles.screen__groove}></div>
        <div className={styles.screen__field}>
          <ul className={styles.screen__line}>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
          </ul>
          <ul className={styles.screen__line}>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
            <li className={styles.screen__character}>
              <span className={styles.screen__pixel}></span>
            </li>
          </ul>
        </div>
        <div className={styles.screen__groove}></div>
      </div>

      <div className={styles.mounting_line}>
        <div className={styles.mounting}>
          <div className={styles.mounting_hole}></div>
        </div>
        <div className={styles.mounting}>
          <div className={styles.mounting_hole}></div>
        </div>
      </div>
    </div>
  );
};

export default LCD;
