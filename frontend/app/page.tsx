// modules
import { memo } from 'react'
import axios from 'axios'

// styles
import tstyle from "./page.module.css";

//////////////////////////////////////////////////

export default memo(function Home() {

  const httpRequestsGet = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/Makoto-Kawajiri/Portfolio_0001/');
      console.log(response);
    } catch(error) {
      console.log(error)
    }
  }
  httpRequestsGet();

  return (
    <>
    <div className={`${tstyle.page}`}>
      <p>Hello, World.</p>
    </div>{/* END page */}
    </>
  );
});