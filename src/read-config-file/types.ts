export interface Variable {
  name: string
  prompt: string
  optional?: boolean
}

export interface Config {
  variables: Variable[]
}
