import * as yup from "yup";
export const adminSchema = yup
  .object()
  .shape({
    // fullName: yup.string("Pls enter string text").required("This field must not be left blank"),
    // firstName: yup.string("Pls enter string text").required("This field must not be left blank"),
    // lastName: yup.string("Pls enter string text").required("This field must not be left blank"),
    // email: yup.string("Pls enter email firmatted text").required("This field must not be left blank"),
    // number: yup.number("Pls enter number").required("This field must not be left blank"),
    // message: yup.string("Pls enter string text").required("This field must not be left blank"),
    // address:yup.string("Pls enter string text").required("This field must not be left blank"),
    // image:yup.string("Pls enter string text").required("This field must not be left blank"),
    // date: yup.number("Pls enter number").required("This field must not be left blank"),
    // occupation:yup.string("Pls enter string text").required("This field must not be left blank"),
    // comment:yup.string("Pls enter string text").required("This field must not be left blank"),
    // money: yup.number("Pls enter number").required("This field must not be left blank"),
    // country:yup.string("Pls enter string text").required("This field must not be left blank"),
    // city:yup.string("Pls enter string text").required("This field must not be left blank"),
    // mm:yup.string("Pls enter string text").required("This field must not be left blank"),
    // cvc: yup.number("Pls enter number").required("This field must not be left blank"),
    // cardNumber: yup.number("Pls enter number").required("This field must not be left blank"),
    // billingAddress:yup.string("Pls enter string text").required("This field must not be left blank"),
    // text:yup.string("Pls enter string text").required("This field must not be left blank"),

    fullName: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    name: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    image: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    date: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    title: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    text: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    color: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    detailText: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    detailImage: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    detailTitle: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    category: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    goal: yup
      .number("Pls enter number")
      .required("This field must not be left blank"),
    raised: yup
      .number("Pls enter number")
      .required("This field must not be left blank"),
    payment: yup
      .number("Pls enter number")
      .required("This field must not be left blank"),
    day: yup
      .number("Pls enter number")
      .required("This field must not be left blank"),
    location: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    website: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    phone: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    month: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    watch: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
    requirements: yup
      .string("Pls enter string text")
      .required("This field must not be left blank"),
  })
  .required();
