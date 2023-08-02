import React from 'react';

import styles from './details.module.css';
import Flex from '../flex';
import TextItem from '../textitem';
import { DetailsPropsType } from '@/utils/types/details';

export default function Details({recipe}: DetailsPropsType) {
  return (
    <div className={styles.container}>
      <Flex gap={10}>
        <TextItem label="Protein" content={recipe.protein}/>
        <TextItem label="Produce" content={recipe.produce} labelType="hot"/>
        <TextItem label="Spices" content={recipe.spice} labelType="gradient"/>
        <TextItem label="Cooking Oil" content={recipe.cookingOil} labelType="gradient"/>
        <TextItem label="Volume/Weight" content={`${recipe.volume}g`}/>
        <TextItem label="Serves" content={recipe.serves.toString()}/>
        <TextItem label="Authenticity" content={recipe.authenticity} labelType="gradient"/>
        <TextItem label="Stock" content={recipe.stock} labelType="gradient"/>
      </Flex>
    </div>
  );
}