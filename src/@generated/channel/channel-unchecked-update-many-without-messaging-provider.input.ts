import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChannelCreateWithoutMessagingProviderInput } from './channel-create-without-messaging-provider.input';
import { ChannelCreateOrConnectWithoutMessagingProviderInput } from './channel-create-or-connect-without-messaging-provider.input';
import { ChannelUpsertWithWhereUniqueWithoutMessagingProviderInput } from './channel-upsert-with-where-unique-without-messaging-provider.input';
import { ChannelWhereUniqueInput } from './channel-where-unique.input';
import { ChannelUpdateWithWhereUniqueWithoutMessagingProviderInput } from './channel-update-with-where-unique-without-messaging-provider.input';
import { ChannelUpdateManyWithWhereWithoutMessagingProviderInput } from './channel-update-many-with-where-without-messaging-provider.input';
import { ChannelScalarWhereInput } from './channel-scalar-where.input';

@InputType()
export class ChannelUncheckedUpdateManyWithoutMessagingProviderInput {

    @Field(() => [ChannelCreateWithoutMessagingProviderInput], {nullable:true})
    create?: Array<ChannelCreateWithoutMessagingProviderInput>;

    @Field(() => [ChannelCreateOrConnectWithoutMessagingProviderInput], {nullable:true})
    connectOrCreate?: Array<ChannelCreateOrConnectWithoutMessagingProviderInput>;

    @Field(() => [ChannelUpsertWithWhereUniqueWithoutMessagingProviderInput], {nullable:true})
    upsert?: Array<ChannelUpsertWithWhereUniqueWithoutMessagingProviderInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    set?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    disconnect?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    delete?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelWhereUniqueInput], {nullable:true})
    connect?: Array<ChannelWhereUniqueInput>;

    @Field(() => [ChannelUpdateWithWhereUniqueWithoutMessagingProviderInput], {nullable:true})
    update?: Array<ChannelUpdateWithWhereUniqueWithoutMessagingProviderInput>;

    @Field(() => [ChannelUpdateManyWithWhereWithoutMessagingProviderInput], {nullable:true})
    updateMany?: Array<ChannelUpdateManyWithWhereWithoutMessagingProviderInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    deleteMany?: Array<ChannelScalarWhereInput>;
}
