/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
export default function Cards(props) {
  console.log(props.image)
  return (
    <>
    <Card  className="max-w-sm bg-[#5E96FC]">
      <div>
        <div >
            <img src={props.image} className="mb-3 rounded-full shadow-lg w-20 mx-auto"></img>
        </div>
        <h5 className="text-xl font-medium tracking-tight text-white text-center">{props.title}</h5>
        <p className="font-normal text-gray-200 text-center">
           {props.description}
        </p>
      </div>
    </Card>
      
    </>
  )
}
