import React from 'react';
import Description from '@/popup/components/description';
import Details from '@/popup/components/details';
import Flex from '@/popup/components/flex';
import SearchBox from '@/popup/components/searchbox';
import Toolbar from '@/popup/components/toolbar';
import useRecipes from '@/popup/store/useRecipes';
import styles from './home.module.css';
import { DIFFICULITY } from '@/utils/constants/difficulty';

export default function Home() {
  const { activeRecipe } = useRecipes();
  console.log(activeRecipe);

  return (
    <div className={styles.container}>
      <Flex dir="column" gap={24}>
        <SearchBox />
        <Toolbar recipe={activeRecipe} />
        <Description 
          difficulty={activeRecipe.difficulty} 
          description={activeRecipe.description} 
        />
        <Details recipe={activeRecipe}/>
      </Flex>
    </div>
  );
}