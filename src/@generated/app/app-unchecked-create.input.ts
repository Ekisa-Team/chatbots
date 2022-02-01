import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ChatbotUncheckedCreateNestedManyWithoutAppInput } from '../chatbot/chatbot-unchecked-create-nested-many-without-app.input';

@InputType()
export class AppUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ChatbotUncheckedCreateNestedManyWithoutAppInput, {nullable:true})
    chatbots?: ChatbotUncheckedCreateNestedManyWithoutAppInput;
}
