import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageUpdateInput } from './template-message-update.input';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';

@ArgsType()
export class UpdateOneTemplateMessageArgs {

    @Field(() => TemplateMessageUpdateInput, {nullable:false})
    data!: TemplateMessageUpdateInput;

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:false})
    where!: TemplateMessageWhereUniqueInput;
}
