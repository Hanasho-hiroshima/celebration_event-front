import { FC, useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
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
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  })

  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { login } = useMutateStaff()
  const { fetchUser } = useQueryStaff()
  const { fetchCompany } = useQueryCompany()
  const router = useRouter()

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const { account_name } = router.query
    if (account_name == null || typeof account_name === 'object') {
      return
    }
    try {
      setLoading(true)
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
    } finally {
      setLoading(false)
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
          <Controller
            name="email"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <InputText
                value={field.value}
                type="text"
                placeholder="メールアドレス"
                sx={{
                  mb: 2,
                }}
                onChange={(e) => field.onChange(e)}
                error={'email' in errors}
                errorMessage={errors.email && errors.email.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <InputText
                value={field.value}
                type="password"
                placeholder="パスワード"
                onChange={(e) => field.onChange(e)}
                error={'password' in errors}
                errorMessage={errors.password && errors.password.message}
              />
            )}
          />
          <LoadingButton
            type="submit"
            loading={loading}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
            ログイン
          </LoadingButton>
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
