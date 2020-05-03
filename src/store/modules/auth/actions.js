export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    email,
    password,
  };
}
