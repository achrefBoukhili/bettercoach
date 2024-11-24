import { Skeleton } from '@/components/ui/skeleton'
const ProductSkeleton: React.FC<{ numberOfSkeletons?: number }> = ({
  numberOfSkeletons = 1,
}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductSkeleton;