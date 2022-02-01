import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderUpdateManyMutationInput } from './messaging-provider-update-many-mutation.input';
import { MessagingProviderWhereInput } from './messaging-provider-where.input';

@ArgsType()
export class UpdateManyMessagingProviderArgs {

    @Field(() => MessagingProviderUpdateManyMutationInput, {nullable:false})
    data!: MessagingProviderUpdateManyMutationInput;

    @Field(() => MessagingProviderWhereInput, {nullable:true})
    where?: MessagingProviderWhereInput;
}
