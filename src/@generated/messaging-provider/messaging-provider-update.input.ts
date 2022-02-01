import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ChannelUpdateManyWithoutMessagingProviderInput } from '../channel/channel-update-many-without-messaging-provider.input';

@InputType()
export class MessagingProviderUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ChannelUpdateManyWithoutMessagingProviderInput, {nullable:true})
    channels?: ChannelUpdateManyWithoutMessagingProviderInput;
}
