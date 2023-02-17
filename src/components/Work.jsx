import { doings, products } from '../constants'
import styles from '../style'

export default function Example() {
  return (
    <section id='work'>
      <div className="">
        <div className="mx-auto max-w-2xl py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h2 className={`${styles.paddingNew} font-merry text-[#002ead] text-[1.6rem] font-bold text-center`}>Areas focused</h2>
          <div className="grid grid-cols-1 text-center gap-y-10  gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {doings.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className={`aspect-w-1  font-montserrat text-[#0a0a23] text-[3rem] font-bold aspect-h-1 w-full overflow-hidden  xl:aspect-w-7 xl:aspect-h-8`}>
                  <p className="h-full w-full object-cover object-center ">
                  {product.name}
                  </p>
                </div>
                {/* <h3 className="mt-4  font-shadows text-center font-bold text-[#939393] text-[1rem] text-gray-700">{product.mywork}</h3> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
