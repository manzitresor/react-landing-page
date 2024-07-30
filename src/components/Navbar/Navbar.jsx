
export default function Navbar() {
    const lists=[
        'Features',
        'About',
        'Services',
        'Gallery',
        'Testimonials',
        'Team',
        'Contact'
    ]
  return (
    <nav className="flex justify-between items-center mx-6 bg-gray-50 py-8">
        <h1 className="text-3xl font-medium">React Landing Page</h1>
        <ul className="flex gap-x-10 text-xl">
            {
                lists.map((list,index)=>(
                    <li key={index}>{list}</li>
                ))
            }
            
        </ul>
    </nav>
  )
}
