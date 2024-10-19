function mapBookToSchema(bookData) {
  return {
    name: bookData.title,
    slug: bookData.title.toLowerCase().replace(/\s+/g, "-"), // Generating slug from the title
    cover: bookData.thumbnailUrl,
    language: "English", // Assuming language is English, as it's not in the dataset
    downloads: 0, // Setting default for downloads
    pages: bookData.pageCount || 0, // Default to 0 if not provided
    type: "Unknown", // You might want to update this based on your needs
    size: "N/A", // No data provided for size
    rate: bookData.rating || 0, // Default rating to 0 if not provided
    price: "N/A", // No price in the dataset
    description:
      bookData.shortDescription ||
      bookData.longDescription ||
      "No description available.",
    authorName: bookData.authors ? bookData.authors[0] : "Unknown", // Take the first author, if available
    categoryName: bookData.categories ? bookData.categories[0] : "unclassified", // Take the first category, if available
    publisherId: null, // No publisher data provided, keeping it null
  };
}
