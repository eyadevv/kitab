import { PrismaClient } from "@prisma/client"

const PRISMA = new PrismaClient()

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
      id: 1,
      name: "James Clear",
      image: "Null",
      country: "United States",
      description: "Author of the best selling books and #1 In the world",
    },
    {
      id: 2,
      name: "Eyad Faisal",
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
      authorId: 1,
      categoryId: 1,
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
      authorId: 2,
      categoryId: 1,
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
      authorId: 1,
      categoryId: 1,
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
      authorId: 2,
      categoryId: 1,
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
      authorId: 2,
      categoryId: 1,
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
      authorId: 1,
      categoryId: 1,
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
      authorId: 2,
      categoryId: 1,
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
      authorId: 1,
      categoryId: 1,
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
      authorId: 2,
      categoryId: 1,
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
      authorId: 2,
      categoryId: 1,
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
      name: "Self help",
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
}

async function main() {
  try {
    await PRISMA.admin
      .createMany({
        skipDuplicates: true,
        data: data.admins,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.user
      .createMany({
        skipDuplicates: true,
        data: data.users,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.library
      .createMany({
        skipDuplicates: true,
        data: data.library,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.author
      .createMany({
        skipDuplicates: true,
        data: data.authors,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.category
      .createMany({
        skipDuplicates: true,
        data: data.categories,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.book
      .createMany({
        skipDuplicates: true,
        data: data.books,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.section
      .createMany({
        skipDuplicates: true,
        data: data.sections,
      })
      .then((res) => {
        console.log(res)
      })
    await PRISMA.publisher
      .createMany({
        skipDuplicates: true,
        data: data.publishers,
      })
      .then((res) => {
        console.log(res)
      })
  } catch (error) {
    console.error(error)
  }
}

main()
