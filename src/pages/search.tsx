import type { NextPage } from 'next';
import type { Icategory } from 'types/interfaces';
import { getDefaultCategoriesLinks } from 'utils';
import { Layout, ProductTile } from 'components'
import useSearch from '@hooks/use-search';
import { useRouter } from 'next/router';
import { ProductSkeleton } from 'components';
import { Suspense } from 'react';

interface Iprops {
  defaultCategoriesLinks: Icategory[]
}

const Search: NextPage<Iprops> = ({ defaultCategoriesLinks }) => {
  const router = useRouter()
  const { phrase } = router.query
  const { products, loading } = useSearch({ queryPhrase: phrase ? String(phrase) : '' })

  return (
    <Layout links={defaultCategoriesLinks} headerTitle="Search">
      <Suspense fallback={<ProductSkeleton numberOfSkeletons={10} />}>
        <div className="grid grid-cols-4 gap-4">
          {products?.map((product) => {
            return <ProductTile key={product.slug} product={product} />
          })}
        </div>
      </Suspense>
    </Layout>
  )
}

export default Search;

export const getStaticProps = async () => {
  const defaultCategoriesLinks = await getDefaultCategoriesLinks()

  return {
    props: {
      defaultCategoriesLinks,
    },
  }
}