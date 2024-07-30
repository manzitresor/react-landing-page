import ImageComponent from './ImageComponent'

export default function Gallery() {
  const data = [
    {
      id: 1,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/04-large.jpg'
    },
    {
      id: 2,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/02-large.jpg'
    },
    {
      id: 3,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/03-large.jpg'
    }
    ,
    {
      id: 4,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/04-small.jpg'
    }
    ,
    {
      id: 5,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/05-small.jpg'
    }
    ,
    {
      id: 6,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/06-small.jpg'
    }
    ,
    {
      id: 7,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/07-small.jpg'
    }
    ,
    {
      id: 8,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/08-small.jpg'
    }
    ,
    {
      id: 9,
      image: 'https://react-landing-page-template-93ne.vercel.app/img/portfolio/09-small.jpg'
    }
  ]
  return (
     <section className="bg-gray-100 h-screen pb-9">
         <h1 className="text-5xl text-black font-bold text-center mb-5 pt-10">Gallery</h1>
         <p className="text-gray-700 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
         <div className='grid grid-cols-3 my-10 mx-16'>
              {
                data.map((item=>(
                      < ImageComponent key={item.id} image={item.image} ></ImageComponent>
                )))
              }
         </div>
         
    </section>
  )
}
