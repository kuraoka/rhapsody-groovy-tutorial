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
          {text: "Software Education(By Tag)", link: '/ibm-engineering-info/SoftwareEducationTag'},
          {text: "MBSETraining", link: '/ibm-engineering-info/MBSETraining'},
          {text: "MBSETraining(By Tag)", link: '/ibm-engineering-info/MBSETrainingTag'},
          {text: "Jazz.net", link: '/ibm-engineering-info/JazzNet'},
          {text: "Jazz.net(By Tag)", link: '/ibm-engineering-info/JazzNetTag'}
        ]
      }
    ] 
  }
}