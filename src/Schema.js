import * as yup from 'yup';

const Schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Size is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    tomatoes: yup.boolean(),
    peppers: yup.boolean(),
    special: yup
        .string()
        .trim()
        .required('Special instructions are required')
})

export default Schema