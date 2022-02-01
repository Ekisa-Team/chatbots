import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageWhereUniqueInput } from './template-message-where-unique.input';
import { TemplateMessageCreateInput } from './template-message-create.input';
import { TemplateMessageUpdateInput } from './template-message-update.input';

@ArgsType()
export class UpsertOneTemplateMessageArgs {

    @Field(() => TemplateMessageWhereUniqueInput, {nullable:false})
    where!: TemplateMessageWhereUniqueInput;

    @Field(() => TemplateMessageCreateInput, {nullable:false})
    create!: TemplateMessageCreateInput;

    @Field(() => TemplateMessageUpdateInput, {nullable:false})
    update!: TemplateMessageUpdateInput;
}
