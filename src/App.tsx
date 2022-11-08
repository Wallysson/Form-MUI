import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Input } from './components/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Container, Tooltip, Typography } from '@mui/material'
import { ToastContainer, Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface DataProps {
  nome: string
  cpf: number
  email: string
  endereco: string
  numEndereco: number
  bairro: string
  cidade: string
  cep: number
}

export function App() {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup.number().integer().positive().required(),
    email: yup.string().email().required(),
    endereco: yup.string().required(),
    numEndereco: yup.number().integer().positive().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    cep: yup.number().integer().positive().required()
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DataProps>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: DataProps) => {
    console.log(data)
    toast.success('Formulário salvo.', {
      icon: '✍🏼',
      position: 'top-right',
      theme: 'light',
      autoClose: 1200,
      progressStyle: {
        background: '#008D48'
      }
    })
  }

  return (
    <Container component="main" maxWidth="sm">
      <ToastContainer />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h3">
          Formulário MUI
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: '100%' }}
        >
          <Tooltip title={errors.nome ? '❌ Nome obrigatório' : ''}>
            <Box>
              <Input
                label="Nome"
                id="nome"
                type="text"
                inputProps={register('nome')}
                color={errors.nome ? 'error' : 'primary'}
                error={Boolean(errors.nome)}
              />
            </Box>
          </Tooltip>
          <Tooltip title={errors.cpf ? '❌ CPF obrigatório' : ''}>
            <Box>
              <Input
                label="CPF"
                id="cpf"
                type="number"
                inputProps={register('cpf')}
                color={errors.cpf ? 'error' : 'primary'}
                // helperText={errors.cpf ? 'CPF obrigatório' : ''}
                error={Boolean(errors.cpf)}
              />
            </Box>
          </Tooltip>
          <Tooltip title={errors.email ? '❌ Email obrigatório' : ''}>
            <Box>
              <Input
                label="Email"
                id="email"
                type="email"
                inputProps={register('email')}
                color={errors.email ? 'error' : 'primary'}
                error={Boolean(errors.email)}
              />
            </Box>
          </Tooltip>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              width: '100%'
            }}
          >
            <Tooltip title={errors.endereco ? '❌ Endereço obrigatório' : ''}>
              <Box sx={{ width: '100%' }}>
                <Input
                  label="Endereço"
                  id="endereco"
                  inputProps={register('endereco')}
                  color={errors.endereco ? 'error' : 'primary'}
                  error={Boolean(errors.endereco)}
                />
              </Box>
            </Tooltip>
            <Tooltip title={errors.numEndereco ? '❌ Obrigatório.' : ''}>
              <Box>
                <Input
                  label="Nº"
                  id="n-endereco"
                  type="number"
                  sx={{ width: '100%' }}
                  inputProps={register('numEndereco')}
                  color={errors.numEndereco ? 'error' : 'primary'}
                  error={Boolean(errors.numEndereco)}
                />
              </Box>
            </Tooltip>
          </Box>
          <Tooltip title={errors.bairro ? '❌ Bairro obrigatório' : ''}>
            <Box>
              <Input
                label="Bairro"
                id="bairro"
                inputProps={register('bairro')}
                color={errors.bairro ? 'error' : 'primary'}
                error={Boolean(errors.bairro)}
              />
            </Box>
          </Tooltip>
          <Tooltip title={errors.cidade ? '❌ Cidade obrigatório' : ''}>
            <Box>
              <Input
                label="Cidade"
                id="cidade"
                inputProps={register('cidade')}
                color={errors.cidade ? 'error' : 'primary'}
                error={Boolean(errors.cidade)}
              />
            </Box>
          </Tooltip>
          <Tooltip title={errors.cep ? '❌ Cep obrigatório' : ''}>
            <Box>
              <Input
                label="CEP"
                id="cep"
                type="number"
                inputProps={register('cep')}
                color={errors.cep ? 'error' : 'primary'}
                error={Boolean(errors.cep)}
              />
            </Box>
          </Tooltip>

          <Button
            variant="contained"
            fullWidth
            type="submit"
            size="large"
            sx={{ mt: 3, mb: 3 }}
          >
            Salvar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
