import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { NoteStickyPropsType } from '@/utils/types/notesticky';

const colors = {
  'Easy': '#6CF600',
  'Medium': '#F63B00',
  'Hard': '#FF003D'
};

export default function NoteSticky({status}: NoteStickyPropsType) {
  return (
    <FontAwesomeIcon 
      style={{color: colors[status], width: '12px', height: '12px'}} 
      icon={faNoteSticky} 
    />
  );
}