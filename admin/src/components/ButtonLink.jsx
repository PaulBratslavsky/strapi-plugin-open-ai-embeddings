import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@strapi/design-system';

export default function ButtonLink({ to, text, icon }) {
  const history = useHistory();
  return <Button startIcon={icon} onClick={() => history.push(to)} >{text}</Button>
}