import React, { useContext, useState, useEffect } from 'react';
import myContext from '../context/myContext'
import { BootstrapCard } from '../parts/bootstrapCard';
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
