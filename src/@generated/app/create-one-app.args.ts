import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppCreateInput } from './app-create.input';

@ArgsType()
export class CreateOneAppArgs {

    @Field(() => AppCreateInput, {nullable:false})
    data!: AppCreateInput;
}
