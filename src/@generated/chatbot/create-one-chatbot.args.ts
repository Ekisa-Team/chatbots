import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatbotCreateInput } from './chatbot-create.input';

@ArgsType()
export class CreateOneChatbotArgs {

    @Field(() => ChatbotCreateInput, {nullable:false})
    data!: ChatbotCreateInput;
}
