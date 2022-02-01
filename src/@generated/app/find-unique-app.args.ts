import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereUniqueInput } from './app-where-unique.input';

@ArgsType()
export class FindUniqueAppArgs {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    where!: AppWhereUniqueInput;
}
