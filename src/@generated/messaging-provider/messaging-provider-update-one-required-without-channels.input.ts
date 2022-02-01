import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingProviderCreateWithoutChannelsInput } from './messaging-provider-create-without-channels.input';
import { MessagingProviderCreateOrConnectWithoutChannelsInput } from './messaging-provider-create-or-connect-without-channels.input';
import { MessagingProviderUpsertWithoutChannelsInput } from './messaging-provider-upsert-without-channels.input';
import { MessagingProviderWhereUniqueInput } from './messaging-provider-where-unique.input';
import { MessagingProviderUpdateWithoutChannelsInput } from './messaging-provider-update-without-channels.input';

@InputType()
export class MessagingProviderUpdateOneRequiredWithoutChannelsInput {

    @Field(() => MessagingProviderCreateWithoutChannelsInput, {nullable:true})
    create?: MessagingProviderCreateWithoutChannelsInput;

    @Field(() => MessagingProviderCreateOrConnectWithoutChannelsInput, {nullable:true})
    connectOrCreate?: MessagingProviderCreateOrConnectWithoutChannelsInput;

    @Field(() => MessagingProviderUpsertWithoutChannelsInput, {nullable:true})
    upsert?: MessagingProviderUpsertWithoutChannelsInput;

    @Field(() => MessagingProviderWhereUniqueInput, {nullable:true})
    connect?: MessagingProviderWhereUniqueInput;

    @Field(() => MessagingProviderUpdateWithoutChannelsInput, {nullable:true})
    update?: MessagingProviderUpdateWithoutChannelsInput;
}
