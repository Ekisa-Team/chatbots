import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ChatbotCreateNestedManyWithoutAppInput } from '../chatbot/chatbot-create-nested-many-without-app.input';

@InputType()
export class AppCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatbotCreateNestedManyWithoutAppInput, {nullable:true})
    chatbots?: ChatbotCreateNestedManyWithoutAppInput;
}
