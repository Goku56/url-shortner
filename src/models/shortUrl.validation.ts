import { object, string } from "yup";

export default object({
  body: object({
    destination: string().url().required("destination is required"),
  }),
});
