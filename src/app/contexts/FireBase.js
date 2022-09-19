import React, { useMemo, createContext } from 'react';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const FirebaseContext = createContext({ app: null });
FirebaseContext.displayName = 'FirebaseContext';

const FireBase = (props) => {
  const { config, children } = props;

  const app = initializeApp(config);
  const db = getFirestore(app);

  const values = useMemo(() => ({ app, db }), [app, db]);

  const renderFireBase = () => (
    <FirebaseContext.Provider value={values}>
      {children}
    </FirebaseContext.Provider>
  );

  return renderFireBase();
};

FireBase.propTypes = {};

FireBase.defaultProps = {};

export default FireBase;
