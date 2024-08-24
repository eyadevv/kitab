import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const seedcm = `  // "prisma": {
  //   "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  // }`
async function main() {
  // Seed Admins
  const admin1 = await prisma.admin.create({
    data: {
      username: "admin1",
      email: "admin1@example.com",
      password: "password123",
    },
  });

  const admin2 = await prisma.admin.create({
    data: {
      username: "admin2",
      email: "admin2@example.com",
      password: "password123",
    },
  });

  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
      country: "USA",
      gender: "Male",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: "jane_doe",
      email: "jane@example.com",
      password: "password123",
      country: "Canada",
      gender: "Female",
    },
  });

  // Seed Authors
  const author1 = await prisma.author.create({
    data: {
      name: "J.K. Rowling",
      slug: "jk-rowling",
      image: "https://example.com/jk_rowling.jpg",
      country: "UK",
      description: "Author of the Harry Potter series.",
    },
  });

  const author2 = await prisma.author.create({
    data: {
      name: "George Orwell",
      slug: "george-orwell",
      image: "https://example.com/george_orwell.jpg",
      country: "UK",
      description: "Author of 1984 and Animal Farm.",
    },
  });

  // Seed Publishers
  const publisher1 = await prisma.publisher.create({
    data: {
      name: "Bloomsbury",
      location: "London, UK",
    },
  });

  const publisher2 = await prisma.publisher.create({
    data: {
      name: "Secker & Warburg",
      location: "London, UK",
    },
  });

  // Seed Categories
  const category1 = await prisma.category.create({
    data: {
      name: "Fantasy",
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: "Dystopian",
    },
  });

  // Seed Books
  const book1 = await prisma.book.create({
    data: {
      name: "Harry Potter and the Philosopher's Stone",
      slug: "harry-potter-philosopher-stone",
      cover: "https://example.com/hp_philosophers_stone.jpg",
      language: "English",
      downloads: 12000,
      pages: 320,
      type: "eBook",
      size: "2MB",
      rate: 4.9,
      price: "9.99",
      description: "The first book in the Harry Potter series.",
      authorName: author1.name,
      publisherId: publisher1.id,
      categoryName: category1.name,
    },
  });

  const book2 = await prisma.book.create({
    data: {
      name: "1984",
      slug: "1984",
      cover: "https://example.com/1984.jpg",
      language: "English",
      downloads: 9500,
      pages: 328,
      type: "eBook",
      size: "1.5MB",
      rate: 4.8,
      price: "8.99",
      description: "A dystopian novel set in a totalitarian society.",
      authorName: author2.name,
      publisherId: publisher2.id,
      categoryName: category2.name,
    },
  });

  // Seed Libraries
  const library1 = await prisma.library.create({
    data: {
      name: "John's Library",
      userId: user1.id,
      books: {
        connect: [{ id: book1.id }, { id: book2.id }],
      },
    },
  });

  const library2 = await prisma.library.create({
    data: {
      name: "Jane's Library",
      userId: user2.id,
      books: {
        connect: [{ id: book2.id }],
      },
    },
  });

  // Seed Reviews
  const review1 = await prisma.review.create({
    data: {
      comment: "Amazing book!",
      userId: user1.id,
      bookId: book1.id,
    },
  });

  const review2 = await prisma.review.create({
    data: {
      comment: "Very thought-provoking.",
      userId: user2.id,
      bookId: book2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
