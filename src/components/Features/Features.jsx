import Cards from "./Cards";
import img from '../../assets/message.png'
import img2 from '../../assets/two.png'
import img3 from '../../assets/three.png'
import img4 from '../../assets/four.png'
export default function Features() {
 const data=[
  {
    id: 1,
    image: img,
    title: 'Lorem ipsum',
    description: ' Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.'
  },
  {
    id: 2,
    image: img2,
    title: 'Lorem ipsum',
    description: ' Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.'
  },
  {
    id: 3,
    image: img3,
    title: 'Lorem ipsum',
    description: ' Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.'
  },
  {
    id: 4,
    image: img4,
    title: 'Lorem ipsum',
    description: ' Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.'
  }
 ] 
  return (
    <>
    <section className="h-screen flex flex-col justify-center">
    <h1 className="text-3xl font-bold text-center mb-11">Features</h1>
    <div className="grid grid-cols-4">
        {
          data.map((item)=>(
            <Cards key={item.id} image={item.image} title={item.title} description={item.description} ></Cards>
          ))
        }
    </div>
    </section>
    
    </>
  )
}
