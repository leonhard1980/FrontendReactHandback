import React from 'react';

function Tegel ({tekst, titel, img, title}) {
    return(
           <section>
               {img && <img src={img} alt={title} /> }
               <h2> {titel}</h2>
               <p>{tekst}</p>
           </section>
    )
}

export default Tegel

