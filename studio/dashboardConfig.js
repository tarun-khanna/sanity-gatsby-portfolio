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
                  buildHookId: '5cde7c02f313f9a1efd223fc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2bw92mpn',
                  apiId: 'e3173bcd-acd9-4a42-9902-02a8d81e084d'
                },
                {
                  buildHookId: '5cde7c02250c19c25f25b2ac',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nhu9vp8s',
                  apiId: '3064f7ce-8965-47ea-a2cf-351615a8cf4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarunraj95/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-nhu9vp8s.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
