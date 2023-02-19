import { suby1s1 } from '../constants'
import styles from '../style'

export default function Y1S1() {
  return (
    <section id='work'>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <div className="grid grid-cols-1 text-center gap-y-10  gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {suby1s1.map((product) => (
              <a key={product.id} href={product.path} className="group bg-[#0a0a23] py-6 px-4  mx-4  rounded-lg">
                <div className={`aspect-w-1 font-montserrat text-[#ffffff] hover:text-[#002ead]  duration-700 text-[2rem] font-bold aspect-h-1 w-full overflow-hidden  xl:aspect-w-7 xl:aspect-h-8`}>
                  <p className="h-full w-full object-cover object-center ">
                  {product.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
