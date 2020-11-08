import React, { useState } from "react";
import {useNewsStore} from './hooks'

const Form = () => {
  const [inputData, setInputData] = useState("");
  const {addNews, getNewsFromRestApi} = useNewsStore();

  const handleOnChange = (event) => setInputData(event.target.value);

  const handleOnSubmit = event => {
      event.preventDefault();

      const newsBody = {
          id: Date.now(),
          date: `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`,
          body: inputData,
      };

      addNews(newsBody)
      setInputData('');
  }

  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <label>
        Enter a news<br />
        <input type="text" value={inputData} onChange={handleOnChange} /><br /><br />
      </label>
    </form>
       <button onClick={getNewsFromRestApi}>Add Radnom News From a Rest Api</button>
    
    </>
  );
};

export default Form;
