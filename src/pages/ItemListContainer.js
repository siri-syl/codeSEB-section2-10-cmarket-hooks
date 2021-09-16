import React from 'react';
import Item from '../components/Item';

function ItemListContainer({ items, setCartItems, cartItems }) {
  const handleClick = (e, id) => {
    // "itemId": 1,
    // "quantity": 1

    let filterList = cartItems.filter(item => item["itemId"] === id);
    
    if(filterList.length === 1){
      let temp = [...cartItems];
      for(let i=0; i<cartItems.length; i++){
        if(temp[i]["itemId"] === id){
          temp[i]["quantity"]++;
          setCartItems(temp);
        }
      }
    }else{ // length = 0
      let obj = {"itemId": id, "quantity": 1}
      setCartItems([...cartItems, obj])
    }
  };

  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => <Item item={item} key={idx} handleClick={handleClick} />)}
      </div>
    </div>
  );
}

export default ItemListContainer;
