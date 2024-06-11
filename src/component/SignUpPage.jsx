import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const SignUpContainer = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  height: calc(100% - 130px);
  width: 100%;
  color: white;
` 
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NewInput = styled.input`
  margin-bottom: 20px;
  width: 400px;
  height: 26px;
  border-radius: 12px;
`
const Label = styled.label`
  display: flex;
`

const ErrorMsg = styled.span`
  margin-bottom : 18px;
  font-size: smaller;
`

const Button = styled.button`
  border-radius: 12px;
  width: 200px;
`

const SignUpPage = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({mode: 'onChange' });

  const onVaild = (data) => {
    console.log(data);
  }

  return (
    <SignUpContainer onSubmit={handleSubmit(onVaild)}>
        <h1>Sign Up</h1>
        <Inputs>
          <Label>Name</Label>
          <NewInput
            name='name'
            type='text'
            id='name'
            {...register('name', {
              required: "이름을 입력해주세요.",
              minLength: {
                message: "2자 이상 입력해주세요.",
                value: 2
              }
            })}
          />
          {
            errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>
          }
          
          <Label>Email</Label>
          <NewInput
            name='email'
            type='email'
            id='email'
            {...register('email', {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                message: '이메일 형식에 맞지 않습니다.'
              }
            })}
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}

          <Label>Age</Label>
          <NewInput
            name='age'
            type='number'
            id='age'
            {...register('age', {
              required: "나이를 입력해주세요.",
              min: {
                value: 19,
                message: "19세 이상부터 가입할 수 있습니다."
              }
            })}
          />
          {errors.age && <ErrorMsg>{errors.age.message}</ErrorMsg>}

          <Label>Password</Label>
          <NewInput
            name='password'
            type='password'
            id='password'
            {...register('password', {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 4,
                message: "최소 4자리 이상 입력해주세요."

              },
              maxLength: {
                value: 12,
                message: "최대 12자리까지 입력 가능합니다."
              },
              pattern: {
                value:  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{1,12}$/,
                message: "불가능한 비밀번호입니다."
              }
            })}
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

          <Label>Confirm Password</Label>
          <NewInput
            name='confirmPwd'
            type='password'
            id='confirmPwd'
            {...register('confirmPwd', {
              required: "비밀번호를 다시 입력해주세요.",
              validate: (value, formValues) => {
                return value === formValues.password || "비밀번호가 일치하지 않습니다."
              },
            })}
          />
          {errors.confirmPwd && <ErrorMsg>{errors.confirmPwd.message}</ErrorMsg>}
          <Button type='submit'>Create Account</Button>
        </Inputs>
    </SignUpContainer>
  )
}

export default SignUpPage