import baseApi, { API } from '@/services/baseApi';
import { RecipeType } from '@/utils/types/recipe';
import { AxiosResponse } from 'axios';
import { create } from 'zustand';

interface RecipeSate {
  loading: boolean;
  recipes: RecipeType[];
  filteredRecipes: RecipeType[];
  activeRecipe: RecipeType;
  filter: (keyword: string) => void;
  setActiveRecipe: (idx: number) => Promise<AxiosResponse>;
  addRecipe: (recipe: RecipeType) => Promise<AxiosResponse>;
  loadAsync: () => Promise<{status: number}>;
}

const useRecipes = create<RecipeSate>((set) => {
  return {
    loading: false,
    recipes: [],
    filteredRecipes: [],
    activeRecipe: {
      name: 'unknown',
      origin: 'unknown',
      description: 'unknown',
      difficulty: 1,
      protein: 'unknown',
      produce: 'unknown',
      spice: 'unknown',
      cookingOil: 'unknown',
      volume: 1,
      serves: 1,
      authenticity: 'unknown',
      stock: 'unknown'
    },
    filter: (keyword: string) => {
      set((state) => ({
        filteredRecipes: state.recipes.map((recipe, idx) => {
          return {...recipe, idx: idx};
        }).filter(
          (recipe: RecipeType) => recipe.name.toUpperCase().includes(keyword.toUpperCase())
        )
      }));
    },
    setActiveRecipe: async (idx: number) => {
      try {
        set({loading: true});
        const response = await baseApi.get(`${API.GET_RECIPES}/${idx}`);
        if(response.status === 200) {
          set({
            activeRecipe: response.data.message
          });
        }
        set({loading: false});
        return response;
      } catch (e) {
        set({loading: false});
        return e;
      }
    },
    addRecipe: async (recipe: RecipeType) => {
      set({loading: true});
      try {
        const response = await baseApi.post(API.ADD_RECIPE, recipe);
        if(response.status === 201) {
          set((state) => ({
            recipes: [
              ...state.recipes,
              recipe
            ],
          }));
        }
        set({loading: false});
        return response;
      } catch(e) {
        set({loading: false});
        return e;   
      }
    },
    loadAsync: async () => {
      const response = await baseApi.get(API.GET_RECIPES);
      set({
        recipes: response.data.message,
        filteredRecipes: response.data.message.map((recipe, idx) => {
          return {...recipe, idx};
        }),
        activeRecipe: response.data.message[2]
      });
      return {status: response.status};
    }
  };
});

export default useRecipes;