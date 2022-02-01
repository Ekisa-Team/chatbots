import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageWhereInput } from './template-message-where.input';

@InputType()
export class TemplateMessageListRelationFilter {

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    every?: TemplateMessageWhereInput;

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    some?: TemplateMessageWhereInput;

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    none?: TemplateMessageWhereInput;
}
