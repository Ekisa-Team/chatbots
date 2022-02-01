import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ChannelUncheckedUpdateManyWithoutMessagingProviderInput } from '../channel/channel-unchecked-update-many-without-messaging-provider.input';

@InputType()
export class MessagingProviderUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ChannelUncheckedUpdateManyWithoutMessagingProviderInput, {nullable:true})
    channels?: ChannelUncheckedUpdateManyWithoutMessagingProviderInput;
}
