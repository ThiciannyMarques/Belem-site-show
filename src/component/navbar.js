// import '@/styles/navbar.css'

export default function NavBar() {
  return (
    <div>
    <h1 className="text-blue-500">I'm blue!</h1>
    <h1 className="text-3xl font-bold underline text-white">Hello, Next.js!</h1>
    
    
//     asdasd
        <div className="container mx-auto px-4 h-full bg-blue-50">
            <div className="flex justify-between items-center h-full">
                <ul className="hidden md:flex gap-x-6 text-white">
                    <li>
                        <a href="/about">
                        <p>About Us</p>
                        </a>
                    </li>
                    <li>
                        <a href="/services">
                        <p>Services</p>
                        </a>
                    </li>
                    <li>
                        <a href="/contacts">
                        <p>Contacts</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    
    </div>
  );}
