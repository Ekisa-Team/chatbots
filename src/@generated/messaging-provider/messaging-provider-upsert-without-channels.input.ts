import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingProviderUpdateWithoutChannelsInput } from './messaging-provider-update-without-channels.input';
import { MessagingProviderCreateWithoutChannelsInput } from './messaging-provider-create-without-channels.input';

@InputType()
export class MessagingProviderUpsertWithoutChannelsInput {

    @Field(() => MessagingProviderUpdateWithoutChannelsInput, {nullable:false})
    update!: MessagingProviderUpdateWithoutChannelsInput;

    @Field(() => MessagingProviderCreateWithoutChannelsInput, {nullable:false})
    create!: MessagingProviderCreateWithoutChannelsInput;
}
