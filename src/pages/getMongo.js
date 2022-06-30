import React, { useState, useEffect } from 'react';
import { handler } from '../api/getMongoData'

function GetMongo() {
  const [mongodata, setongodata] = useState('');

  function getIt() {
    handler().then((data) => setongodata(data))
  }

   useEffect(() => {
    console.log('creating mongo doc');
    getIt()
   },[]);


  return (
    <>
    <button onClick={()=>getIt()}>GET IT</button>
      {JSON.stringify(mongodata)}
    </>
  );
}

export default GetMongo;
