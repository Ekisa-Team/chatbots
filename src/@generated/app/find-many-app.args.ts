import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';
import { AppOrderByWithRelationInput } from './app-order-by-with-relation.input';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppScalarFieldEnum } from './app-scalar-field.enum';

@ArgsType()
export class FindManyAppArgs {

    @Field(() => AppWhereInput, {nullable:true})
    where?: AppWhereInput;

    @Field(() => [AppOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppOrderByWithRelationInput>;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    cursor?: AppWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AppScalarFieldEnum>;
}
