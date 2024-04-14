import { ProductList } from "./data"

export default function ProductPage() {
  return (
    <div>
      <div>
        {ProductList.map((value,index) => (
          <div>{value.name}</div>
        ))}
      </div>
    </div>
  )
}
