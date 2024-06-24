import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginContainer = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30vh;
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

const InputContainer = styled.div`
  text-align: start;
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

const ErrorMsg = styled.span`
  display: block;
  margin-bottom : 18px;
  font-size: smaller;
  color: red;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 400px;
`

const Button = styled.button`
  width: 100px;
  height: 20px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: transparent;
  color: white;
`

const LoginPage = () => {

  const navigate = useNavigate();
  
  const goSignUpPage = () => {
    navigate('/signup');
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
    <LoginContainer onSubmit={handleSubmit(onVaild)}>
      <h1>Login</h1>
      <Inputs>
        <InputContainer>
          <Label>ID</Label>
          <NewInput
            name='id'
            type='text'
            id='id'
            {...register('id', {
              required: "아이디을 입력해주세요.",
              pattern: {
                value: /^[a-z]+[a-z0-9]{5,19}$/g,
                message: '아이디 형식에 맞지 않습니다.'
              }
            })}
          />
          {errors.id && <ErrorMsg>{errors.id.message}</ErrorMsg>}
        </InputContainer>

        <InputContainer>
            <Label>Password</Label>
            <NewInput
              name='password'
              type='password'
              id='password'
              {...register('password', {
                required: "비밀번호를 입력해주세요.",
              })}
            />
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          </InputContainer>
      </Inputs>
      <ButtonContainer>
        <Button onClick={goSignUpPage}>Sign Up</Button>
        <Button type='submit'>Login</Button>
      </ButtonContainer>
    </LoginContainer>
  )
}

export default LoginPage