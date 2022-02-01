import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TemplateMessageCreateInput } from './template-message-create.input';

@ArgsType()
export class CreateOneTemplateMessageArgs {

    @Field(() => TemplateMessageCreateInput, {nullable:false})
    data!: TemplateMessageCreateInput;
}
