import Button from '@/popup/components/button';
import Flex from '@/popup/components/flex';
import SelectBox from '@/popup/components/selectbox';
import TextArea from '@/popup/components/textarea';
import TextField from '@/popup/components/textfield';
import ToolButton from '@/popup/components/toolbutton';
import { ROUTES } from '@/utils/constants/routes';
import { authenticities, difficulties, origins } from '@/utils/mock';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useRecipes from '@/popup/store/useRecipes';
import styles from './create.module.css';
import Loading from '@/popup/components/loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Recipe() {
  const store = useRecipes();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTES.home);
  };

  const methods = useForm();
  const onSubmit = methods.handleSubmit(async (data) => {
    const response = await store.addRecipe(data);
    console.log(response);
    if(response.status === 201) {
      toast.success('🦄 Recipe Creation Success', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'dark',
      });
    } else {
      toast.error('🦄 Recipe Creation Failed', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  });

  return (
    <div className={styles.container}>
      {store.loading && <Loading/>}
      <div className={styles.header}>
        <ToolButton transparent icon={faChevronLeft} handler={handleBack} />
        <span className={styles.title}>Add new recipe</span>
      </div>
      <div className={styles.content}>
        <FormProvider {...methods}>
          <form noValidate onSubmit={e => e.preventDefault()}>
            <Flex gap={24} dir="column">
              <Flex gap={10} justifyContent="space-between">
                <TextField name="name" label="name"/>
                <SelectBox name="origin" label="origin" items={origins}/>
              </Flex>
              <TextArea 
                name="description" 
                label="description" 
                maxLength={200}
                placeholder="Describe your recipe..."
              />
              <Flex gap={10} justifyContent="space-between">
                <SelectBox name="difficulty" label="difficulty" items={difficulties} type="number"/>
                <TextField name="protein" label="protein"/>
              </Flex>
              <Flex gap={10} justifyContent="space-between">
                <TextField name="produce" label="produce"/>
                <TextField name="spice" label="spice"/>
              </Flex>
              <Flex gap={10} justifyContent="space-between">
                <TextField name="cookingOil" label="Cooking Oil?"/>
                <TextField name="volume" label="volume" unit="gram" type="number"/>
              </Flex>
              <Flex gap={10} justifyContent="space-between">
                <TextField name="serves" label="serves" unit="people" type="number"/>
                <SelectBox name="authenticity" label="authenticity" items={authenticities}/>
              </Flex>
              <TextField name="stock" label="stock" size="full"/>
              
              <Button label="Add Recipe" type='submit' handler={onSubmit}/>
            </Flex>
          </form>
        </FormProvider>
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