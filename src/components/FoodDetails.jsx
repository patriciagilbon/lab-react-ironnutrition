import React from 'react';
import { useParams } from 'react-router-dom';

export default function FoodDetails() {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
