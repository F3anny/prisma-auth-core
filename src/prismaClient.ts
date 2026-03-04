import { PrismaClient } from "@prisma/client";  // ✅ named import

const prisma = new PrismaClient();              // ✅ use 'new'

export default prisma;