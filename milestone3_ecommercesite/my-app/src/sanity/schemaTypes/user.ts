// schemas/user.ts
import { Rule } from '@sanity/types';

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(6).max(100),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Admin', value: 'admin' },
          { title: 'User', value: 'user' },
        ],
        layout: 'radio', // Ensure the layout is user-friendly
      },
      initialValue: 'user', // Default role is 'user' for new users
      validation: (Rule: Rule) => Rule.required(), // Ensure this field is required
    },
  ],
};
