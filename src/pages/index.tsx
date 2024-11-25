import { useQuery } from '@apollo/client'
import { ProductSkeleton, ErrorBoundary, ProductsGrid } from 'components'
import { GET_LANDING_PRODUCTS } from 'api/queries'
import { Layout } from 'components'
import type { NextPage } from 'next'
import { Suspense } from 'react'
import type { Icategory } from 'types/interfaces'
import { getDefaultCategoriesLinks } from 'utils'
interface Iprops {
  defaultCategoriesLinks: Icategory[],
}

const Home: NextPage<Iprops> = ({ defaultCategoriesLinks }) => {
  return (
    <ErrorBoundary>
      <Layout
        headerTitle={`${defaultCategoriesLinks[0].name} & ${defaultCategoriesLinks[1].name}`}
        links={defaultCategoriesLinks}
      >
        <Suspense fallback={<ProductSkeleton numberOfSkeletons={10} />}>
          <ProductsGrid />
        </Suspense>
      </Layout>
    </ErrorBoundary>
  )
}

export default Home;

export const getStaticProps = async () => {
  const defaultCategoriesLinks = await getDefaultCategoriesLinks()

  return {
    props: {
      defaultCategoriesLinks,
    },
  }
}