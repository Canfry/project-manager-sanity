export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'teams',
      title: 'Teams',
      type: 'array',
      of: [
        {
          type: 'teams',
        },
      ],
    },
  ],
}
