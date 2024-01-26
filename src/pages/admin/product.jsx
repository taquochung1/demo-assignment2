import React from 'react'

const ProductPage = ({ products }) => {
  return (
    <>
      <h2>Quản lý sản phẩm</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src="{product.image}" alt="{product.name}" /></td>
                <td><h4>{product.name}</h4></td>
                <td><span>{product.price}</span></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn btn-danger'>Xóa</button>
                    <button className='btn btn-primary ml-3'>Cập nhật</button>
                  </div>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductPage;