import React from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 2rem;

  & > .form__input {
    grid-column-end: span 1;
    padding: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.25rem;
    color: ${props => props.theme.colors.white};
    border: none;
    background-color: ${props => props.theme.colors.black2};
    margin-bottom: 1rem;
  }

  & > .form__input::placeholder {
    color: ${props => props.theme.colors.white};
  }

  & > .form__submit {
    grid-column-end: span 2;
    margin: 3rem auto 0 auto;
    padding: 1rem 4.5rem;
    background-color: transparent;
    color: ${props => props.theme.colors.white};
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 700;
    border: 1px solid ${props => props.theme.colors.white};
    text-transform: uppercase;
    transition: ${props => props.theme.animations.button};
    cursor: pointer;
  }

  & > .form__submit:hover {
    color: ${props => props.theme.colors.black1};
    background-color: ${props => props.theme.colors.white};
  }

  @media ${props => props.theme.breakpoints.m} {
    & > .form__input {
      grid-column-end: span 2;
    }
  }
`

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      "Invalid email"
    ),
})

const FooterForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = data => console.log(data)

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form__input"
        name="name"
        placeholder="Name"
        ref={register()}
      />
      <input
        className="form__input"
        name="email"
        placeholder="Email"
        ref={register()}
      />
      {errors.name && <p className="form--error">{errors.name.message}</p>}
      {errors.email && <p className="form--error">{errors.email.message}</p>}
      <input className="form__submit" type="submit" value="Subscribe" />
    </Form>
  )
}

export default FooterForm
