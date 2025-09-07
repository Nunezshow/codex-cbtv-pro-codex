import React from 'react';

export default function Browse() {
  const items = [
    { id: 1, title: 'Example Movie', year: 2023 },
    { id: 2, title: 'Example Show', year: 2022 },
  ];

  return (
    <section>
      <h2>Browse</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
