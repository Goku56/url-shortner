import { object, string } from 'yup';

export default object({
    destination: string().url().required('destination is required')
})