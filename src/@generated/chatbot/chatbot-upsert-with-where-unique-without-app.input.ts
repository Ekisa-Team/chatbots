import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';
import { ChatbotUpdateWithoutAppInput } from './chatbot-update-without-app.input';
import { ChatbotCreateWithoutAppInput } from './chatbot-create-without-app.input';

@InputType()
export class ChatbotUpsertWithWhereUniqueWithoutAppInput {

    @Field(() => ChatbotWhereUniqueInput, {nullable:false})
    where!: ChatbotWhereUniqueInput;

    @Field(() => ChatbotUpdateWithoutAppInput, {nullable:false})
    update!: ChatbotUpdateWithoutAppInput;

    @Field(() => ChatbotCreateWithoutAppInput, {nullable:false})
    create!: ChatbotCreateWithoutAppInput;
}
