export default function generateID() {
  let timestamp = new Date().getTime().toString(16);
  let randomPart = Math.random().toString(16).substring(2, 6);
  let id = timestamp + "-" + randomPart;
  return id;
}
