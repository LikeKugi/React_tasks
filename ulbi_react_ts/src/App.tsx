import React from 'react';
import Card, {CardVariant} from "./components/Card/Card";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import MainPage from "./pages/MainPage/MainPage";
import TodosItemPage from "./pages/TodosItemPage/TodosItemPage";
import UsersItemPage from "./pages/UsersItemPage/UsersItemPage";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <nav style={{padding: '10px 0'}}>
          <NavLink style={{marginRight: 10}} to={'/'}>Main</NavLink>
          <NavLink style={{marginRight: 10}} to={'/users'}>Users</NavLink>
          <NavLink style={{marginRight: 10}} to={'/todos'}>Todos</NavLink>
          <NavLink style={{marginRight: 10}} to={'/events'}>Events</NavLink>
        </nav>
        <div>
          <Card width={'400px'}
                height={'200px'}
                variant={CardVariant.outlined}
                onCLick={(n) => console.log('click', n)}>
            <button>Hello world</button>
          </Card>
        </div>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/users'} element={<UsersPage/>}>

          </Route>
          <Route path={'/users/:id'} element={<UsersItemPage/>}/>
          <Route path={'/todos'} element={<TodosPage/>} />
          <Route path={'/todos/:id'} element={<TodosItemPage/>}/>
          <Route path={'/events'} element={<EventsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
