import React, {createContext, FC, useContext, useState} from 'react';

const defaultContextObject = {
  firstName: '',
  lastName: '',
  email: '',
  hasPhone: false,
  phoneNumber: ''
}

export const DataContext = createContext<IDataContext>({data: defaultContextObject, setValues: () => {}});

interface DataProviderProps {
  children: React.ReactNode | string
}

const DataProvider: FC<DataProviderProps> = ({children}) => {
  const [data, setData] = useState(defaultContextObject);

  const setValues = (values: StepsFormType) => {
    setData(prevState => ({
      ...prevState,
      ...values
    }))
  }

  return (
    <DataContext.Provider value={{data, setValues}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataProvider;
