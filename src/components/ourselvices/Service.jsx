
import { data } from './data'
import Cards from './Cards'
export default function Service() {
  return (
    <>
      <section className="bg-[#5E96FC] h-full pb-10">
            <h1 className="text-5xl text-white font-bold text-center mb-5 pt-10">Features</h1>
            <p className="text-gray-200 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            <div className="grid grid-cols-3 mt-6 gap-y-5">
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
