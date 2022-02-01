import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ChannelCreateNestedManyWithoutMessagingProviderInput } from '../channel/channel-create-nested-many-without-messaging-provider.input';

@InputType()
export class MessagingProviderCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => ChannelCreateNestedManyWithoutMessagingProviderInput, {nullable:true})
    channels?: ChannelCreateNestedManyWithoutMessagingProviderInput;
}
