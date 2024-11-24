import type React from 'react'
import Link from 'next/link'
import type { Icategory } from 'types/interfaces'

interface Iprops {
  category: Icategory
  boxColor: string
}

const HorizontalTile: React.FC<Iprops> = ({ category, boxColor }) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div
        className={`even:mt-2 odd:mb-2 horizontal-tile flex flex-row items-center justify-around p-2 px-5 rounded-md shadow ${boxColor} w-full h-32 xl:h-1/2 hover:scale-[.97] cursor-pointer transition-all`}
      >
        <div className="pr-4">
          <p className="text-xl font-semibold sm:text-2xl">{category.name}</p>
          {/* <p className="text-sm sm:text-base">{description}</p> */}
        </div>
      </div>
    </Link>
  )
}

export default HorizontalTile;