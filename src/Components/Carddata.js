import React, { useState } from "react";
import { Card } from "react-bootstrap";




function Carddatas({setCartValue}) {
  // let [toggle, setToggle]=useState(true);
  
    const data=[
        {
          productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzg70uhfUHQdKXfE8inLc8gOWLoZzuQhyDg&usqp=CAU",
          productName:"Cotton Saree",
          price:"₹ 1200",
          rating:"⭐⭐⭐⭐",
        },
         {
          productImage:"https://cdn.shopify.com/s/files/1/0220/5433/8656/products/350502_20PL_1024x.jpg?v=1668105732",
          productName:"Silk Saree",
          price:"₹ 8000",
          rating:"⭐⭐⭐⭐",
        },
         {
          productImage:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51fZwIMrxYL._UL1133_.jpg",
          productName:"Ready to wear Saree",
          price:"₹ 4000",
          rating:"⭐⭐⭐⭐",
        },
         {
          productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FmvUwEB8XciYfKvDm5aGiW8gI6W_4lrQqw&usqp=CAU",
          productName:"Designer saree",
          price:"₹ 3000",
          rating:"⭐⭐⭐⭐", 
        },
         {
          productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEtL8QfHSaiwvNa5LHaJTUw1Ck9fC6V6JgoxUgsC63rJ12BAaplUkDKl-JIfCydOMKlc&usqp=CAU",
          productName:"Plain Saree",
          price:"₹ 1000",
          rating:"⭐⭐⭐⭐",
        },
         {
          productImage:"https://www.tapathi.com/pub/media/catalog/product/cache/e5c5a84ca7200b1fdddd537435eb2f91/7/3/731paithani_pure_silk_handloom_saree-00203202214101416980500.jpg",
          productName:"Handloom Saree",
          price:"₹ 3500",
          rating:"⭐⭐⭐⭐",
        },
        {
          productImage:"https://rukminim1.flixcart.com/image/832/832/ktn9pjk0/ethnic-set/0/h/r/m-hkkurtis-10076maroon-m-laxmi-fab-tex-original-imag6y3rhhytthnv.jpeg?q=70",
          productName:"palazzo set",
          price:"₹ 3500",
          rating:"⭐⭐⭐⭐",
        },
        {
          productImage:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81oKSGjj+vL._UL1440_.jpg",
          productName:"jaipur kurti",
          price:"₹ 1500",
          rating:"⭐⭐⭐⭐",
        },
        {
          productImage:"https://i.etsystatic.com/22245633/r/il/d66fc2/3029723429/il_570xN.3029723429_184p.jpg",
          productName:"A-line kurti",
          price:"₹ 1500",
          rating:"⭐⭐⭐⭐",
        },
        {
          productImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/kurta/u/2/z/xl-nk-kurti-031-white-nk-design-original-imaga4h7ae5j6ksu-bb.jpeg?q=70",
          productName:"baba kurti",
          price:"₹ 1800",
          rating:"⭐⭐⭐⭐",
        },
        {
          productImage:"https://5.imimg.com/data5/ECOM/Default/2023/1/IZ/NJ/CH/144140021/directgharpe-wcekdb839-5-500x500.jpg",
          productName:"designer front slit kurtis",
          price:"₹ 2000",
          rating:"⭐⭐⭐⭐",
        },
        {
          productImage:"https://img.tatacliq.com/images/i7/437Wx649H/MP000000009393976_437Wx649H_202104201734341.jpeg",
          productName:"Anarkali cotton kurtis",
          price:"₹ 1500",
          rating:"⭐⭐⭐⭐",
        },
      ]

      const [toggleStates, setToggleStates] = useState(
        Array(data.length).fill(true)
      );
    
      const handleToggle = (index) => {
        setToggleStates((prevState) => {
          const newState = [...prevState];
          newState[index] = !newState[index];
          return newState;
        });
      };

      
    return<>

    <div className="card-container">
        {data.map((prod,index)=><Card key={index}>
            <div className="card-body">
            <Card.Img variant="top" src={prod.productImage} style={{ width: '250px', height: '200px', margin: '1rem' }}/>
        <div className="card-content">
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>{prod.price} RS</Card.Text>
          <Card.Text>{prod.rating} ⭐</Card.Text>
          </Card.Body>
          
          </div>
          <div >
            {
              toggleStates[index] ?
              <button className="btnb btn-primary mt-auto" onClick={()=>{
                setCartValue(value=>value+1)
                handleToggle(index);
            }}> Add To Cart</button> :
            <button className="btnb1 btn-primary mt-auto" onClick={()=>{
              setCartValue(value=>value-1)
              handleToggle(index);
          }}> Remove</button>

            
                      
            }
                  </div>      
                    
          </div>
        </Card>
        

        )

}

   
</div>

    </>
}
export default Carddatas;