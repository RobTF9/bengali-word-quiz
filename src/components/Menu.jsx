import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { MenuHeader, MenuDrawer } from '../styles/Menu.styles';
import WordContext from '../data/wordContext';

const Menu = () => {
  const { config, setConfig } = React.useContext(WordContext);
  const [active, setActive] = React.useState(false);

  const [localConfig, setLocalConfig] = React.useState({ ...config });

  const submitHandler = (event) => {
    event.preventDefault();
    setConfig({ ...localConfig });
  };

  return (
    <>
      <MenuHeader>
        <p>
          <strong>Bengali word quiz</strong>
        </p>
        <button onClick={() => setActive(true)}>
          <FiSettings />
          Pick which words to practice
        </button>
      </MenuHeader>
      <AnimatePresence>
        {active && (
          <MenuDrawer
            {...{
              initial: {
                x: '100%',
                opacity: 0,
              },
              animate: {
                x: 0,
                opacity: 1,
              },
              exit: {
                x: '100%',
                opacity: 0,
              },
              transition: {
                stiffness: 300,
              },
            }}
          >
            <form onSubmit={submitHandler}>
              <h3>Pick which words to practice</h3>
              {Object.entries(localConfig).map((option) => (
                <label>
                  <input
                    type="checkbox"
                    name={option[0]}
                    id={option[0]}
                    checked={option[1]}
                    onChange={(event) =>
                      setLocalConfig({
                        ...localConfig,
                        [event.target.name]: event.target.checked,
                      })
                    }
                  />
                  {option[0]}
                </label>
              ))}
              <button type="submit">Reload quiz</button>
            </form>
            <button type="button" onClick={() => setActive(false)} />
          </MenuDrawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
