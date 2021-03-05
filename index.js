function jsonToCssVariables(json, options) {
  options = options || {}

  const offset = options.offset === undefined ? 0 : options.offset

  let count = 0
  let output = `${options.element ? options.element : ':host'} {${options.pretty ? '\n' : ''}`

  for (let key in json) {
    if (count >= offset) {
      let value = json[key]

      output += `${options.pretty ? '  ' : ''}--${key}: ${value};${options.pretty ? '\n' : ''}`
    }

    count++
  }

  output += '}'

  return output
}

module.exports = jsonToCssVariables
