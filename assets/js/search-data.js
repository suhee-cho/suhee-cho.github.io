// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "Some small but exciting news in my life",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Random miscellaneous thoughts about research and life",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Collection of my research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "사람은 책을 만들고 책은 사람을 만든다 - 신용호Books that I have read",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "post-prologue",
        
          title: "Prologue",
        
        description: "Along with the thought from thoughts to language",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2026/02/20/prologue.html";
          
        },
      },{id: "post-between-idealism-and-reality",
        
          title: "Between Idealism and Reality",
        
        description: "My Journey in Academia",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2024/02/02/idealism.html";
          
        },
      },{id: "books-eleanor-oliphant-is-completely-fine",
          title: 'Eleanor Oliphant is completely fine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Eleanor_Oliphant.html";
            },},{id: "books-i-39-m-glad-my-mom-died",
          title: 'I&amp;#39;m glad my mom died',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Im_glad_my_mom_died.html";
            },},{id: "books-klala-and-the-sun",
          title: 'Klala and the sun',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Klara_and_the_sun.html";
            },},{id: "books-born-a-crime",
          title: 'Born a crime',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/born_a_crime.html";
            },},{id: "books-why-fish-don-39-t-exist",
          title: 'Why Fish Don&amp;#39;t Exist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/fish_dont_exist.html";
            },},{id: "books-half-his-age",
          title: 'Half his age',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/half_his_age.html";
            },},{id: "books-hillbilly-elegy",
          title: 'Hillbilly Elegy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hillbilly_elegy.html";
            },},{id: "books-life-is-hard",
          title: 'Life is hard',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/life_is_hard.html";
            },},{id: "books-raising-hare",
          title: 'Raising Hare',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/raising_hare.html";
            },},{id: "books-the-alchemist",
          title: 'The Alchemist',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_alchemist.html";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-kaist-graduation",
          title: 'Kaist graduation',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/KAIST%20graduation.html";
            },},{id: "news-suhee-has-been-selected-as-an-awardee-of-korea-talent-award-대한민국-인재상",
          title: 'Suhee has been selected as an awardee of Korea Talent Award (대한민국 인재상)!...',
          description: "",
          section: "News",},{id: "news-suhee-has-been-selected-as-a-fellow-of-overseas-phd-fellowship-supported-by-korea-foundation-for-advanced-studies",
          title: 'Suhee has been selected as a fellow of Overseas PhD fellowship supported by...',
          description: "",
          section: "News",},{id: "news-a-preprint-work-with-dr-jay-mcclelland-titled-capturing-rapid-learning-in-an-extended-successor-representation-theory-of-the-cognitive-map-has-been-posted-on-biorxiv-bookmark-tabs",
          title: 'A preprint work with Dr. Jay McClelland, titled “Capturing rapid learning in an...',
          description: "",
          section: "News",},{id: "news-suhee-has-been-admitted-to-and-commited-to-the-psychology-phd-program-at-stanford-university",
          title: 'Suhee has been admitted to and commited to the Psychology PhD program at...',
          description: "",
          section: "News",},{id: "news-suhee-has-been-selected-as-a-knight-hennessy-scholar-at-stanford-university-congrats",
          title: 'Suhee has been selected as a Knight-Hennessy Scholar at Stanford University! Congrats!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-capturing-rapid-learning-in-an-extended-successor-representation-theory-of-the-cognitive-map",
          title: 'Capturing Rapid Learning in an Extended Successor Representation Theory of the Cognitive Map...',
          description: "A computational model showing how the hippocampus supports rapid, one-shot spatial learning via BTSP and perceived salience-weighted successor representations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-neuromimetic-metaplasticity-for-adaptive-continual-learning-without-catastrophic-forgetting",
          title: 'Neuromimetic Metaplasticity for Adaptive Continual Learning without Catastrophic Forgetting',
          description: "A brain-inspired synaptic metaplasticity model that enables deep neural networks to learn continuously without catastrophic forgetting, by intermixing stable and unstable synapses.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},];
