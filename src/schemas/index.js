import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  surname: yup.string().required("Please enter your surname"),
  email: yup.string().email().required("Please enter your email"),
  remark: yup.string(),
});
