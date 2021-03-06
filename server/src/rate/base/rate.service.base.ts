/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Rate, Project } from "@prisma/client";

export class RateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RateFindManyArgs>
  ): Promise<number> {
    return this.prisma.rate.count(args);
  }

  async findMany<T extends Prisma.RateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RateFindManyArgs>
  ): Promise<Rate[]> {
    return this.prisma.rate.findMany(args);
  }
  async findOne<T extends Prisma.RateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RateFindUniqueArgs>
  ): Promise<Rate | null> {
    return this.prisma.rate.findUnique(args);
  }
  async create<T extends Prisma.RateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RateCreateArgs>
  ): Promise<Rate> {
    return this.prisma.rate.create<T>(args);
  }
  async update<T extends Prisma.RateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RateUpdateArgs>
  ): Promise<Rate> {
    return this.prisma.rate.update<T>(args);
  }
  async delete<T extends Prisma.RateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RateDeleteArgs>
  ): Promise<Rate> {
    return this.prisma.rate.delete(args);
  }

  async findProjects(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<Project[]> {
    return this.prisma.rate
      .findUnique({
        where: { id: parentId },
      })
      .projects(args);
  }
}
