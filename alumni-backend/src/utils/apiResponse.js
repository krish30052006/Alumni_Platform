/**
 * Standardized API Response
 * @param {Object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {boolean} success - Success status
 * @param {string} message - Response message
 * @param {*} data - Response data
 * @param {Object} meta - Meta information (pagination, etc.)
 */
export const apiResponse = (res, statusCode = 200, success = true, message = '', data = null, meta = null) => {
  const response = {
    success,
    message,
    data,
  };

  if (meta) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};

/**
 * Pagination Meta Data
 * @param {number} total - Total number of items
 * @param {number} limit - Items per page
 * @param {number} page - Current page
 * @param {number} pages - Total pages
 */
export const paginationMeta = (total, limit, page, pages) => ({
  pagination: {
    total,
    limit,
    page,
    pages,
  },
}); 