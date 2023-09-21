export default function Item(props) {
  return (
    <li>
    Name: {props.name}, Quantity: {props.quantity}, Category: {props.category}
</li>
  )
}