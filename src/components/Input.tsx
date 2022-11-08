import TextField, { StandardTextFieldProps } from '@mui/material/TextField'

interface InputProps extends StandardTextFieldProps {
  color?: 'primary' | 'error'
  label: string
  id: string
  type?: 'text' | 'number' | 'email'
}

export function Input({
  color = 'primary',
  label,
  id,
  type = 'text',
  ...rest
}: InputProps) {
  return (
    <TextField
      margin="normal"
      color={color}
      label={label}
      id={id}
      type={type}
      autoFocus
      fullWidth
      // required
      {...rest}
    />
  )
}
