import instance from "./config";
export const getProducts = async () => {
    try {
        const { data } = await instance.get("/products");
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const getProductById = async (id) => {
    try {
        const { data } = await instance.get(`/product/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const removeProductById = async (id) => {
    try {
        const { data } = await instance.delete(`/product/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const addProduct = async (product) => {
    try {
        const { data } = await instance.post("/product",product);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const updateProduct = async (product) => {
    try {
        const { data } = await instance.put(`/product/${product.id}`,product);
        return data;
    } catch (error) {
        console.log(error);
    }
};