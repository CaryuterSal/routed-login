import bcrypt from 'bcryptjs'

function encode(rawPassword){
  return bcrypt.hashSync(rawPassword)
}

function matches(rawPassword, encodedPassword){
    return bcrypt.compareSync(rawPassword, encodedPassword)
}


export {encode, matches}