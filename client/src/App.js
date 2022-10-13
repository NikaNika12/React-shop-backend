import React, {useContext, useEffect, useState} from 'react';
import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import Loader from './components/UI/Loader/Loader';
import { observer } from 'mobx-react';
import { Context } from '.';
import { check } from './http/userApi';



const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Loader/>
  }

    return (
      <BrowserRouter>
            <Navbar/>
            <AppRouter/>
      </BrowserRouter>
    );
});

export default App;