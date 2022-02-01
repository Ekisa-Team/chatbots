import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderUpdateInput } from './messaging-provider-update.input';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';

@ArgsType()
export class UpdateOneMessagingProviderArgs {

    @Field(() => MessagingProviderUpdateInput, {nullable:false})
    data!: MessagingProviderUpdateInput;

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:false})
    where!: MessagingProviderWhereUniqueInput;
}
