import { scrypt } from 'crypto';
import { UserInterface } from '../../src/users/interfaces/user.interface';

async function hash(password: string) {
  return new Promise((resolve, reject): any => {
    // generate random 16 bytes long salt
    const salt = 'wdwdw';
    console.log(password + 'PWD');
    scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString('base64'));
    });
  });
}
const EncryptedUserPassword = async ({
  name,
  last_name,
  _password,
}: UserInterface): Promise<UserInterface> => {
  const hashedPwd = await hash(_password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name,
        last_name,
        _password: hashedPwd,
      });
    }, 1000);
  });
};

export { EncryptedUserPassword };
