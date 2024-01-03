import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData = [
  {
    userName: "admin",
    password: "adminpassword",
  },
  {
    userName: "tester",
    password: "testerpassword",
  },
];

const employeeData = [
  {
    email: "employeeemail@company.com",
    firstName: "firstName",
    lastName: "lastName",
    driverLicense: "44456765WY",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  for (const e of employeeData) {
    const employee = await prisma.employee.create({
      data: e,
    });
    console.log(`Created employee with id: ${employee.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
