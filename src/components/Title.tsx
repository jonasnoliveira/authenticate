interface titleProps {
  title: string;
}

export function Title(props: titleProps){
  return (
    <span className="login-form-title">{props.title}</span>
  )
}