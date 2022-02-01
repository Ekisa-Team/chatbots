import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingProviderCreateWithoutChannelsInput } from './messaging-provider-create-without-channels.input';
import { MessagingProviderCreateOrConnectWithoutChannelsInput } from './messaging-provider-create-or-connect-without-channels.input';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';

@InputType()
export class MessagingProviderCreateNestedOneWithoutChannelsInput {

    @Field(() => MessagingProviderCreateWithoutChannelsInput, {nullable:true})
    create?: MessagingProviderCreateWithoutChannelsInput;

    @Field(() => MessagingProviderCreateOrConnectWithoutChannelsInput, {nullable:true})
    connectOrCreate?: MessagingProviderCreateOrConnectWithoutChannelsInput;

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:true})
    connect?: MessagingProviderWhereUniqueInput;
}
