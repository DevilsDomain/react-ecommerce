import React from 'react';

type CategoryParams = {
  params: { category: string };
}

function page({ params: { category }}: CategoryParams) {

  return (
    <div>
      <h1>Category: {category}</h1>
    </div>
  );
}

export default page;
