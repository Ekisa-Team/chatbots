import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TemplateMessageScalarWhereInput } from './template-message-scalar-where.input';
import { TemplateMessageUpdateManyMutationInput } from './template-message-update-many-mutation.input';

@InputType()
export class TemplateMessageUpdateManyWithWhereWithoutChatbotInput {

    @Field(() => TemplateMessageScalarWhereInput, {nullable:false})
    where!: TemplateMessageScalarWhereInput;

    @Field(() => TemplateMessageUpdateManyMutationInput, {nullable:false})
    data!: TemplateMessageUpdateManyMutationInput;
}
