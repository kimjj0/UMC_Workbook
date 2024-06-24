import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SignUpContainer = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20vh;
  width: 100%;
  color: white;
  h1{
    margin-bottom: 10px;
  }
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
  border: none;
  border-bottom: 2px solid white;
  background-color: transparent;
  color: white;
  &: focus{
    outline: none;
  }
`

const Label = styled.label`
  display: block;
  font-size: small;
`

const InputContainer = styled.div`
  text-align: start;
`

const ErrorMsg = styled.span`
  display: block;
  margin-bottom : 18px;
  font-size: smaller;
  color: red;
`

const Button = styled.button`
  width: 200px;
  height: 20px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  margin: 10px 0 30px 0;
`

const Message = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > div{
    font-size: x-small;
    margin-right: 20px;
  }
` 

const SignUpPage = () => {

  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate('/login');
  }

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
          <InputContainer>
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
            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
          </InputContainer>

          <InputContainer>
            <Label>ID</Label>
            <NewInput
              name='id'
              type='text'
              id='id'
              {...register('id', {
                required: "아이디을 입력해주세요.",
                minLength: {
                  message: "4자 이상 입력해주세요.",
                  value: 4
                },
                pattern: {
                  value: /^[a-z]+[a-z0-9]{5,19}$/g,
                  message: '아이디 형식에 맞지 않습니다.'
                }
              })}
            />
            {errors.id && <ErrorMsg>{errors.id.message}</ErrorMsg>}
          </InputContainer>
          
         <InputContainer>
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
         </InputContainer>

          <InputContainer>
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
          </InputContainer>

          <InputContainer>
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
          </InputContainer>

          <InputContainer>
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
          </InputContainer>
          <Button type='submit'>Create Account</Button>

          <Message>
            <div>이미 아이디가 있으신가요?</div>
            <h6 onClick={goLoginPage}>로그인 페이지로 이동하기</h6>
          </Message>
        </Inputs>
    </SignUpContainer>
  )
}

export default SignUpPage