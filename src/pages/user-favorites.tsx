import { Layout, ProductTile } from 'components';
import { NextPage } from 'next';
import accountLinks from 'utils/accountLinks.json'
import useUserFavorites from '@hooks/use-user-favorites';

const UserFavorites: NextPage = () => {
  const { loading, products } = useUserFavorites()

  const productMap = products?.map(product => {
    return (
      <ProductTile key={product.slug} product={product} />
    )
  })

  return (
    <Layout
      headerTitle="❤️ Favorite products"
      links={accountLinks}
    >
      <div>
        {
          loading ?
            "Loading"
          :
          <div className="bg-white">
            <div className="max-w-2xl mx-auto lg:max-w-7xl">
              {
                products && products?.length > 0 ?
                  <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    { productMap }
                  </div>
                :
                  <h2 className='text-2xl text-gray-500 md:text-4xl'>You do not have any favorite products</h2>
              }
            </div>
          </div>
        }
      </div>
    </Layout>
  )
}

export default UserFavorites;