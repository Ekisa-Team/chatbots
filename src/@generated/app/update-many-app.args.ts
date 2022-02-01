import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppUpdateManyMutationInput } from './app-update-many-mutation.input';
import { AppWhereInput } from './app-where.input';

@ArgsType()
export class UpdateManyAppArgs {

    @Field(() => AppUpdateManyMutationInput, {nullable:false})
    data!: AppUpdateManyMutationInput;

    @Field(() => AppWhereInput, {nullable:true})
    where?: AppWhereInput;
}
