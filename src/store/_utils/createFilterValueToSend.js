export default function (field, value) {
  if(!value) {
    return null
  }

  return { [field]: value }
}
