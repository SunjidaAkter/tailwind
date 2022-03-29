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
    { id: 3, name: "Deals", link: './deals' },
    { id: 4, name: "Coupons", link: './coupons' },
    { id: 5, name: "About", link: './about' }
  ]
  return (
    <div className="App">
      <nav className='flex py-5 justify-start bg-slate-600'>
        <div onClick={() => setOpen(!open)} className='ml-5 w-6 h-6 md:hidden bg-slate-600 text-zinc-50 '>
          {open ? <XIcon></XIcon> : <MenuAlt1Icon ></MenuAlt1Icon>}
        </div>
        <ul className={`md:flex flex md:flex-row md:justify-center flex-col items-center pl-11 md:w-full w-52 h-full absolute md:sticky top-14  duration-500 ease-out bg-slate-600 text-zinc-50  ${open ? 'left-0 top-6 ' : 'left-[-220px]'}`}>
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
