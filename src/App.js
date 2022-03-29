import logo from './logo.svg';
import './App.css';
import Link from './Component/Link/Link';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: './home' },
    { id: 2, name: "Shop", link: './shop' },
    { id: 3, name: "Deald", link: './deals' },
    { id: 4, name: "Coupons", link: './coupons' },
    { id: 5, name: "About", link: './about' }
  ]
  return (
    <div className="App">
      <nav>
        <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden bg-slate-600 text-zinc-50 flex justify-end'>
          {open ? <XIcon></XIcon> : <MenuAlt1Icon ></MenuAlt1Icon>}
        </div>
        <ul className={`md:flex justify-end align-center absolute duration-500 ease-in bg-slate-600 text-zinc-50 ${open ? 'top-6' : 'top-[-120px]'}`}>
          {
            routes.map(route => <Link
              key={route.id}
              route={route}
            ></Link>)
          }
        </ul>
      </nav>
    </div>
  );
}

export default App;
