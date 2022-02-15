import { useState } from 'react';
import './Pagination.css';

export default function Pagination ({getData}) {
    const [actualPage, setActualPage] = useState(1);

    const changePage = newPage => {
        if (newPage >= 1) {
            getData(newPage);
            setActualPage(newPage);
        };
       
        
    }
    
    return <div className="c-pagination">

   <button className="c-pagination__button" onClick={() => changePage(actualPage-1)}>{"🢀"}</button>
       <span> {actualPage}  </span> 
   <button className="c-pagination__button" onClick={() => changePage(actualPage+1)}>{"🢂"}</button>
   </div>
    
}