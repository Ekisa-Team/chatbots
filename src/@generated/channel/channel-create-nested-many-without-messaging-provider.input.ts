import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutMessagingProviderInput } from './channel-create-without-messaging-provider.input';
import { ChannelCreateOrConnectWithoutMessagingProviderInput } from './channel-create-or-connect-without-messaging-provider.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';

@InputType()
export class ChannelCreateNestedManyWithoutMessagingProviderInput {

    @Field(() => [ChannelCreateWithoutMessagingProviderInput], {nullable:true})
    create?: Array<ChannelCreateWithoutMessagingProviderInput>;

    @Field(() => [ChannelCreateOrConnectWithoutMessagingProviderInput], {nullable:true})
    connectOrCreate?: Array<ChannelCreateOrConnectWithoutMessagingProviderInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    connect?: Array<ChannelWhereUniqueInput>;
}
