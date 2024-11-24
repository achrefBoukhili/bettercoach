import { IsingleProductFormValues } from 'types/interfaces'
import * as Yup from 'yup'

const useSingleProductForm = () => {
  const initialValues: IsingleProductFormValues = {
    size: '',
  }

  const validationSchema = Yup.object().shape({
    size: Yup.string().required('Required'),
  })

  const handleSubmit = (values: IsingleProductFormValues) => {
    console.log(values)
  }

  return {
    initialValues,
    handleSubmit,
    validationSchema
  }
}

export default useSingleProductForm
