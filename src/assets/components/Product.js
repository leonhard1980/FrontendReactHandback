import React from 'react';

function Product ({productImage, redlabel, naamTas, price, title}) {
    return(
        <article>
            <span>
                {redlabel}
            </span>
            <img src={productImage} alt={title}/>
            <p>{naamTas}</p>
            <h4>{price},-</h4>
        </article>
    )
}

export default Product