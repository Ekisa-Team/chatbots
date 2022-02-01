import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppUpdateInput } from './app-update.input';
import { AppWhereUniqueInput } from './app-where-unique.input';

@ArgsType()
export class UpdateOneAppArgs {

    @Field(() => AppUpdateInput, {nullable:false})
    data!: AppUpdateInput;

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;
}
