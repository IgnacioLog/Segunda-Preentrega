app.get('/api/products', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;
        const sort = req.query.sort;
        const query = req.query.query;

        // Obtener productos con filtros, paginación y ordenamientos
        const products = await productManager.getFilteredProducts(query, limit, page, sort);

        // Calcular metadatos de paginación
        const totalPages = Math.ceil(products.length / limit);
        const hasPrevPage = page > 1;
        const hasNextPage = page < totalPages;
        const prevPage = hasPrevPage ? page - 1 : null;
        const nextPage = hasNextPage ? page + 1 : null;

        res.json({
            status: 'success',
            payload: products,
            totalPages: totalPages,
            prevPage: prevPage,
            nextPage: nextPage,
            page: page,
            hasPrevPage: hasPrevPage,
            hasNextPage: hasNextPage,
            prevLink: hasPrevPage ? `/api/products?page=${prevPage}` : null,
            nextLink: hasNextPage ? `/api/products?page=${nextPage}` : null
        });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error.message });
    }
});
