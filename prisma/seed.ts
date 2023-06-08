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
      title: "atomic habits",
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
      title: "The Now Habit",
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
      title: "Jaleed",
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
      title: "Majarayaat",
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
      title: "knood",
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
  ],
  sections: [
    {
      title: "Start reading",
    },
    {
      title: "Trending",
    },
    {
      title: "best in you country",
    },
    {
      title: "on sale",
    },
  ],
  categories: [
    {
      title: "Self help",
    },
    {
      title: "Money",
    },
    {
      title: "Education",
    },
    {
      title: "Fame",
    },
    {
      title: "programming",
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
