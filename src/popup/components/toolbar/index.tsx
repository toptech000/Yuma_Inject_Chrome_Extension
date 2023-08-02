import React from 'react';
import Flex from '../flex';
import ToolButton from '../toolbutton';
import CountryFlag from '../countryflag';
import { useNavigate } from 'react-router-dom';

import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faM } from '@fortawesome/free-solid-svg-icons';

import styles from './toolbar.module.css';
import { ROUTES } from '@/utils/constants/routes';
import { ToolbarPropsType } from '@/utils/types/toolbar';
import { classNames } from '@/utils/helpers/css';

export default function Toolbar({ recipe }: ToolbarPropsType) {
  const navigate = useNavigate();
  const handleAddRecipe = () => {
    navigate(ROUTES.create);
  };

  return (
    <div className={styles.wrapper}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <div className={styles.country}>
          <CountryFlag countryCode={recipe.origin}/>
          <span className={classNames('country-label', styles.label)}>{recipe.name}</span>
        </div>
        
        <div className={styles.tool}>
          <Flex gap={5} alignItems="center">
            <ToolButton icon={faTwitter} />
            <ToolButton icon={faTelegram} />
            <ToolButton icon={faM} />
            <ToolButton label="+Add recipe" handler={handleAddRecipe} />
          </Flex>
        </div>
      </Flex>
    </div>
  );
}