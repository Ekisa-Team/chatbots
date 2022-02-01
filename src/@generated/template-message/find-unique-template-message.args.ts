import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';

@ArgsType()
export class FindUniqueTemplateMessageArgs {

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:false})
    where!: TemplateMessageWhereUniqueInput;
}
