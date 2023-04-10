export default {
  name: 'teams',
  type: 'document',
  title: 'Teams',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    // {
    //   name: 'projects',
    //   title: 'Projects',
    //   type: 'array',
    //   of: [{type: 'projects'}],
    // },
    {
      name: 'projects',
      type: 'array',
      title: 'Projects',
      of: [
        {
          type: 'projects',
        },
      ],
    },
  ],
}
