import { ProductList } from "./data"

export default function ProductPage() {
  return (
    <>
    <div>
      <div>
        {ProductList.map((value,index) => (
          <div>{value.name}
          {value.price}
          </div>
          
        ))}
      </div>
    </div>
    </>
  )
}
