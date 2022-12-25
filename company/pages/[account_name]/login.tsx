import { FC, useState } from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InputText } from '@packs/components-next/components/input/InputText/InputText'
import * as yup from '@packs/yup'
import { LoginFormInput, StaffDetail } from '~/types/staff/api'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch } from '~/lib/redux/hooks'
import { useMutateStaff } from '~/hooks/staff/useMutateStaff'
import { useRouter } from 'next/router'
import { useQueryStaff } from '~/hooks/staff/useQueryStaff'
import { useQueryCompany } from '~/hooks/company/useQueryCompany'
import { toast } from 'react-toastify'
import { setStaff } from '~/slices/staff/staffSlice'
import { setCompany } from '~/slices/company/companySlice'
import { CompanyDetail } from '~/types/company/api'

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  })
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const { login } = useMutateStaff()
  const { fetchUser } = useQueryStaff()
  const { fetchCompany } = useQueryCompany()
  const router = useRouter()

  const onChangeEmailText = (value: string) => {
    setEmail(value)
  }

  const onChangePasswordText = (value: string) => {
    setPassword(value)
  }

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const { account_name } = router.query
    if (account_name == null || typeof account_name === 'object') {
      return
    }
    try {
      await login(data.email, data.password, account_name)
      let staffInfo: StaffDetail
      let companyInfo: CompanyDetail
      await Promise.all([
        (async () => {
          staffInfo = await fetchUser()
          dispatch(setStaff(staffInfo))
        })(),
        async () => {
          companyInfo = await fetchCompany(staffInfo.companyId)
          dispatch(setCompany(companyInfo))
        },
      ])
      toast.success('ログインに成功しました')
    } catch (err) {
      if (typeof err === 'string') {
        toast.error(err)
      }
      return
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mt: 2, width: 500 }}>
          <InputText
            value={email}
            hookFormRegister={register('email', {
              onChange(event) {
                onChangeEmailText(event.target.value)
              },
            })}
            type="text"
            placeholder="メールアドレス"
            sx={{
              mb: 2,
            }}
            error={'email' in errors}
            errorMessage={errors.email && errors.email.message}
          />
          <InputText
            value={password}
            type="password"
            placeholder="パスワード"
            hookFormRegister={register('password', {
              onChange(event) {
                onChangePasswordText(event.target.value)
              },
            })}
            error={'password' in errors}
            errorMessage={errors.password && errors.password.message}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                パスワードを忘れた方
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Login
