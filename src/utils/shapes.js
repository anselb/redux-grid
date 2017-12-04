export const gridDefault = () => {
  const rows = 20
  const cols = 20
  const array = []
  for (let row = 0; row < rows; row++) {
    array.push([])
    for (let col = 0; col < cols; col++) {
      array[row].push(0)
    }
  }
  return array
}
