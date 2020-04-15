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
                  buildHookId: '5e979d2871158f8b482a8a69',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vds4bob5',
                  apiId: '1518a6b7-02f2-493b-97c8-54c699dff82a'
                },
                {
                  buildHookId: '5e979d2871158f98f62a8e84',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yy9qkiaw',
                  apiId: '67bdb8dc-4bfa-4ed5-b036-30f22573e176'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/deshetti/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yy9qkiaw.netlify.app',
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
