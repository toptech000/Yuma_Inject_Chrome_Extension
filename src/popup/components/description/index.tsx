import React from 'react';

import styles from './description.module.css';
import { DescriptionPropsType } from '@/utils/types/description';
import Flex from '../flex';
import { DIFFICULITY } from '@/utils/constants/difficulty';

export default function Description({difficulty, description}: DescriptionPropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Flex gap={10} alignItems="center">
          <img alt="difficulty" src={`${difficulty}.png`}/>
          <span className={styles.title}>Difficulty: {DIFFICULITY[difficulty]}</span>
        </Flex>
        <div className={styles.content}>
          {description}
        </div>
      </div>
    </div>
  );
}