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
    //   type: 'array',
    //   title: 'Projects',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: [
    //         {
    //           type: 'projects',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
}
