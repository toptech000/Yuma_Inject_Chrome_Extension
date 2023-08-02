import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

import styles from './searchbox.module.css';
import CountryFlag from '../countryflag';
import NoteSticky from '../notesticky';
import useRecipes from '@/popup/store/useRecipes';
import { RecipeType } from '@/utils/types/recipe';
import { DIFFICULITY } from '@/utils/constants/difficulty';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../loading';

export default function SearchBox() {
  const store = useRecipes();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    store.filter(keyword);
  };

  const handleSelectRecipe = async (recipe: RecipeType) => {
    console.log(recipe);
    const idx = recipe.idx;
    const response = await store.setActiveRecipe(idx);
    console.log(response);
    if(response.status !== 200) {
      toast.error('🦄 Fetch Recipe Failed', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      {store.loading && <Loading />}
      <div className={styles.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input onChange={handleChange} className={styles.searchInput} type="text" placeholder="Search cruisine"/>
      </div>
      <div className={styles.menu}>
        {store.filteredRecipes.length === 0 && <div className={styles.noResult}>NO RESULT</div>}
        {store.filteredRecipes.map((recipe: RecipeType, idx: number) => {
          return (
            <div key={idx} className={styles.menuItem} onMouseDown={() => handleSelectRecipe(recipe)}>
              <div className={styles.country}>
                <CountryFlag countryCode={recipe.origin} />
                <span className="country-label">{recipe.name}</span>
              </div>
              <div className={styles.detail}>
                <NoteSticky status={DIFFICULITY[recipe.difficulty]}/>
                <span className={styles.status}>{DIFFICULITY[recipe.difficulty]}</span>
                <span className={styles.spliter}></span>
                <span className={styles.delay}>{recipe.serves}min</span>
              </div>
            </div>
          );
        }
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </div>
  );
}