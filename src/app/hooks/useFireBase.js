import { useContext } from 'react';

import { FirebaseContext } from 'app/contexts/FireBase';

const useFireBase = () => useContext(FirebaseContext);

useFireBase.propTypes = {};

useFireBase.defaultProps = {};

export default useFireBase;
