import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotUpdateWithoutAppInput } from './chatbot-update-without-app.input';

@InputType()
export class ChatbotUpdateWithWhereUniqueWithoutAppInput {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;

    @Field(() => ChatbotUpdateWithoutAppInput, {nullable:false})
    data!: ChatbotUpdateWithoutAppInput;
}
