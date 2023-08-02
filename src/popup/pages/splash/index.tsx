import { ROUTES } from '@/utils/constants/routes';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './splash.module.css';
import useRecipes from '@/popup/store/useRecipes';
import { statusCode } from '@/utils/constants/statusCode';

export default function Splash() {
  const navigate = useNavigate();
  const store = useRecipes();

  useEffect(() => {
    (async () => {
      const { status } = await store.loadAsync();
      if(status === statusCode.SUCCESS)
        navigate('/home');
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Yumazzo</h3>
      <p className={styles.error}></p>
    </div>
  );
}