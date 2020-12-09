const isDev = process.env.NODE_ENV === 'development'
const doNothing = () => void 0

const Logger = {
  log: isDev ? console.log : doNothing,
  error: isDev ? console.error : doNothing,
  info: isDev ? console.info : doNothing,
  warn: isDev ? console.warn : doNothing
}

export default Logger
