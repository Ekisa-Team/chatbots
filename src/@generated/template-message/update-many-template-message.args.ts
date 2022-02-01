import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageUpdateManyMutationInput } from './template-message-update-many-mutation.input';
import { TemplateMessageWhereInput } from './template-message-where.input';

@ArgsType()
export class UpdateManyTemplateMessageArgs {

    @Field(() => TemplateMessageUpdateManyMutationInput, {nullable:false})
    data!: TemplateMessageUpdateManyMutationInput;

    @Field(() => TemplateMessageWhereInput, {nullable:true})
    where?: TemplateMessageWhereInput;
}
