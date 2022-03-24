import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RateResolverBase } from "./base/rate.resolver.base";
import { Rate } from "./base/Rate";
import { RateService } from "./rate.service";

@graphql.Resolver(() => Rate)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RateResolver extends RateResolverBase {
  constructor(
    protected readonly service: RateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
