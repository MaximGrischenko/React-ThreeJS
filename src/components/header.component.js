import React from 'react';

const styles = {
  header: {
    padding: 10,
  },
  list: {
    listStyle: "none",
  },
  button: {
    minWidth: 200,
  }
};

const primitives = [
  {
    id: "1",
    title: "Cube",
  },
  {
    id: "2",
    title: "Sphere",
  },
  {
    id: "3",
    title: "Cone",
  },
];

const Header = ({onAddPrimitive}) => {
  return (
    <header style={styles.header}>
      <input style={styles.button} type="button" value="Menu" />
      <ul style={styles.list}>
        {
          primitives.map(primitive => (
            <li key={primitive.id}>
              <input style={styles.button} type="button" value={primitive.title}
                     onClick={()=> onAddPrimitive(primitive.id)}/>
            </li>
          ))
        }
      </ul>
    </header>
  )
};

export default Header;