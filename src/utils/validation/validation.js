export const required = value => (value ? undefined : 'Required')

export const maxLengthCreator = maxLength => value => {
    if (value&&value.length > maxLength) return "Max length error"
    return undefined
}
