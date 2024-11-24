import { IsearchInputFormValues } from "types/interfaces"
import { useRouter } from "next/router"

const useSearchInput = () => {
  const router = useRouter()

  const initialValues = {
    searchPhrase: ''
  }

  const handleSubmit = (values: IsearchInputFormValues) => {


    router.push({
      pathname: '/search',
      query: {
        phrase: values.searchPhrase
      }
    })
  }

  return {
    handleSubmit,
    initialValues
  }
}

export default useSearchInput
