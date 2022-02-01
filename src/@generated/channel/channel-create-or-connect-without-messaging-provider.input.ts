import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelCreateWithoutMessagingProviderInput } from './channel-create-without-messaging-provider.input';

@InputType()
export class ChannelCreateOrConnectWithoutMessagingProviderInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelCreateWithoutMessagingProviderInput, {nullable:false})
    create!: ChannelCreateWithoutMessagingProviderInput;
}
