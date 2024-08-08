import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'

const Home = () => {
  return (
    <>
    <Header/>

    <div className='container'>
      <div className='d-flex flex-wrap justify-content-between'>
              <CardPizza
                name="Napolitana"
                price={5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                img="https://www.lanacion.com.ar/resizer/v2/pizza-NUKNWKWWRBAGXEECJWGLKMULVQ.jpg?auth=df70fb70d27e9a242dfe70068af898769f18e832bb543cb49d3faf002314bb82&width=420&height=280&quality=70&smart=true"
              />

              <CardPizza
                 name="Española"
                 price={6950}
                 ingredients={["mozzarella ", "gorgonzola", "parmesano ", "provolone"]}
                 img="https://i.ytimg.com/vi/DOJaGdGoTVo/sddefault.jpg"
              />

              <CardPizza
                name="Pepperoni"
                price={6950}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0-HmskFIOzX-o3_DTZdgLshMNluWvZpwAw&s"
              />
        </div>
    </div>

    </>
  )
}

export default Home