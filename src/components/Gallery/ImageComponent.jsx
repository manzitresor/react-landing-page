/* eslint-disable react/prop-types */
export default function ImageComponent(props) {
  return (
    <>
    <section className="w-full border border-white">
        <div className="w-full cursor-pointer">
          <img src={props.image} className={`w-full hover:bg-blue-400 transition duration-300 ease-in-out hover:opacity-30 $`}></img>
        </div>
    </section>

    </>
  )
}
