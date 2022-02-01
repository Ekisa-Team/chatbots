import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ChannelUncheckedCreateNestedManyWithoutMessagingProviderInput } from '../channel/channel-unchecked-create-nested-many-without-messaging-provider.input';

@InputType()
export class MessagingProviderUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => ChannelUncheckedCreateNestedManyWithoutMessagingProviderInput, {nullable:true})
    channels?: ChannelUncheckedCreateNestedManyWithoutMessagingProviderInput;
}
