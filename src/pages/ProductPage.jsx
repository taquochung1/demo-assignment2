import React from 'react'

const ProductPage = ({ products }) => {
    return <table className="rable table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Tên</th>
                <th>Ảnh</th>
                <th>Giá</th>
                <th>Giá</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><img src="{product.img}" alt="" /></td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <div className="flex tw-space-x-3">
                            <button className="btn btn-danger btn-sm">Xóa</button>
                            <button className="btn btn-primary btn-sm">Cập nhật</button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>

    </table>
}

export default ProductPage