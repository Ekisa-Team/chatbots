import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppWhereInput } from './app-where.input';

@ArgsType()
export class DeleteManyAppArgs {

    @Field(() => AppWhereInput, {nullable:true})
    where?: AppWhereInput;
}
