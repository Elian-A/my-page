import { createTRPCRouter, publicProcedure } from "../trpc";

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.project.findMany({ include: { tags: true } })
  ),
});
