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
          {text: "Java", link: '/src/java/'},
          {text: "Grovvy", link: '/src/groovy/'},
          {text: "Scala", link: '/src/scala/'}
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