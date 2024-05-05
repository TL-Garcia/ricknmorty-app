import { Button } from '../../../../../ui/components/button/Button';
import { Input } from '../../../../../ui/components/input/Input';
import './Form.scss';

export const CommentForm = () => {
  return (
    <form action="" className="form">
      <h4 className="form__title">Comments</h4>
      <Input
        label="Name"
        name="name"
        minLength={2}
        required
        placeholder="John"
      />
      <Input
        label="Email"
        name="email"
        type="email"
        required
        placeholder="john@mail.com"
      />

      <Input label="Comment" name="comment" type="long" maxLength={500} />
      <Button>Submit</Button>
    </form>
  );
};
