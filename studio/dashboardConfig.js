export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f4d49c12d701af74337128',
                  title: 'Sanity Studio',
                  name: 'what-i-can-do-studio',
                  apiId: 'b807d98c-7f29-44c4-94fa-c16818d8fcc7'
                },
                {
                  buildHookId: '61f4d49cf4dc62b093a35278',
                  title: 'Portfolio Website',
                  name: 'what-i-can-do',
                  apiId: '94d05d3a-ebc3-41df-8c1b-ce7c20bcbc2d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/4rturd13/what-i-can-do',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://what-i-can-do.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
