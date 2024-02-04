import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link';


const navigation = [
  { name: 'Home', href: '/home', current: false },
  { name: 'About', href: '#', current: true },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Team', href: '/team', current: false },
]

export default function About() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
             
              <div className=" inset-y-0  flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <div className="flex">
                {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    item.current ? 'bg-gray-900 text-white font-mono font-semibold text-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-white font-mono font-semibold text-lg',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
                </div>
             
            </div>
          </Disclosure.Panel>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto cursor-pointer"
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                    alt="JetSpire Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <p className="text-white font-mono font-semibold ml-2 text-lg hover:bg-gray-700 hover:text-white rounded-lg py-1 px-3">{item.name}</p>
                      </Link>
                    ))}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='bg-black h-auto py-5'>
            <div className='flex items-center justify-center'>
              <div>
              <h1 className=' text-lg text-white font-mono font-semibold'>About</h1>
              <h1 className='text-center lg:text-6xl md:text-4xl sm:text-4xl text-2xl text-white font-mono font-semibold cursor-pointer'>JETSPIRE</h1>
              <h1 className='text-center lg:text-2xl md:text-xl sm:text-lg text-md text-white font-mono font-semibold'>AI - Marketing</h1>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                    alt="JetSpire Logo"
                    className='w-24 my-48 md:w-48 lg:w-96 xl:w-96 sm:w-36'>
              </img>
            </div>
          </section>
          <section className='bg-black h-auto py-8'>
              <div className='justify-center  flex-auto items-center md:mx-36 lg:mx-56 sm:mx-12 xl:mx-96'>
                <h1 className='text-white lg:text-6xl md:text-4xl sm:text-4xl text-2xl px-8  font-mono font-semibold'>How do we boost you beyond the stratosphere?</h1>
                <h3 className="text-white text-xl font-mono font-semibold my-3  rounded-lg p-3 px-24">Welcome to Jetspire, where we redefine online visibility with cutting-edge AI-based marketing tools. One of our standout offerings is Programmatic SEO — a strategic approach that maximizes your reach and impact in the digital realm. Let's delve into how it works:</h3>
                
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">1. Strategic Website Setup</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">We create a dynamic website acting as a comprehensive directory, meticulously optimized for SEO. Leveraging data from US or UK Census, we generate SEO-optimized pages for each keyword we target and every town or village within our specified area.</p>
                
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">2. Population and Demographics Integration</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">The number of pages directly correlates with the number of keywords and towns/villages. For instance, if we target "pest control" with 3 keywords and 100 towns/villages, we generate 300 pages. Each page is tailored to a specific combination, such as "pest control Round Rock Texas."</p>
             
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">3. Precision Optimization</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">These pages are more than just content; they are fine-tuned for SEO success. We employ meta tags and schema to optimize each page and seamlessly link it to the business profile. Ideally, this directory resides on a subdomain of your company website, forging a strong association with Google.</p>
             
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">4. Analytics Integration</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">The directory site is equipped with a separate Google Analytics setup and Google Webmaster Tools. We proactively submit a sitemap to Google, ensuring swift indexing of pages. Our goal is to secure top 3 positions in search results for the targeted keywords.</p>
             
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">5. User Engagement Tracking</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">When users discover and engage with these pages, their interactions are meticulously tracked through Google Analytics. This engagement is crucial, especially when visitors are located in the corresponding town/village. The content is optimized for both the keyword and location, sending strong signals to Google that someone actively sought that specific service in that area.</p>
             
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">6. Closing the Loop with Reviews</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">A positive loop is completed when engaged visitors, satisfied with the information, leave reviews. This feedback significantly enhances the impact on the local 3-pack results, establishing your business prominently in local searches.</p>
             
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">Why Programmatic SEO Works</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">Precision Targeting: By aligning content with specific keywords and locations, we optimize your visibility where it matters most.User-Centric Engagement: User interactions are actively tracked, providing valuable insights into their needs and preferences. Google Association: The strategic setup enhances Google's association between your business and the targeted locations, elevating your online presence.</p>
             
                <p  className="text-white text-lg font-mono rounded-lg p-5 px-24">At Jetspire, Programmatic SEO isn't just a service; it's a tailored approach to amplify your digital footprint. Let us propel your business to the forefront of online visibility and local search results. Discover the power of Programmatic SEO with Jetspire today!</p>
             
              </div>
              
          </section>
          
          <section className='bg-black text-3xl text-white   pt-24'>
            <div className='xl:mx-96 px-8 lg:mx-24 md:mx-12 mx-4'>
                <h1 className='font-mono font-semibold text-left'>Ready for lift-off? Join us on an incredible journey and let's soar to the stellar heights of success together!</h1>
                <div className='text-center'> 
                <Link href='/contact'>
                    <button className='bg-white  mt-20 shadow-md shadow-white font-mono font-semibold text-black rounded-full py-2 px-8 hover:bg-slate-300'>Start your journey</button>
                </Link></div>
                                       
            </div>
          </section>

          <section className='pt-20 bg-black'>
          <footer>
              <div className='bg-black h-auto pt-8 pb-5 border-t border-white'>
                <div className='justify-center text-center xl:mx-96 lg:mx-48 sm:mx-12'>
                  <strong className='text-white text-4xl font-mono font-semibold'>JETSPIRE</strong>
                  <h3 className="text-white text-xl font-mono font-semibold my-5  rounded-lg p-5 px-24">We're here to help you reach the stars.</h3>
                  </div>
                <div className='text-center flex justify-center'>
                {navigation.map((item) => (
                      <Link 
                      href={item.href} 
                      key={item.name}>
                        <p className="text-white font-mono font-semibold ml-2 text-lg hover:bg-gray-700 hover:text-white rounded-lg py-1 px-3">{item.name}</p>
                      </Link>
                    ))}
                    
                </div>
                <div>
                      <p className='text-white text-lg font-mono font-semibold  text-center mt-5'>&copy;2024</p>
                    </div>
              </div>
            </footer>
          </section>




        
        </>
      )}
    </Disclosure>
   
  )
} 