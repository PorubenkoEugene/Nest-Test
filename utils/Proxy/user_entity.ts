import { randomBytes, scrypt } from 'crypto';

async function hash(password: string) {
  return new Promise((resolve, reject) => {
    // generate random 16 bytes long salt
    const salt = 'wdwdw';
    console.log(password+'PWD')
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('base64'));
    });
  });
}
const EncryptedUserPassword = async ({ name, last_name, _password }) => {
  const hashedPwd = await hash(_password);
  return {
    name,
    last_name,
    _password: hashedPwd,
  };
};

export { EncryptedUserPassword };
