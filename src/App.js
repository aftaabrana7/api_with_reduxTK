import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from './features/gitUserSlice';

const App = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log("state", state.app);
    return state.app;
  });

  if (data.error =! null) {
    return <h2>{data.error}</h2>
  }

  return (
    <>
      <div>Hello</div>
      <button onClick={() => dispatch(getAllData())}>Get GitHub Users</button>

      {data.users.map((ele) => (
        <li key={ele.id}>{ele.login}</li>
      ))}
    </>
  )
}

export default App