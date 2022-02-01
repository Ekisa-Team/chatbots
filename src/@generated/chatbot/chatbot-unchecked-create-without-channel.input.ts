import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TemplateMessageUncheckedCreateNestedManyWithoutChatbotInput } from '../template-message/template-message-unchecked-create-nested-many-without-chatbot.input';

@InputType()
export class ChatbotUncheckedCreateWithoutChannelInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    accessKey!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    appId!: number;

    @Field(() => TemplateMessageUncheckedCreateNestedManyWithoutChatbotInput, {nullable:true})
    templateMessages?: TemplateMessageUncheckedCreateNestedManyWithoutChatbotInput;
}
