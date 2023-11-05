import { PrismaClient } from "@prisma/client";

const PRISMA = new PrismaClient();

const data = {
  admins: [
    {
      username: "eyadevv",
      email: "eyadevv@gmail.com",
      password: "Aisha2000",
    },
    {
      username: "Kamel403",
      email: "kamel@gmail.com",
      password: "kamel12#2023",
    },
  ],
  users: [
    {
      username: "eyad12",
      email: "eyad12@gmail.com",
      password: "HashedPassword",
      country: "Sudan",
      gender: "Male",
    },
    {
      username: "eyad13",
      email: "eyad13@gmail.com",
      password: "HashedPassword",
      country: "Sudan",
      gender: "Male",
    },
  ],
  authors: [
    {
      name: "james clear",
      slug: "james-clear",
      image: "Null",
      country: "United States",
      description: "Author of the best selling books and #1 In the world",
    },
    {
      name: "eyad faisal",
      slug: "eyad-faisal",
      image: "Null",
      country: "United States",
      description: "Author of the best selling books and #1 In the world",
    },
    {
      // unkown
      name: "UNKNOWN",
      slug: "UNKNOWN",
      image: "Null",
      country: "United States",
      description: "Author of the best selling books and #1 In the world",
    },
  ],
  books: [
    {
      name: "atomic habits",
      slug: "atomic-habits",
      cover: "Null",
      language: "EN",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "The Now Habit",
      slug: "the-now-habit",
      cover: "Null",
      language: "EN",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "Jaleed",
      slug: "jalees",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "Majarayaat",
      slug: "majarayaat",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "knood",
      slug: "knood",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "maslakiyaat",
      slug: "maslakiyaat",
      cover: "Null",
      language: "EN",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "The Power of Now",
      slug: "the-power-of-now",
      cover: "Null",
      language: "EN",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "hyper focus",
      slug: "hyper-focus",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "the one ting",
      slug: "the-one-ting",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "Build",
      slug: "build",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "1",
      slug: "1",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "2",
      slug: "2",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "3",
      slug: "3",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "4",
      slug: "4",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "5",
      slug: "5",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "6",
      slug: "6",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "7",
      slug: "7",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "8",
      slug: "8",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "9",
      slug: "9",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "10",
      slug: "10",
      cover: "Null",
      language: "AR",
      downloads: 12000,
      pages: 300,
      type: "PDF",
      size: "12MB",
      rate: 4.5,
      price: "12$",
      description:
        "lorem lorem lorem lorem ipsum sum cat boss under my nigga ya boy whats up",
      authorName: "james clear",
      categoryName: "Self-help",
    },
    {
      name: "Book 1",
      slug: "book-1",
      cover: "book1.jpg",
      language: "English",
      downloads: 1000,
      pages: 200,
      type: "Fiction",
      size: "5 MB",
      rate: 4.5,
      price: "$9.99",
      description: "This is the description of Book 1.",
    },
    {
      name: "Book 2",
      slug: "book-2",
      cover: "book2.jpg",
      language: "Spanish",
      downloads: 500,
      pages: 150,
      type: "Romance",
      size: "3 MB",
      rate: 3.8,
      price: "$7.99",
      description: "This is the description of Book 2.",
    },
    {
      name: "Book 3",
      slug: "book-3",
      cover: "book3.jpg",
      language: "French",
      downloads: 800,
      pages: 180,
      type: "Mystery",
      size: "4 MB",
      rate: 4.2,
      price: "$8.99",
      description: "This is the description of Book 3.",
    },
    {
      name: "Book 4",
      slug: "book-4",
      cover: "book4.jpg",
      language: "German",
      downloads: 1200,
      pages: 300,
      type: "Fantasy",
      size: "6 MB",
      rate: 4.7,
      price: "$11.99",
      description: "This is the description of Book 4.",
    },

    {
      name: "Book 10",
      slug: "book-10",
      cover: "book1.jpg",
      language: "English",
      downloads: 1000,
      pages: 200,
      type: "Fiction",
      size: "5 MB",
      rate: 4.5,
      price: "$9.99",
      description: "This is the description of Book 1.",
    },
    {
      name: "Book 20",
      slug: "book-20",
      cover: "book2.jpg",
      language: "Spanish",
      downloads: 500,
      pages: 150,
      type: "Romance",
      size: "3 MB",
      rate: 3.8,
      price: "$7.99",
      description: "This is the description of Book 2.",
    },
    {
      name: "Book 30",
      slug: "book-30",
      cover: "book3.jpg",
      language: "French",
      downloads: 800,
      pages: 180,
      type: "Mystery",
      size: "4 MB",
      rate: 4.2,
      price: "$8.99",
      description: "This is the description of Book 3.",
    },
    {
      name: "Book 40",
      slug: "book-40",
      cover: "book4.jpg",
      language: "German",
      downloads: 1200,
      pages: 300,
      type: "Fantasy",
      size: "6 MB",
      rate: 4.7,
      price: "$11.99",
      description: "This is the description of Book 4.",
    },
  ],
  sections: [
    {
      name: "Start reading",
    },
    {
      name: "Trending",
    },
    {
      name: "best in you country",
    },
    {
      name: "on sale",
    },
  ],
  categories: [
    {
      name: "Self-help",
    },
    {
      name: "Money",
    },
    {
      name: "Education",
    },
    {
      name: "Fame",
    },
    {
      name: "programming",
    },
    {
      name: "unclassified",
    },
  ],
  publishers: [
    {
      name: "Jareer",
      location: "KSA",
    },
    {
      name: "Amazon",
      location: "KSA",
    },
    {
      name: "ZAD",
      location: "KSA",
    },
  ],
  library: [
    {
      id: 1,
      name: "my lib",
    },
    {
      id: 2,
      name: "your lib",
    },
    {
      id: 3,
      name: "our",
    },
  ],
};

async function main() {
  try {
    await PRISMA.admin
      .createMany({
        skipDuplicates: true,
        data: data.admins,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.user
      .createMany({
        skipDuplicates: true,
        data: data.users,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.library
      .createMany({
        skipDuplicates: true,
        data: data.library,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.author
      .createMany({
        skipDuplicates: true,
        data: data.authors,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.category
      .createMany({
        skipDuplicates: true,
        data: data.categories,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.book
      .createMany({
        skipDuplicates: true,
        data: data.books,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.section
      .createMany({
        skipDuplicates: true,
        data: data.sections,
      })
      .then((res) => {
        console.log(res);
      });
    await PRISMA.publisher
      .createMany({
        skipDuplicates: true,
        data: data.publishers,
      })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.error(error);
  }
}

main();
