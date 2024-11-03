// modules
import { memo } from 'react'

// styles
import tstyle from "./page.module.css";

//////////////////////////////////////////////////

const MemoHome = () => {
  return (
    <>
    <div className={`${tstyle.page}`}>
      
    </div>{/* END page */}
    </>
  );
};

export const Home = memo(MemoHome);