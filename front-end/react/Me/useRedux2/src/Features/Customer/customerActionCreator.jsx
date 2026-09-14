
export function createAccount(name, id) {
  return { type: `customer/createAccount`, payload: {name, id} };
}
export function updateName(name) {
  return { type: `customer/updateName`, payload: name };
}