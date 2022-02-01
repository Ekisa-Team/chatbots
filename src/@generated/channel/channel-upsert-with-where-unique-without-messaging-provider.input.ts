import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithoutMessagingProviderInput } from './channel-update-without-messaging-provider.input';
import { ChannelCreateWithoutMessagingProviderInput } from './channel-create-without-messaging-provider.input';

@InputType()
export class ChannelUpsertWithWhereUniqueWithoutMessagingProviderInput {

    @Field(() => ChannelWhereUniqueInput, {nullable:false})
    where!: ChannelWhereUniqueInput;

    @Field(() => ChannelUpdateWithoutMessagingProviderInput, {nullable:false})
    update!: ChannelUpdateWithoutMessagingProviderInput;

    @Field(() => ChannelCreateWithoutMessagingProviderInput, {nullable:false})
    create!: ChannelCreateWithoutMessagingProviderInput;
}
