/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ProjectListRelationFilter } from "../../project/base/ProjectListRelationFilter";
@InputType()
class RateWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProjectListRelationFilter)
  @IsOptional()
  @Field(() => ProjectListRelationFilter, {
    nullable: true,
  })
  projects?: ProjectListRelationFilter;
}
export { RateWhereInput };
