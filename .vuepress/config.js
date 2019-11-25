module.exports = {
  title: "Web Design for Design Majors",
  description: "DES-340 Documentation Site",
  themeConfig: {
    displayAllHeaders: false, // Default: false
    lastUpdated: "Last Updated", // string | boolean,
    nav: [
      //   { text: 'Home', link: '/' },
      // { text: "Projects", link: "/projects/" }
      { text: 'Slack', link: 'https://msuwebdesign.slack.com/' },
    ],
    sidebar: [
      "/",
      {
        title: "Lectures",
        collapsable: true,
        children: [
          "lectures/lecture01-intro.md",
          "lectures/lecture02-rwd.md",
          "lectures/lecture03-web-how.md",
          "lectures/lecture04-clickability-and-affordance.md", // switch 3 and 4 later
          "lectures/lecture05-html-elements-and-attributes.md",
          "lectures/lecture06-the-dom.md",
          "lectures/lecture07-units.md",
          "lectures/lecture08-color.md",
          "lectures/lecture09-text-and-type.md",
          "lectures/lecture10-selectors.md",
          "lectures/lecture11-box-model.md",
          "lectures/lecture12-code-editor.md",
          "lectures/lecture13-backgrounds.md",
          "lectures/lecture14-images.md",
          "lectures/lecture15-specificity.md",
          "lectures/lecture16-position-and-display.md",
          "lectures/lecture17-layout-flexbox.md",
          "lectures/lecture18-responsive-code.md",
          "lectures/lecture19-grid.md",
          "lectures/lecture20-practical-layout.md",
          "lectures/lecture21-class-usage-naming.md",
          "lectures/lecture22-hover-and-transitions.md",
          "lectures/lecture23-effects.md",
          "lectures/lecture24-transforms.md",
          "lectures/lecture25-publishing.md",
          "lectures/lecture26-browser-tools.md",
          "lectures/lecture27-animation-principles.md",
          "lectures/lecture28-animation-code.md",
          "lectures/lecture29-web-fonts.md",
          "lectures/lecture30-seo.md",
          "lectures/lecture31-accessibility.md",
          "lectures/lecture32-javascript.md",
          "lectures/closing.md"
        ]
      },
      {
        title: "Exercises",
        collapsable: true,
        children: [
          "exercises/exercise01-bio.md",
          "exercises/exercise02-ui-study.md",
          "exercises/exercise03-first-website.md",
          "exercises/exercise04-atomic-design.md",
          'exercises/exercise05-coding-text.md',
          'exercises/exercise06-flexbox.md',
        ]
      },
      {
        title: "Projects",
        collapsable: true,
        children: [
          "projects/project01A.md",
          "projects/project01B.md",
          "projects/project02.md",
          "projects/project03.md",
          "projects/project04.md",
          "projects/project05.md",
          "projects/project06.md"
        ]
      },
      {
        title: "Resources",
        collapsable: true,
        children: [
          "resources/codecademy.md",
          "resources/required-accounts.md",
          "resources/curated-sources.md",
          "resources/resources.md",
          "resources/further-learning.md",
          "resources/randomizer.md",
          "resources/for-consideration.md"
        ]
      }
    ]
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [2, 3]
    },
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'))
    }
  },
  base: "/"
  // async ready() {
  //   // ...
  // }
};  