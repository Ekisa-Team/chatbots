import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatbotCreateWithoutAppInput } from './chatbot-create-without-app.input';
import { ChatbotCreateOrConnectWithoutAppInput } from './chatbot-create-or-connect-without-app.input';
import { ChatbotWhereUniqueInput } from './chatbot-where-unique.input';

@InputType()
export class ChatbotCreateNestedManyWithoutAppInput {

    @Field(() => [ChatbotCreateWithoutAppInput], {nullable:true})
    create?: Array<ChatbotCreateWithoutAppInput>;

    @Field(() => [ChatbotCreateOrConnectWithoutAppInput], {nullable:true})
    connectOrCreate?: Array<ChatbotCreateOrConnectWithoutAppInput>;

    @Field(() => [ChatbotWhereUniqueInput], {nullable:true})
    connect?: Array<ChatbotWhereUniqueInput>;
}
