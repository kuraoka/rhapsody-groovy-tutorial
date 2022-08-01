export default {
  title: 'Rhapsody Plugin Tutorial',
  description: 'Tutorial for making Rhapsody Plugin.',
  outDir: "../docs/",
  base: "/rhapsody-plugin-tutorial/",
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [{
      items: [
        {text: "Java", link: '/src/java/'},
        {text: "Grovvy", link: '/src/groovy/'},
        {text: "Scala", link: '/src/scala/'},
        {text: "IBM Engineering Information", link: '/ibm-engineering-info/'}
      ]
    }] 
  }
}