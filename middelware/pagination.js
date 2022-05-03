pagination = (req, res, next) => {
    let { page, size } = req.query;

    console.log("Page is ", page);
    console.log("size is ", size);

    if (!page) {
        console.log("Setting the page value");
        page = 1;
    }
    if (!size) {
        console.log("Setting the Size value");
        size = Number.MAX_SAFE_INTEGER;
    }

    console.log("=====================================");
    console.log(page);
    console.log(size);
    console.log("=====================================");

    const limit = parseInt(size);
    const skip = (page - 1) * size;

    req.pagination = {};
    req.pagination.limit = limit;
    req.pagination.page = page;
    req.pagination.skip = skip;
    req.pagination.size = size;

    next();

}

module.exports = {
    pagination,
}