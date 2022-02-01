import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { AppCreateInput } from './app-create.input';
import { AppUpdateInput } from './app-update.input';

@ArgsType()
export class UpsertOneAppArgs {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;

    @Field(() => AppCreateInput, {nullable:false})
    create!: AppCreateInput;

    @Field(() => AppUpdateInput, {nullable:false})
    update!: AppUpdateInput;
}
