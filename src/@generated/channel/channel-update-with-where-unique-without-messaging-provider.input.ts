import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutMessagingProviderInput } from './channel-update-without-messaging-provider.input';

@InputType()
export class ChannelUpdateWithWhereUniqueWithoutMessagingProviderInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutMessagingProviderInput, {nullable:false})
    data!: ChannelUpdateWithoutMessagingProviderInput;
}
