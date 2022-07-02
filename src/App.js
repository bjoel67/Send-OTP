import { HomeComponent } from './Components/HomeComponent';
import { AppContextProvider } from './Context/AppContext';
export const  App=()=> 
{
  return (
    <>
      <AppContextProvider>
        <HomeComponent />
      </AppContextProvider>
    </>
  );
}