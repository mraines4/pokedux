import React from 'react';
function PokeList({cards, handleClick}){
    const cardItems = cards.map(card => {
        return(
        <img  src={card.imageUrl}
            key={card.id} 
            onClick={() => handleClick(card.id)}  />
        
        
        )
    })
    return(
        <ul>   
            {cardItems}
        </ul>
    )
    
}
export default PokeList;