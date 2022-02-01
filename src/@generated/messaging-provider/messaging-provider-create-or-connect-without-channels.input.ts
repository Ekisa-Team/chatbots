import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';
import { MessagingProviderCreateWithoutChannelsInput } from './messaging-provider-create-without-channels.input';

@InputType()
export class MessagingProviderCreateOrConnectWithoutChannelsInput {

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:false})
    where!: MessagingProviderWhereUniqueInput;

    @Field(() => MessagingProviderCreateWithoutChannelsInput, {nullable:false})
    create!: MessagingProviderCreateWithoutChannelsInput;
}
