/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
export default function Cards(props) {
  console.log(props.image)
  return (
    <>
    <Card  className="max-w-sm bg-[#F6F6F6]">
      <h1>Feature</h1>
      <div>
        <div >
            <img src={props.image} className="mb-3 rounded-full shadow-lg w-20"></img>
        </div>
        <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        <p className="font-normal text-gray-400">
           {props.description}
        </p>
      </div>
    </Card>
      
    </>
  )
}
