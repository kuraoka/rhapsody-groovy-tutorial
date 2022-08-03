export default {
  title: 'Rhapsody Plugin Tutorial',
  description: 'Tutorial for making Rhapsody Plugin.',
  outDir: "../docs/",
  base: "/rhapsody-plugin-tutorial/",
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Plugin Programming',
        items: [
          {text: "Overview", link: '/tutorial/'},
          {text: "Java", link: '/tutorial/java/'},
          {text: "Groovy", link: '/tutorial/groovy/'},
          {text: "Scala", link: '/tutorial/scala/'}
        ]
      },
      {
        text: 'IBM Engineering Videos',
        items: [
          {text: "Software Education", link: '/ibm-engineering-info/SoftwareEducation'},
          {text: "MBSETraining", link: '/ibm-engineering-info/MBSETraining'},
          {text: "Jazz.net", link: '/ibm-engineering-info/JazzNet'}
        ]
      }
    ] 
  }
}