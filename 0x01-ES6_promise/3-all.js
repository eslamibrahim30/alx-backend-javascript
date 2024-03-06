import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(
    () => {
      console.log('body firstName lastName');
    },
    () => {
      console.log('Signup system offline');
    },
  );
}
