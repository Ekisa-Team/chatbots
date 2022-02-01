import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';
import { MessagingProviderCreateInput } from './messaging-provider-create.input';
import { MessagingProviderUpdateInput } from './messaging-provider-update.input';

@ArgsType()
export class UpsertOneMessagingProviderArgs {

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:false})
    where!: MessagingProviderWhereUniqueInput;

    @Field(() => MessagingProviderCreateInput, {nullable:false})
    create!: MessagingProviderCreateInput;

    @Field(() => MessagingProviderUpdateInput, {nullable:false})
    update!: MessagingProviderUpdateInput;
}
