import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import s from '../assets/s.svg';
import o from '../assets/o.svg';
import u from '../assets/u.svg';
import r from '../assets/r.svg';
import a from '../assets/a.svg';
import b from '../assets/b.svg';
import h from '../assets/h.svg';
import alt from '../assets/alt.svg';

const navigation = [
  { name: 'Home', href: '/#home', current: true },
  { name: 'About', href: '/#about', current: false },
  { name: 'Projects', href: '/#projects', current: false },
  { name: 'Benchmarks', href: '/#benchmarks', current: false },
  { name: 'Skills', href: '/#skills', current: false },
  { name: 'Contact', href: '/#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="absolute w-screen z-10">
      {({ open }) => (
        <>
          <div className="fixed w-screen px-2 sm:px-6 lg:px-8 bg-cus">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div
                    className="flex h-8 w-auto lg:hidden"
                  >
                    <img src={s} alt={alt} className="h-7 w-7"/>
                    <img src={o} alt={alt} className="h-7 w-7"/>
                    <img src={u} alt={alt} className="h-7 w-7"/>
                    <img src={r} alt={alt} className="h-7 w-7"/>
                    <img src={a} alt={alt} className="h-7 w-7"/>
                    <img src={b} alt={alt} className="h-7 w-7"/>
                    <img src={h} alt={alt} className="h-7 w-7"/>
                </div>
                  <div
                    className="hidden h-8 w-auto lg:flex"
                  >
                    <img src={s} alt={alt} className="h-7 w-7"/>
                    <img src={o} alt={alt} className="h-7 w-7"/>
                    <img src={u} alt={alt} className="h-7 w-7"/>
                    <img src={r} alt={alt} className="h-7 w-7"/>
                    <img src={a} alt={alt} className="h-7 w-7"/>
                    <img src={b} alt={alt} className="h-7 w-7"/>
                    <img src={h} alt={alt} className="h-7 w-7"/>
                </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 mt-16 bg-cus">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
